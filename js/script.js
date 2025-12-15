console.log("Página carregada com sucesso!");
alert("Bem-vindo ao Traveller!");

//replace nome
var mensagem = "Muito obrigado, **NOME**, por participar!";
var nome = prompt("Digite seu nome:");
var newName = mensagem.replace("**NOME**", nome);
alert(newName);


//manipulação html
function alterarTitulo() {
        var novoTitulo = prompt("Digite o novo título para a seção de Destinos Populares:");
        document.getElementById("tituloPopular").innerText = novoTitulo;
}


