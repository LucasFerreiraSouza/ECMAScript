let contar = document.getElementById('contar');
let h1 = document.querySelector('h1');


contar.addEventListener('click', clicarContar);

function clicarContar(){
    let mensagem = document.getElementById('mensagem');
    let inicio = document.getElementById('inicio').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    
    if (inicio < fim && inicio > 0 && fim > 0 && passo > 0){
        //crescente
        mensagem.innerHTML = ` Início ➡ `

        for(let i=Number(inicio);i<=Number(fim);i+=Number(passo)){
            mensagem.innerHTML +=`${i} `
        }

        mensagem.innerHTML += ` 🏁 Fim `
    }
    else if(inicio > fim && inicio > 0 && fim > 0 && passo > 0){
        //decrescente
        mensagem.innerHTML = ` Início ➡ `

        for(let i=Number(inicio);i>=Number(fim);i-=Number(passo)){
            mensagem.innerHTML +=`${i} `
            console.log(i)
        }

        mensagem.innerHTML += ` 🏁 Fim `

    }
    else{ 
        alert(`Dados inválidos!`)
        mensagem.innerHTML = `Aguardando...`
    }
    
}


