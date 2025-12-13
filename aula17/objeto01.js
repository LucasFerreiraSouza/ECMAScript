let amigo = {
    nome: "Lucas",
    sexo: "M",
    peso: 84.2,
    engordar(p=0){
        console.log(`Engordou!`)
        this.peso += p
    }
}
amigo.engordar(2)
console.log(amigo)