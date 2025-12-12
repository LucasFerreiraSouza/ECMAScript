let vetor = [4,5,6]

console.log(`Nosso vetor é: ${vetor}`)


for (var i=0;i<vetor.length;i++){
    console.log(`Elemento ${i} = Valor: ${vetor[i]} | Indíce: ${i}`)
}

vetor[3] = 7
vetor.push(8)

console.log(`Adicionando novos elementos no vetor: ${vetor}`)

console.log(`Length é: ${vetor.length}`)

console.log(`Sort é: ${vetor.sort()}`)

for (let i in vetor){
    console.log(`Elemento ${i} = Valor: ${vetor[i]} | Indíce: ${i}`)
}
for (var i=0;i<vetor.length;i++){
    if(vetor.indexOf(i)==(-1)){
        console.log(`Não encontra valor vetor.indexOf(2): ${vetor.indexOf(i)}`)
    }else if(vetor.indexOf(i)!=(-1)){
        console.log(`Encontra valor vetor.indexOf(4): ${vetor.indexOf(i)}`)
    }
}

