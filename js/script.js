//efeito do botão voltar ao Topo

// Aqui a função criará o efeito que será um evento que ao clicar no botão: voltar ao topo, a página rolará para o topo
    function topo() { 
            window.scrollTo(   // scroollTo é um método que cuida da parte da barra de rolagem do navegador web
                
                {  //Aqui abri-se a chave dentro do método da função porque ele é uma matriz
                    top:0,   //O top:0 e o left:0 irão substituir o bottom: 5px e o right: 50px do estilo.css no #voltar-topo
                    left:0,
                    behavior: "smooth" //behavior é o comportamento/efeito. toda vez que se clicar no botão: valtar ao topo será feito esse evento

                }
            )
     }      

//Validação de Login
     
     //Função relacionada a parte do botão login da página login.html
     function login() {
        var logado = 0; //Variável que irá fazer a validação, que irá começar com zero
        var usuario = document.getElementById("usuario").value; //O getElementById irá chamar o ID do elemento que você escolher, ele tem diversas funionalidades e value irá pegar o valor do usuario
        var senha = document.getElementById("senha").value; //Value irá pegar o valor de senha
        if(usuario == "admin" && senha == "123456"){ //Validação do usuario e senha, e ao clicar em login será feito esse process da funtion login
            window.location = "index.html"; //Será redirecionado para o menu login da página index.html quando clicar
            logado = 1; //irá substituir 0 por 1 caso dê tudo certo
        }
        if(logado == 0){
            alert("Acesso negado. Dados incorretos!");
        }
     }

//Ativar alert no botão cadastrar e validar criar conta

        //Após ciar a função no jquery, vamos cirar a função aqui no script.js para ativar o alert 
                //function cadastro(){
               //  alert("Cadastrado com sucesso!");
                //   window.location.href = "index.html"; // Irá redirecionar o elemento para index.html

                function cadastro() {
                    var usuario = document.getElementById("usuario").value;
                    var email = document.getElementById("email").value;
                    var senha = document.getElementById("senha").value;
                   
                        if(usuario == "" && email =="" && senha == ""){
                            alert("Por favor, preencha todos os campos!");
                            return false;
                           } else {
                                 alert("Cadastrado com sucesso!");
                                 window.location.href = "index.html"; // Irá redirecionar o elemento para index.html
                                 return true;
                                } 
                    }

        // Função para validar o formato de e-mail (opcional)
            function isValidEmail(email) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
