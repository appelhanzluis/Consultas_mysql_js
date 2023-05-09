//creo la conexion
const mysql = require("mysql");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "Luis",
    password: "5147",
    database: "cofre"
});

//pruebo la conexion
conexion.connect((err) =>{
    if(err) throw err;
    console.log("La conexion funciona correctamente :)");
});

/*
//Inserto datos en la tabla
const insertar = "INSERT INTO clientes (ID, NOMBRE) VALUES (6, 'GIULIANA')";
conexion.query(insertar, (err, rows)=>{
    if(err) throw err;
});
*/

/*
const insertar = "INSERT INTO clientes (APELLIDO, FECHA_NAC, DNI) VALUES ('Appelhanz', '2003-09-06' , '44.753.883')";
conexion.query(insertar, (err, rows)=>{
    if(err) throw err;
});
*/


//creo la consulta - seleciono una tabla para que me muestre los datos
conexion.query("SELECT * from clientes", (err, rows)=>{
    if(err) throw err;
    console.log("Los datos de la tabla son estos:");
    console.log(rows);
    console.log("La cantidad de resultados es:");
    console.log(rows.length);
    const usuarioUno = rows[0];
    console.log(`El usuario 1 se llama ${usuarioUno.NOMBRE} y tiene el id ${usuarioUno.ID}`);
    const usuarioDos = rows[1];
    console.log(`El usuario 2 se llama ${usuarioDos.NOMBRE} y tiene el id ${usuarioDos.ID}`);
    const usuarioTres = rows[2];
    console.log(`El usuario 3 se llama ${usuarioTres.NOMBRE} y su dni es ${usuarioTres.DNI}`);
});

//Finalizo la conexion
conexion.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexion MySQL: ', err);
    } else {
      console.log('Conexion MySQL finalizada.');
    }
  });

  //para ejecutar en terminal: node mysql.js
