let vetor = []
let res = document.getElementById('res')
function adicionar(){
    res.innerHTML = ''
    let valida = document.getElementById('numero')
    var num = Number(document.getElementById('numero').value)
    var limpanum = document.getElementById('numero')
    var tabela = document.getElementById('tabela')

    let posicao = vetor.indexOf(num)


    if (num > 100 || posicao != -1 || valida.value.length == 0){
        window.alert('Valor inválido ou já encontrado na lista')
    }
    else {
    vetor.push(num)
    let item = document.createElement('option')
    item.text = `Valor ${num} adicionado`
    item.value = `tabuada${num}`
    tabela.appendChild(item)
    }

    limpanum.value = ''
    limpanum.focus()

}


function finalizar(){
    if (vetor.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }
    else {
    let soma = 0
    let maior = 0
    let menor = vetor[0]
    for (var i = 0; i < vetor.length; i++){
        soma += vetor[i]
        if (vetor[i] > maior){
            maior = vetor[i]
        }
        if (vetor[i] < menor){
            menor = vetor[i]
        }
    }
    let media = soma / vetor.length
    res.innerHTML = `<br>Ao todo, temos ${vetor.length} números cadastrados`
    res.innerHTML += `<br><br>O maior valor informado foi ${maior}`
    res.innerHTML += `<br><br>O menor valor informado foi ${menor}`
    res.innerHTML += `<br><br>Somando todos os valores, temos ${soma}`
    res.innerHTML += `<br><br>A média dos valores digitados é ${media}`

    }
}