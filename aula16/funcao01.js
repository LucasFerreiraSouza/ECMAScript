function parImpar (numero){
    if(numero%2==0){
        return `par`
    }else{
        return `ímpar`
    }
}

let resposta = parImpar(14)

console.log(`Seu número é: ${resposta}`)