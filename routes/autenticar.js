const express = require('express');
const router = express.Router();
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro
const autenticar  = require('../controllers/autenticacaoController');



router.get('/', function(req, res, next) {
  res.render('cadastro',{
    error: {},
    content: {},
  });
  
});

router.post('/novo', async (req, res) =>{
const usuarios =req.body
const hash = await encriptarSenha(usuarios.psw)

autenticar.cadastrarUsuario({
  nome: usuarios.nome,
  email: usuarios.email,
  hash

  })
  res.redirect('/')
})

   
   

async function encriptarSenha(obj){
        
  const salt = await bcrypt.genSalt(5)
  return await bcrypt.hash(obj, salt)
   

}

module.exports = router;





  


