var date = require('moment');

module.exports = {
    getData:async function(conexion){
        return await conexion.query('SELECT * FROM posts');
    },
    insertData:async function(conexion,dataForm){

        const fecha = date().format('YYYY-MM-DD HH:mm:ss');
        //interactuamos con la BD, los datos es una variable que contiene req.body
        return await conexion.query("INSERT INTO posts(title,content,date,description) VALUES ($1,$2,$3,$4)",[dataForm.title,dataForm.content,fecha,dataForm.description]);
    }
}