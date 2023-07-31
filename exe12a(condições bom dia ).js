var agora = new Date() ;
var hora = agora.getHours();
console.log('agora são exatamente ', hora)
if (hora >= 0 && hora < 12){
    console.log('bom dia')
}else if (hora > 12 && hora < 19){
    console.log (" boa tarde")
}else{
    console.log('boa noite')
}
