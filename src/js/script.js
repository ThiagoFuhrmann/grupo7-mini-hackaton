
var nome = document.getElementById("nome")
var email = document.getElementById("email")
var assunto = document.getElementById("assunto")
var mensagem = document.getElementById("mensagem")
var botao = document.getElementById("botao")
var resposta = document.getElementById("resposta")
var paragrafo = document.createElement("p");
var texto = document.createTextNode("Sugestão enviada com sucesso!");


botao.addEventListener('click', e => {
    e.preventDefault()
    nome.classList.remove("cor-erro")
    email.classList.remove("cor-erro")
    assunto.classList.remove("cor-erro")
    mensagem.classList.remove("cor-erro")
    if(nome.value == ''){
        nome.classList.add("cor-erro")
    }
    if(email.value == ''){
        assunto.classList.add("cor-erro")
    }
    if(assunto.value == ''){
        assunto.classList.add("cor-erro")
    }
    if(mensagem.value == ''){
        mensagem.classList.add("cor-erro")
    }

    if(nome.value != '' && email.value != '' && assunto.value != '' && mensagem.value != ''){
        enviarSugestao();
    }
})

function enviarSugestao(){
    var aux = "nome: " + nome.value + " " + "email: " + email.value + " " + "assunto: " + assunto.value + " " + "mensagem: " + mensagem.value;
    var obj = JSON.stringify(aux);
    window.localStorage.setItem('sugestão', obj);

    nome.value = '';
    email.value = '';
    assunto.value ='';
    mensagem.value = '';
    paragrafo.appendChild(texto);
    setInterval(function(){
        resposta.appendChild(paragrafo);
    }, 1000);
}