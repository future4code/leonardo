/*const name = process.argv[2]; //chamada node index.js leonardo 33
const age = Number(process.argv[3]);

console.log("ola", name , "seja bem vindo");

if(age >= 18){
	console.log("voce é maior de idade")
}else {
	console.log("voce é menor de idade")
}

const fs = require('fs')
const data = "oi, eu sou o conteudo do arquivo"
const fileName = "newFile.txt"

try{
	fs.writeFileSync(fileName, data)
	console.log("arquivo salvo com sucesso")
}catch(e){
	console.log(e)
}
chamada node index.js

const numero1 = Number(process.argv[2])
const numero2 = Number(process.argv[3])
const numero3 = Number(process.argv[4])
const soma = numero1 + numero2 + numero3
console.log("O valor total é:"soma);

const hoje = Date.now()
const dia = hoje.getDate()
console.log(hoje)
*/
const fs = require('fs')
const fileName = "users.json"

try{
	fs.readFileSync(fileName)
	var result = JSON.stringify(fileName);
}catch(e){
	console.log(e)
}