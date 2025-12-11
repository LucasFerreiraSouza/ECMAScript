  var h1 = document.querySelector('h1');
var mensagem = document.getElementById('mensagem');
var imagem = document.getElementById('imagem');
var verificar = document.getElementById('verificar');
var inputIdade = document.getElementById('idade');
var feminino = document.getElementById('feminino');
var masculino = document.getElementById('masculino');

verificar.addEventListener('click', clicarVerificar);

function clicarVerificar(){
    var idade = new Date().getFullYear() - Number(inputIdade.value);

    // Limpa o container antes de colocar uma nova imagem
    imagem.innerHTML = "";

    // Cria um elemento <img>
    var img = document.createElement("img");

    if (idade < 0 || idade > 120){
        mensagem.innerHTML = `Dados inválidos.`;
        img.setAttribute("src", "imagens/erro.png");
    } 
    else if (feminino.checked && idade < 18) {
        mensagem.innerHTML = `${idade} anos, você é jovem.`;
        img.setAttribute("src", "imagens/f1.png");
    } 
    else if (feminino.checked && idade < 50) {
        mensagem.innerHTML = `${idade} anos, você é adulta.`;
        img.setAttribute("src", "imagens/f2.png");
    } 
    else if (feminino.checked && idade >= 50) {
        mensagem.innerHTML = `${idade} anos, você é idosa.`;
        img.setAttribute("src", "imagens/f3.png");
    } 
    else if (masculino.checked && idade < 18) {
        mensagem.innerHTML = `${idade} anos, você é jovem.`;
        img.setAttribute("src", "imagens/m1.png");
    } 
    else if (masculino.checked && idade < 50) {
        mensagem.innerHTML = `${idade} anos, você é adulto.`;
        img.setAttribute("src", "imagens/m2.png");
    } 
    else if (masculino.checked && idade >= 50) {
        mensagem.innerHTML = `${idade} anos, você é idoso.`;
        img.setAttribute("src", "imagens/m3.png");
    } 
    else {
        mensagem.innerHTML = `Dados inválidos.`;
        img.setAttribute("src", "imagens/erro.png");
    }

    // adiciona a imagem ao DIV
    imagem.appendChild(img);
}
