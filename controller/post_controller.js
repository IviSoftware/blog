var connection = require('../config/conexion');
const postModel = require('../model/post_model');
const userModel = require('../model/user_model');

const {marked} = require('marked');

module.exports={
    timeline:function(req,res){
        postModel.getData(connection)
            .then(postsData=>{
                /* console.log(req.user.id);
                console.log(postsData.rows); */
                userModel.getUsers(connection)
                .then(userData=>{
                    res.render('timeline.ejs',{posts:postsData.rows,users:userData.rows});
                })
               
            })
            .catch(err=>{
                console.error(err);
            })
    },
    create:function(req,res){
        res.render('create_blog');
    },
    save:function(req,res){
        postModel.insertData(connection,req.body,req.user.id)
            .then(response =>{
                console.log(response);
                res.redirect('/timeline');
            })
            .catch(err=>{
                console.error(err);
            }); 
        
    },
    cerrar:function(req,res){
        req.logout();
        res.redirect('/');
    },
    leer:function(req,res){
        postModel.getData(connection)
            .then(postsData=>{
                userModel.getUsers(connection)
                .then(userData=>{
                    const {id}=req.params;
                    /* html = marked(('# Marked in Node.js\n\nRendered by **marked**.').toString()); */
                    /* html = marked((postsData.rows.content)) */
                    
                    res.render('leer.ejs',{
                        marked:marked,
                        posts:postsData.rows,
                        idPost:id,
                        users:userData.rows
                    });
                })
            })
            .catch(err=>{
                console.error(err);
            })
    },
    myPosts:function(req,res){
        postModel.getDataUser(connection,req.user.id)
            .then(postsData=>{
                /* console.log(req.user.id);
                console.log(postsData.rows); */
                userModel.getUsers(connection)
                .then(userData=>{
                    res.render('myPosts',{posts:postsData.rows,users:userData.rows});
                })
               
            })
            .catch(err=>{
                console.error(err);
            })
    },
    editar:function(req,res){
        postModel.getData(connection)
            .then(postsData=>{
                userModel.getUsers(connection)
                .then(userData=>{
                    const {id}=req.params;
                    /* html = marked(('# Marked in Node.js\n\nRendered by **marked**.').toString()); */
                    /* html = marked((postsData.rows.content)) */
                    res.render('postEditar.ejs',{
                        marked:marked,
                        posts:postsData.rows,
                        idPost:id,
                        users:userData.rows
                    });
                })
            })
            .catch(err=>{
                console.error(err);
            })
    }
}