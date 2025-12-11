console.log(`Bora comer uma pizza?`)

var pizza = 8

function comerFatia(){
    pizza -= 1
}


function comerPizza(){
    while(pizza>0){
        comerFatia()
        console.log(pizza)
    }
}

comerPizza()

