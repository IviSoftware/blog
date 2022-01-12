const { response } = require('express');
var connection = require('../config/conexion');
const postModel = require('../model/post_model');

module.exports={
    timeline:function(req,res){
        postModel.getData(connection)
            .then(postsData=>{
                console.log(postsData.rows)
                res.render('timeline.ejs',{posts:postsData.rows});
            })
            .catch(err=>{
                console.error(err);
            })
    },
    create:function(req,res){
        res.render('create_blog');
    },
    save:function(req,res){
/*         console.log('hi');
        res.redirect('/timeline'); */
        
        postModel.insertData(connection,req.body)
            .then(response =>{
                console.log(response);
                res.redirect('/timeline');
            })
            .catch(err=>{
                console.error(err);
            }); 
        
    }
}