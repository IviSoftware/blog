var passport = require('passport');
var PassportLocal = require('passport-local').Strategy;

  

passport.use(new PassportLocal((username,password,done)=>{
    
    if(username==="ivi" && password == "123"){
        return done(null,{id:1, name:"cody"})
    }
    done(null,false);
}));
          
passport.serializeUser(function(user,done){
done(null,user.id)
})
          
passport.deserializeUser(function(id,done){
    done(null,{id:1, name:"cody"})
});

module.exports=passport;
