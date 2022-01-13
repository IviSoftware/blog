module.exports={
    getUsers:async function(conexion,){
        return await conexion.query('SELECT * FROM users');
    }
}