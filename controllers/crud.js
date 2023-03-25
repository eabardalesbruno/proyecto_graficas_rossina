//Invocamos a la conexion de la DB
const conexion = require("../database/db");

//GUARDAR un REGISTRO
exports.save = (req, res) => {
  const recursos_ordinarios = req.body.recursos_ordinarios;
  const certificado = req.body.certificado;
  const compromiso = req.body.compromiso;
  const devengado = req.body.devengado;
  conexion.query(
    "INSERT INTO finanzas_1 SET ?",
    {
      recursos_ordinarios: recursos_ordinarios,
      certificado: certificado,
      compromiso: compromiso,
      devengado: devengado,
    },
    (error, result1) => {
      if (error) {
        console.log(error);
      } else {
        //console.log(results);
        res.redirect("/");
      }
    }
  );
};

//GUARDAR un REGISTRO2
exports.save2 = (req, res) => {
  const rubro = req.body.rubro;
  const techo = req.body.techo;
  const certificado = req.body.certificado;
  const compromiso = req.body.compromiso;
  const devengado = req.body.devengado;
  conexion.query(
    "INSERT INTO finanzas_2 SET ?",
    {
      rubro: rubro,
      techo: techo,
      certificado: certificado,
      compromiso: compromiso,
      devengado: devengado,
    },
    (error, results2) => {
      if (error) {
        console.log(error);
      } else {
        //console.log(results);
        res.redirect("/");
      }
    }
  );
};

//ACTUALIZAR un REGISTRO
exports.update = (req, res) => {
  const id = req.body.id;
  const recursos_ordinarios = req.body.recursos_ordinarios;
  const certificado = req.body.certificado;
  const compromiso = req.body.compromiso;
  const devengado = req.body.devengado;
  conexion.query(
    "UPDATE finanzas_1 SET ? WHERE id = ?",
    [
      {
        recursos_ordinarios: recursos_ordinarios,
        certificado: certificado,
        compromiso: compromiso,
        devengado: devengado,
      },
      id,
    ],
    (error, result1) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
      ///////////////////////////////////////////////
    }
  );
};
//ACTUALIZAR un REGISTRO 2
exports.update2 = (req, res) => {
  const id = req.body.id;
  const rubro = req.body.rubro;
  const techo = req.body.techo;
  const certificado = req.body.certificado;
  const compromiso = req.body.compromiso;
  const devengado = req.body.devengado;
  conexion.query(
    "UPDATE finanzas_2 SET ? WHERE id = ?",
    [
      {
        rubro: rubro,
        techo: techo,
        certificado: certificado,
        compromiso: compromiso,
        devengado: devengado,
      },
      id,
    ],
    (error, results2) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/");
      }
      ///////////////////////////////////////////////
    }
  );
};
