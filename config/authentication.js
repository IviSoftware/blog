var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const connect = require('./conexion');
var data;
let userSession= new Map();


passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {  
  
    let nicknameCount = await connect.query('SELECT COUNT(*) FROM users WHERE nickname=$1',[username]);
    let passwordCount = await connect.query('SELECT COUNT(*) FROM users WHERE password=$1',[password]);

    
    if( nicknameCount.rowCount >= 1 && passwordCount.rowCount >= 1){
        data=await connect.query('SELECT * FROM users WHERE nickname=$1',[username])
        /* console.log(data.rows[0]); */
        /* console.log('aqui data')
        console.log(data.rows)
        console.log('aqui termina data') */
        userSession.set(username,data.rows[0].id)
        /* console.log(userSession.get(username)) asi se obtiene el id */ 
        return done(null,data.rows[0]);
    }
    done(null,false);
}));
          
passport.serializeUser(function(data,done){
    /* console.log(data.rows); */
    done(null,data.id);
})
          
passport.deserializeUser(async function(id,done){
    user = await connect.query('SELECT * FROM users WHERE id=$1',[id])
    done(null,user.rows[0]);
});

module.exports={
    passport:passport,
    userId:userSession
};
