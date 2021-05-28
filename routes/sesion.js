const express = require('express');
const router = express.Router();
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro
const autenticar  = require('../controllers/autenticacaoController');

router.get('/', (req, res)=>{
    res.render('sesion')
  })

  module.exports = router;
