const altura = prompt("Qual a sua altura em metros");
const peso = prompt("Qual o seu peso em kilogramas?");
const imc = peso/(altura*altura);
console.log('Seu IMC é ', imc.toFixed(2));