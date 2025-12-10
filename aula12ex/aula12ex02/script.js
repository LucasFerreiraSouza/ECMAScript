var h1 = document.querySelector('h1');
var mensagem = document.getElementById('mensagem');
var imagem = document.getElementById('imagem');
var verificar = document.getElementById('verificar');
var idade = document.getElementById('idade');
var feminino = document.getElementById('feminino');
var masculino = document.getElementById('masculino');

verificar.addEventListener('click', clicarVerificar);

function clicarVerificar(){
    if (idade.value.length == 0 || (feminino.checked == false && masculino.checked == false)) {
        alert('Por favor, preencha todos os campos corretamente!');
    }  else if (feminino.checked && idade.value < 18) {
        mensagem.innerHTML = `${idade.value} anos, você é jovem.`;
        imagem.innerHTML = '<img src=imagens/f1.png>';
    } else if (feminino.checked && idade.value < 50) {
        mensagem.innerHTML = `${idade.value} anos, você é adulta.`;
        imagem.innerHTML = '<img src=imagens/f2.png>';
    } else if (feminino.checked && idade.value >= 50) {
        mensagem.innerHTML = `${idade.value} anos, você é idosa.`;
        imagem.innerHTML = '<img src=imagens/f3.png>';
    } else if (masculino.checked && idade.value < 18) {
        mensagem.innerHTML = `${idade.value} anos, você é jovem.`;
        imagem.innerHTML = '<img src=imagens/m1.png>';
    } else if (masculino.checked && idade.value < 50) {
        mensagem.innerHTML = `${idade.value} anos, você é adulto.`;
        imagem.innerHTML = '<img src=imagens/m2.png>';
    } else if (masculino.checked && idade.value >= 50) {
        mensagem.innerHTML = `${idade.value} anos, você é idoso.`;
        imagem.innerHTML = '<img src=imagens/m3.png>';
    } 
}    