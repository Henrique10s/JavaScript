// atividade dia 31/08 

let a1 = 10
let b1 = 10

console.log(b1)

b1 = 5
console.log(a1, b1)

// será apresentado a = 10 e b = 5, já que utilizando o comando let, vamos ter livre acesso para mudar o valor da variável a ou b, já que ambos são mutáveis

let a2 = 10
let b2 = 20
c = a2
b2 = c
a2 = b2

console.log(a2, b2, c)

// será apresentado a1 = 10, b1 = 20 e c = 10, já pedimos que c seja imprimido no console e não colocamos nenhum valor na variável ela acaba ganhando o valor de a.

let horadia = prompt("Quantas horas você trabalha por dia?")
let recebedia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${recebedia / horadia} por hora`)


console.log(horadia)
console.log(recebedia)

// coloquei um nome generico, o primeiro que me passou na cabeça, mas entendi perfeitamente o que o codigo faz, ele te pergunta as tuas horas trabalhadas em um dia e tambem te pergunta quanto voce ganha por hora, realizando um calculo e mostrando para voce quanto voce ganha por hora


const meuNome = ""
const minhaIdade = ""



// por eu não ter atribuido um valor as variáveis o console apresentou as variáveis como como string.

let nome = prompt("qual o seu nome?")

let idade =prompt("qual a sua idade?")

alert(`ola ${nome}, voce tem ${idade}anos`)

console.log(nome, idade)


typeof nome 
typeof idade 

console.log(typeof nome, typeof idade)

//Bom os tipos das variáveis não mudaram, continuaram em string já que eu estou pedindo que o usuario coloque um valor na pergunta utilizando o comando do prompt e como a variável que eu criei está no formato de string, ela continuou sendo lida como string mesmo após eu respondendo em numeros a pergunta, mas é possivel fazer a conversao


let pergunta = prompt("voce esta na sua cama?")

let pergunta2 = prompt("voce esta com sono?")

let pergunta3 = prompt("voce sabe quem foi o ronaldo fenomeno?")

console.log("voce esta na sua cama?", pergunta)
console.log("voce esta com sono?", pergunta2)
console.log("voce sabe quem foi o ronaldo fenomeno?", pergunta3)

// Suponha que a e b são as variáveis cujos valores você deseja trocar.
let a = 10;
let b = 25;

console.log("Valores iniciais:");
console.log("a =", a);
console.log("b =", b);

// Trocar os valores de a e b usando uma variável temporária
let temp = a;
a = b;
b = temp;

console.log("Valores trocados:");
console.log("a =", a);
console.log("b =", b)