var val = 555
var not
var rest

function contaNotas(valor,nota) {
  notas =  Math.floor(valor/nota)
  resto = valor % nota
  console.log(`${notas} notas de ${nota}. Sobra ${resto}`)
  return resto
}

// notas de 100
val = contaNotas(val,100)

// notas de 50
val = contaNotas(val,50)

// notas de 5
val = contaNotas(val,5)