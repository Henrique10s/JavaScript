// 1 - 
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


// vai ser impresso no console 10 e 50
// minhaFuncao (2) vai ser = 10 por que o valor de "variavel" vai ser 2 * 5 que da 10
// minhaFuncao (10) vai ser = 50 por que o valor de "variavel" vai ser 10 * 5 que da 50
// apareceria que a minhaFuncao - não é uma função ou "minhaFuncao(...)" is not a function




// 2-

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)


// a- 
// essa funcão verifica se a palavra cenoura está no texto que o usuário colocou na variável textoDoUsuario
// a sua utilidade é o que foi falado acima, ela responde em true ou false se exista a palavra cenoura no texto do usuario


// b -  i - true
// ii - true
/// iii - true




