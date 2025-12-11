
console.log(`Bora comer uma pizza de 8 fatias?`)

var pizza = 8

function comerFatia(){
    pizza = pizza - 1
}

function comerPizza(){
    while(pizza>0){
        comerFatia()
        console.log(`Fatias: ${pizza}`)
    }
}

comerPizza()
