
//Aqui será feito o formulário de cadastro e o jquery também tem uns efeitos prontos
//Essa estrutura por padrão é só para iniciar o jquery

// Estrutura do efeito para esconder o formulário de cadastro
$(document).ready(function(){ // Esse é um comando padrão para fazer funcionar o jquery
     //Aqui dentro das chaves serão colocados os comandos queserão trabalhados com o jquery
    //É um atalho do comando abaixo, que está na id da #section cadastro
    $("#botao-cadastrar").click(function(){ // botao-cadastrar está na #section id da página index.html
        //Acima tem-se uma função dentro de outra função, mas isso é comum no jquery
        //form-cadastrar está em login.html e será colocado aqui o que ele irá fazer
        $("#form-cadastrar").slideToggle("slow"); //Irá aparecer a #section-cadastrar se ela estiver se escondendo
        //Toda vez que clicar no comando ele irá aparecer $("#form-cadastrar").show("slow"); ou $("#form-cadastrar").hind("slow");
        //porém, o toggle irá fazer essas duas coisas, ou seja, dispensa o show e o hide, é isso que o toggle irá fazer
        //Acima ele estava aparecendo, agora ele irá se esconder, se em um - o botão cadastrar está aparecendo - no outro ele irá se esconder
        $("#section-login").slideToggle("slow"); //Irá aparecer a #section-login se ele estiver se escondendo
        //Agora ele irá sumir/esconder
        $("#botao-cadastrar").hide(); //irá fazer sumir o botao-cadastrar em criar conta
        //Agora será feito um efeito - vamos na parte do script.js e criar no alert a função cadastrar
    }); 
    //O atalho acima é similar ao comando abaixo, veja como fica reduzido com o jquery o comando acima.
    //$("#botao-cadastrar").click() é um atalho reduzido similar a: document.getElementByID("botao cadastrar").click()
    //O jquery tem essa função de diminuir o comando que será digitado
});