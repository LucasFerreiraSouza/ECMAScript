let contar = document.getElementById('contar');
let h1 = document.querySelector('h1');


contar.addEventListener('click', clicarContar);

function clicarContar(){
    let tabuada = document.getElementById('tabuada');
    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let numero = document.getElementById('numero').value;
    
    inicio=Number(inicio)
    fim=Number(fim)
    numero=Number(numero)

    if (inicio > 0 && fim > 0 && numero > 0){
        tabuada.innerHTML = `Tabuada: </br>`;
        
        for(let i=inicio;i<=fim;i++){
            tabuada.innerHTML +=` ${numero} x ${i} = ${numero*i} <br>` 
            console.log(tabuada)
        }
    }
    else{ 
        alert(`Dados inválidos!`)
        tabuada.innerHTML = `Tabuada...`
    }
}


