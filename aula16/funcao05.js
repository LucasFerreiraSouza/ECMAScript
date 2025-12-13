// funcao recursiva n = n * (n-1) !

function fatorial(numero){
    if (numero==1){ // para de se chamar
        return 1
    }else{
        return numero * fatorial(numero-1)
    }
}

console.log(`O fatorial é: ${fatorial(5)}`)