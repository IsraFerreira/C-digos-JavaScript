function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src='fotoManha.png'
        document.body.style.background = '#c5dbe6'
        //BOM DIA
    }
    else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src='fotoTarde.png'
        document.body.style.background = '#f48f2e'
    }
    else {
        //BOA NOITE
        img.src='fotoNoite.png'
        document.body.style.background = '#162543'
    }
}
