const userModel = require('../model/user_model');
const connect = require('../config/conexion');

module.exports={
    renderRegister:function(req,res){
        res.render('usersViews/register.ejs')
    },
    saveUser:function(req,res){
        userModel.insertUsers(connect,req.body)
            .then(result=>{
                res.redirect('/'); 
            })
            .catch(err=>{
                console.error(err);
            });
    }
}