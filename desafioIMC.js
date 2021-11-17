//Calculo IMC
const nome = 'Cassio'
const peso = 90
const altura = 1.74
const sexo = 'Masculino'

const imc = peso / (altura * altura)

console.log(imc)

if (!(imc <= 30) || imc === 29.9) {
  console.log(`${nome} Você está acima do peso`)
} else {
  console.log(`${nome} Você não está acima do peso`)
}
