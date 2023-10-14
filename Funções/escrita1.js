//a - 
function sobreMim(){
    alert(`Eu sou o Henrique, tenho 18 anos, moro em São Leopoldo e sou estudante.`)
}

sobreMim()

// b- 

function fraseSobre(nome,idade,endereço,profisao){
    
    const mensagem = ("Eu sou " +nome + " tenho " +idade + " anos, moro em " +endereço + " e sou " +profisao)

    return mensagem
}

const informações = fraseSobre("Henrique", 18, "São Leopoldo", "Desempregado")

alert(`${informações}`)
