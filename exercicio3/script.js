//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

const nome = prompt("Digite seu nome").toLowerCase();

let nome1= nome=="josé"? "Oi, Zé!":"Olá, "+nome;
console.log(nome1)

const idade = prompt("Digite sua idade")
const cnh = idade>=18?`${nome}, pode tirar carteira de motorista`:`${nome}, você ainda não pode tirar carteira de motorista.`
console.log(cnh);


