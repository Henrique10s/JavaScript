// 3 
const listaDeTarefas = []


 listaDeTarefas[0] = prompt("Qual é a primeira tarefa que você tem que realizar?")
 listaDeTarefas[1] = prompt("Qual a segunda tarefa que você tem que realizar?")
 listaDeTarefas[2] = prompt("Qual a terceira tarefa que você tem que realizar?")


 console.log("Suas tarefas são:")
 console.log(listaDeTarefas[0]);
 console.log(listaDeTarefas[1]);
 console.log(listaDeTarefas[2]);

 const indice = prompt("Insira o indice da tarefa que você realizou 0, 1 ou 2")


listaDeTarefas.splice(indice, 1)

console.log(listaDeTarefas);


