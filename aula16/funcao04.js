// fatorial 4! =  1 x 2 x 3 x 4

function fatorial(numero){
    let fatorial = 1
    for(let i = numero ; i > 1 ; i--){
        fatorial *= i
    }
    return fatorial
}

console.log(`O fatorial é: ${fatorial(4)}`)