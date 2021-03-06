var date = require('moment');

module.exports = {
    getData:async function(conexion){
        return await conexion.query('SELECT * FROM posts');
    },
    insertData:async function(conexion,dataForm,id){

        const fecha = date().format('YYYY-MM-DD HH:mm:ss');
        //interactuamos con la BD, los datos es una variable que contiene req.body
        return await conexion.query("INSERT INTO posts(title,content,date,description,usuario_id) VALUES ($1,$2,$3,$4,$5)",[dataForm.title,dataForm.content,fecha,dataForm.description,id]);
    },
    getDataUser:async function(conexion,idUser){
        return await conexion.query('SELECT * FROM posts WHERE usuario_id=$1',[idUser]);
    },
    updateData:async function(conexion,dataForm,id_post){
        return await conexion.query('UPDATE posts SET title=$1,content=$2,description=$3 WHERE id=$4',[dataForm.title,dataForm.content,dataForm.description,id_post]);
    },
    deleteData:async function(conexion,id_post){
        return await conexion.query('DELETE FROM posts WHERE id=$1',[id_post]);
    }
}