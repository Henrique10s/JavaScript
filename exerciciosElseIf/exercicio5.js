const numeroUser = Number(prompt("Insira o primeiro número"))
const numeroUser2 = Number(prompt("Insira o segundo número"))
const numeroUser3 = Number(prompt("Insira o terceiro número"))

if(numeroUser > numeroUser2 && numeroUser > numeroUser3){
    alert(`${numeroUser}`)
}else if(numeroUser2 > numeroUser && numeroUser2 > numeroUser3){
    alert(`${numeroUser2}`)
}else if(numeroUser3 > numeroUser2 && numeroUser3 > numeroUser){
    alert(`${numeroUser3}`)

}else console.log("Você fez algo errado");