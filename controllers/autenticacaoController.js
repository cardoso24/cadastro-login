const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
const bcrypt =require('bcrypt')
const path =require('path')


 
  module.exports.cadastrarUsuario = (usuario)=> { //rota para criacao do cadastro localhost/cadastro/novo
  
    if (usuario.psw !== usuario.psw2) {
      res.render('cadastro', {
        error: {
          senha: 'Senhas incompativeis',
        },
        content: req.body,
      });
    }
       
    const usuariosCadastrados = lerUsuario()
    usuariosCadastrados.push(usuario) //salvando oss dados
    salvarUsuario(usuariosCadastrados)  //chamar a funcao para salvar o usuario no JSON
    
    
     };
  
module.exports.buscarUsuario = (email) => {
    const usuariosCadastrados =lerUsuario()
    return usuariosCadastrados.find(usuarios => usuarios.email === email) //usuario sendo usuario.email =email
  }



     function salvarUsuario (dado){
       const str = JSON.stringify(dado)  
        fs.writeFileSync(path.join(__dirname, 'usuariosCadastrados.json'), str)// criando o json com os usuarios cadastrados na string
        
      }

      function lerUsuario(){
        
        const str = fs.readFileSync(path.join(__dirname, 'usuariosCadastrados.json'))// lendo o json com os usuarios cadastrados na string
        const obj = JSON.parse(str)  

        return obj;

       }
      
    
    
     