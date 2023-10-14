const numeroUser= Number(prompt("Insira o primeiro número aqui"))
const numeroUser1= Number(prompt("Insira o segundo número aqui"))

function soma(numeroUser,numeroUser1){
    const calcSoma = numeroUser+numeroUser1
    return calcSoma
}
   
function subtraçao(numeroUser,numeroUser1){
    const calcSub = numeroUser-numeroUser1
    return calcSub
}

function divisao(numeroUser,numeroUser1){
    const calcDiv = numeroUser/numeroUser1
    return calcDiv
}
function multiplicaçao(numeroUser,numeroUser1){
    const calcMulti = numeroUser*numeroUser1
    return calcMulti
}

const somar = soma(numeroUser,numeroUser1)
const subtrair = subtraçao(numeroUser,numeroUser1)
const div = divisao(numeroUser,numeroUser1)
const multi = multiplicaçao(numeroUser,numeroUser1)


alert(`O valor da sua soma é ${somar}`)
alert(`O valor da sua subtração é ${subtrair}`)
alert(`O valor da sua divisão é ${div}`)
alert(`O valor da sua multiplicação é ${multi}`)



