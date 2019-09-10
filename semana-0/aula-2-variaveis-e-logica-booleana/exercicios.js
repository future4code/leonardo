
const idade = prompt("Qual a sua idade ao final deste ano?");
const anoAtual = 2019;
console.log( 'Voce nasceu em ',  anoAtual - idade);
const idadeDias = idade * 365;
console.log('Voce tem ', idadeDias, ' dias de idade');
const idadeHoras = idadeDias * 24;
console.log('Voce tem ', idadeHoras, ' horas de idade');
const idadeSegundos =  idadeHoras * 3600;
console.log('Voce tem ', idadeSegundos , ' segundos de idade');