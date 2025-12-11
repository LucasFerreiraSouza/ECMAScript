console.log(`Bora comer umas pizza de 12 fatias?`)

var fatia ="teste"

function comerPizza(){
        for(var fatia = 1; fatia <= 12; fatia ++){
            if(fatia==1){
                console.log(`${fatia} fatia comida`)
            }else if (fatia>1){
                console.log(`${fatia} fatias comidas`)
            }
    }
}

comerPizza()
