module.exports={
    getUsers:async function(conexion,){
        return await conexion.query('SELECT * FROM users');
    },
    insertUsers:async function(conexion,user){
        return await conexion.query('INSERT INTO users(nickname,email,password) VALUES($1,$2,$3)',[user.usernameR,user.emailR,user.passwordR])
    }
}