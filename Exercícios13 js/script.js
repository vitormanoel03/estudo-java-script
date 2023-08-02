function carregar(){
    var msg = window.document.getElementById('msg')
    var foto =  window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
  
hora = 8
    if (hora>=0 && hora < 12){
        msg.innerHTML = 'Bom dia agora são '+ hora +'horas'
        foto.src= 'manha.jpg'
        document.body.style.background = '	#00BFFF'
    }
    else if (hora>=12 && hora <= 18){
        msg.innerHTML = 'Boa tarde! Agora são '+ hora +'horas'
        foto.src = 'tarde.jpg'

        document.body.style.background = '	#B8860B'

    }else{
    msg.innerHTML = 'Boa Noite! Agora são '+ hora +'horas'
    foto.scr = 'noite.jpg'
    document.body.style.background = '	#363636'
    }
}
