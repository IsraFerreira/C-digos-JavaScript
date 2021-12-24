let num = [5, 8, 2, 9, 3]
num[5] = 6 //adiciona (cria) na casa 5 o valor 6
num.push(7) //acrescenta no ultimo elemento

num.sort() //coloca todos os elementos em ordem

console.log(`Nosso vetor tem ${num.length} posições`) // Mostra quantos valores tem no vetor

console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`O novo vetor é: ${num}`)

for (var i = 0; i < num.length; i ++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

/*
for (let pos in num){
    console.log(num[pos])
}
*/ // Fazer de uma forma diferente

let posicao = num.indexOf(9)
if (posicao == -1){
    console.log('O valor não foi encontrado!')
}
else {
    console.log(`O valor está na posição ${posicao}`)
}