let contar = document.getElementById('contar');
let h1 = document.querySelector('h1');

contar.addEventListener('click', clicarContar);

function clicarContar(){
    let tabuada = document.getElementById('tabuada');
    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let numero = document.getElementById('numero').value;
    
    inicio = Number(inicio);
    fim = Number(fim);
    numero = Number(numero);

    if (inicio > 0 && fim > 0 && numero > 0){
        tabuada.innerHTML = ""; // limpa antes

        for(let i = inicio; i <= fim; i++){
            let item = document.createElement("option");
            item.text = `${numero} x ${i} = ${numero * i}`;
            item.value = `tabuada${i}`;
            tabuada.appendChild(item);
        }

    } else { 
        alert(`Dados inválidos!`);
        tabuada.innerHTML = `Tabuada...`;
    }
}
