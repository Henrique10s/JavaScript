
let a = Number(prompt("Insira um número"))
let b = Number(prompt("Insira outro número"))
let operação = prompt("Insira uma operação")


if(operação === "-"){
    console.log("O seu resultado é" && a - b);
}else if(operação === "+"){
    console.log("O seu resultado é" && a + b);
}else if(operação === "*"){
    console.log("O seu resultado é" && a * b);
}else if(operação === "/"){
    console.log("O seu resultado é" && a / b);
}else console.log("Você fez alguma coisa de errado!");
