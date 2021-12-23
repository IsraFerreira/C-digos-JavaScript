function contar(){
var inicio = Number(document.getElementById('inicio').value)
var fim = Number(document.getElementById('fim').value)
var passo = Number(document.getElementById('passo').value)
var res = document.getElementById('res')


if (inicio == 0 || fim == 0){
    res.innerHTML = 'Impossível contar!'
    //window.alert("[ERRO] Faltam dados!")
} else {
    res.innerHTML = `Contando: <br>`
    if (passo <= 0){
        window.alert('Passo inválido! Considerando PASSO 1')
        passo = 1
    }
    if(inicio < fim){
        //Contagem Crescente
        for(var i=inicio;i <= fim; i+=passo){
            res.innerHTML += ` ${i} \u{1F449}`
            }
        
 
    }
    else {
        //Contagem Regressiva
        for(var i=inicio;i >= fim; i-=passo){
            res.innerHTML += ` ${i} \u{1F449}`
            }
          
    }

    res.innerHTML += `\u{1F3C1}` 


}
}