let adicionar =  document.getElementById('adicionar')
let finalizar =  document.getElementById('finalizar')

adicionar.addEventListener('click', adicionarElemento)
finalizar.addEventListener('click', finalizarTabela)

let tabelaFront = document.getElementById('tabelaFront')
let mensagem = document.getElementById('mensagem')

let tabela = []
let tamanho
let maior
let menor 
let soma
let media


function adicionarElemento(){
    let input = document.getElementById('numero')
    let numero = Number(input.value)

    if (numero >= 1 && numero <= 100 && tabela.indexOf(numero) === -1) {
        tabela.push(numero)

        input.value = ''   // limpa o campo
        input.focus()      // volta o cursor
    }
    else if (tabela.indexOf(numero) !== -1) {
        alert("Esse número já existe!")
        input.focus()
    }
    else {
        alert("Digite números de 1 a 100!")
        input.focus()
    }
}



function finalizarTabela(){

    mensagem.innerHTML=``
    tabelaFront.innerHTML=``

    if(tabela.length>0){
        maior = tabela[0]
        menor = tabela[0]
        soma = 0

        for(let i in tabela){

            let item = document.createElement('option')
            item.text = (`Valor ${tabela[i]} adicionado `)
            tabelaFront.appendChild(item)

            if(tabela[i] > maior){
                maior=tabela[i]
            }
            if(tabela[i] < menor){
                menor=tabela[i]
            }

            soma += tabela[i]
        }

        tamanho = tabela.length

        media = soma/tamanho

        return mensagem.innerHTML = 
        `Tamanho da tabela: ${tamanho}</br>
        Maior da tabela: ${maior}</br>
        Menor da tabela: ${menor}</br>
        Soma da tabela: ${soma}</br>
        Média da tabela: ${media}`

    }else{
        alert("Digite números de 1 a 100!")
    }
    
}

