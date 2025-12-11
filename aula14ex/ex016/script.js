var contar = document.getElementById('contar');
var h1 = document.querySelector('h1');


contar.addEventListener('click', clicarContar);

function clicarContar(){
    var mensagem = document.getElementById('mensagem');
    var inicio = document.getElementById('inicio').value;
    var fim = document.getElementById('fim').value;
    var passo = document.getElementById('passo').value;
    

    mensagem.innerHTML = ` Início ➡ `

    for(var i=Number(inicio);i<=Number(fim);i=i+Number(passo)){
        mensagem.innerHTML +=`${i} `
    }

    if(i=fim){
        mensagem.innerHTML += ` 🏁 Fim `
    }
    i=0
}


