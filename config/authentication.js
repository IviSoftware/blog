var passport = require('passport');
var PassportLocal = require('passport-local').Strategy;
const connect = require('./conexion');
let data={};

passport.use(new PassportLocal(async(username,password,done)=>{    
    let nicknameCount = await connect.query('SELECT COUNT(*) FROM users WHERE nickname=$1',[username]);
    let passwordCount = await connect.query('SELECT COUNT(*) FROM users WHERE password=$1',[password]);

    
    if( nicknameCount.rowCount == 1 && passwordCount.rowCount == 1){
        data=await connect.query('SELECT * FROM users WHERE nickname=$1',[username])
        console.log(data.rows[0]);
        return done(null,data.rows[0]);
    }
    done(null,false);
}));
          
passport.serializeUser(function(user,done){
done(null,data.rows[0].id);
})
          
passport.deserializeUser(function(id,done){
    done(null,data.rows[0]);
});

module.exports=passport;
