// 2- 

const comidasFavoritas = ["Pizza", "Lasanha", "Massa", "salmão", "churrasco"]

console.log("Lista das comidas")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

const newComida = prompt("Me fale uma das suas comidas favoritas!")

comidasFavoritas.splice(1, 1, newComida)


console.log(comidasFavoritas);

