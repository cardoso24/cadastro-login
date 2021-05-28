const express = require('express');
const router = express.Router();
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro
const autenticar  = require('../controllers/autenticacaoController');
const session = require('express-session')
  
  router.get('/', function(req, res, next) {
    res.render('login');
  });
  
 
   
  router.post('/users', async (req, res) =>{
    const login =req.body
    const usuario = autenticar.buscarUsuario(login.email)
    
      if(!usuario){
     
        res.send(404) //usuario nao existe
      } else {
          if(await validarSenha(login.psw, usuario.hash)){
            req.session.usuarios = usuario
                   
           res.redirect('sesion')
           }else{
          res.send(400)
         }
      }
    
      })
     
      router.get('/sesion', (req, res)=>{
        if(req.session.usuarios){
        res.render('sesion') 
      }else {res.send(403)}

      })
          
        
      
  


  
  async function encriptarSenha(obj){
          
    const salt = await bcrypt.genSalt(5)
    return await bcrypt.hash(obj, salt)
     
  
  }
  
  async function validarSenha(senha, hash){
   return await bcrypt.compare(senha,hash)
  }
  
  
  module.exports = router;