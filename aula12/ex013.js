var agora = new Date()
var diaSem = agora.getDay()
diaSem = 7
/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábado
*/
console.log(diaSem)

switch(diaSem) {
  case 0:
    console.log('Domingo')
    break
  case 1:
    console.log('Segunda')
    break
  case 2:
    console.log('Terça')
    break
  case 3:
    console.log('Quarta')
    break
  case 4:
    console.log('quinta')
    break
  case 5:
    console.log('sexta')
    break
  case 6:
    console.log('Sábado')
    break
  default: 
    console.log('ERRO Dia inválido!')
    break
  }

