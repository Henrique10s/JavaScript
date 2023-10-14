// a - 

function calcSoma(a,b){
    let soma = a + b
   
    return soma
}
let resultado = calcSoma(12,12)

console.log(resultado)

// b- 

function funcMaior(e,d){
   let maior = e >= d
   return maior
}

const pergunta = Number(prompt("Insira o primeiro número"))
const pergunta2 = Number(prompt("Insira o segundo número"))

const resposta = funcMaior(pergunta, pergunta2)
alert(`${resposta}`)


// c - 


function parBoolean(par){
  return par % 2 === 0 
}

let numeroDoUser = Number(prompt("Insira um número para ver se é par"))

let respostaC = parBoolean(numeroDoUser)

alert(`${respostaC}`)

// d - 

let mensagem = prompt("Como foi o seu dia?")

function mensagemFrase(mensagem){
    console.log(`O tamanho da mensagem é ${mensagem.length}`)
    console.log(`A versão da mensagem em letras maiusculas é: ${mensagem.toUpperCase()}`)

}

mensagemFrase(mensagem)
