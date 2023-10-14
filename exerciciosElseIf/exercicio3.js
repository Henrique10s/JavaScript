const senha = "1234"
const userSenha = prompt("Insira uma senha")
if(senha == userSenha && "Senha correta"){
    alert(`Login bem sucedido`)
}else if(senha != userSenha && "Senha incorreta"){
    alert(`Senha incorreta`)
}