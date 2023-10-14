const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
// a variável "bool1" foi atribuido o valor "true" e a mesma coisa com a "bool2"
// mas foi atribuido o valor de "false" nessa variável,  na "bool3" foi atribuido
// o valor "!bool2" que vai fazer que quando utilizar a variável para buscar o valor de true ou
// false a variável "bool3" vai fazer a diferença dos valores.

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)


// Para que o valor funcione, vamos ter que realizar a conversão do valor da variável
// Já que a variável acima está em string e para que a soma seja atribuida de maneira correta
// vamos fazer a conversão de string para number

// EX: let primeiroNumero = Number(prompt("Digite um numero!"))
// EX2: let segundoNumero = Number(prompt("Digite outro numero!"))