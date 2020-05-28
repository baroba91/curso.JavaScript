function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var msg2 = window.document.getElementById('msg2')
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()


  msg.innerHTML = `Agora são ${hora}:${minutos}.`
  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = 'fotomanha.png'
    msg2.innerHTML = 'Bom Dia!'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    img.src = 'fototarde.png'
    msg2.innerHTML = 'Boa Tarde!'
    document.body.style.background = '#b9846f'
  } else {
    //BOA NOITE
    img.src = 'fotonoite.png'
    msg2.innerHTML = 'Boa Noite!'
    document.body.style.background = '#515154'
  }
  
}
