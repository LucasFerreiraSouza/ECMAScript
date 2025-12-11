var contar = document.getElementById('contar');
var h1 = document.querySelector('h1');


contar.addEventListener('click', clicarContar);

function clicarContar(){
    var tabuada = document.getElementById('tabuada');
    var inicio = document.getElementById('inicio').value;
    var fim = document.getElementById('fim').value;
    var numero = document.getElementById('numero').value;
    var multiplicao = 
    
    inicio=Number(inicio)
    fim=Number(fim)
    numero=Number(numero)

    if (inicio > 0 && fim > 0 && numero > 0){
        tabuada.innerHTML = `Tabuada: </br>`;
        
        for(var i=inicio;i<=fim;i++){
            tabuada.innerHTML +=` ${numero} x ${i} = ${multiplicao*i} <br>` 
            console.log(tabuada)
        }
    }
    else{ 
        alert(`Dados inválidos!`)
        tabuada.innerHTML = `Tabuada...`
    }
}


