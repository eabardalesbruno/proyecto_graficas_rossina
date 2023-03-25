const express = require("express");
const router = express.Router();

//Invocamos a la conexion de la DB
const conexion = require("./database/db");

//RUTA PARA MOSTRAR TODOS LOS REGISTROS
router.get("/", (req, res) => {
  conexion.query("SELECT * FROM finanzas_1", (error, results1) => {
    if (error) {
      throw error;
    } else {
      res.render("index.ejs", { data: results1 });
    }
  });
});
router.get("/", (req, res) => {
  conexion.query("SELECT * FROM finanzas_2", (error, results2) => {
    if (error) {
      throw error;
    } else {
      res.render("index.ejs", { data2: results2 });
    }
  });
});
//ruta para enviar los datos en formato json
router.get("/data", (req, res) => {
  conexion.query("SELECT * FROM finanzas_1", (error, results1) => {
    if (error) {
      throw error;
    } else {
      data = JSON.stringify(results1);
      res.send(data);
    }
  });
});
router.get("/data2", (req, res) => {
  conexion.query("SELECT * FROM finanzas_2", (error, results2) => {
    if (error) {
      throw error;
    } else {
      data2 = JSON.stringify(results2);
      res.send(data2);
    }
  });
});

//RUTA QUE NOS LLEVA AL FORMULARIO PARA DAR DE ALTA UN NUEVO REGISTRO
router.get("/create", (req, res) => {
  res.render("create");
});

//RUTA QUE NOS LLEVA AL FORMULARIO PARA DAR DE ALTA UN NUEVO REGISTRO2
router.get("/create_finanzas2", (req, res) => {
  res.render("create_finanzas2");
});

//RUTA PARA EDITAR UN REGISTRO SELECCIONADO
router.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM finanzas_1 WHERE id=?",
    [id],
    (error, results1) => {
      if (error) {
        throw error;
      } else {
        res.render("edit.ejs", { recursos_ordinarios: results1[0] });
      }
    }
  );
});

router.get("/edit_finanzas2/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM finanzas_2 WHERE id=?",
    [id],
    (error, results2) => {
      if (error) {
        throw error;
      } else {
        res.render("edit_finanzas2.ejs", { rubro: results2[0] });
      }
    }
  );
});
//RUTA PARA ELIMINAR UN REGISTRO SELECCIONADO
router.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "DELETE FROM finanzas_1 WHERE id = ?",
    [id],
    (error, results1) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
    }
  );
});

router.get("/delete2/:id", (req, res) => {
  const id = req.params.id;
  conexion.query(
    "DELETE FROM finanzas_2 WHERE id = ?",
    [id],
    (error, results2) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
    }
  );
});
//RUTA para contacto
router.get("/contacto", (req, res) => {
  res.render("contacto");
});

//Invocamos los metodos para el CRUD
const crud = require("./controllers/crud");
const { json } = require("express");

// usamos router.post porque en el formulario el method="POST"
router.post("/save", crud.save);
router.post("/save2", crud.save2);
router.post("/update", crud.update);
router.post("/update2", crud.update2);

module.exports = router;
