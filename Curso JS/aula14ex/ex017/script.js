function gerar(){
    var numero = document.getElementById('numero')
    var tabuada = document.getElementById('tabuada')

    if (numero.value.length == 0){
        window.alert('Por favor, digite um número!')
    }
    else {
        tabuada.innerHTML = ``
        let n = Number(numero.value)
        for(var seg = 1; seg <=10; seg++){
            let item = document.createElement('option')
            item.text = `${n} X ${seg} = ${n*seg}`
            item.value = `tabuada${seg}`
            tabuada.appendChild(item)
         }
    }




}