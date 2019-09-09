// Coding together
function ex1(){
const idadeAtleta = Number(prompt('Qual a idade do atleta'));
if (idadeAtleta >= 3 && idadeAtleta <= 4){
  console.log('Mirim');
}else if (idadeAtleta >=5 && idadeAtleta <=7){
  console.log('Infantil A');
}else if (idadeAtleta >=8 && idadeAtleta <=10){
  console.log('Infantil B');
}else if (idadeAtleta >=11 && idadeAtleta <=13){
  console.log('Juvenil A');
}else if (idadeAtleta >=14 && idadeAtleta <=17){
  console.log('Juvenil B');
}else if (idadeAtleta >=18 && idadeAtleta <=50){
  console.log('Mirim');
}else if (idadeAtleta >= 51){
  console.log('Veterano');
}else{ 
  console.log('idade invalida');
}
}


function ex2(){
const verificaNumero = Number(prompt("Digite um numero para ver se é par ou nao"))
if (verificaNumero % 2 === 0 ){
  console.log("é par");
}else {
  console.log("é impar");
}
}

function ex3(){
const verificaAnoBissexto = Number(prompt("Digite um ano para verificar se é bisssexto"))
if ( ( verificaAnoBissexto % 4 === 0 && verificaAnoBissexto % 100 !== 0 ) 
  || (verificaAnoBissexto % 400 === 0) ) { 
    console.log("é bissexto"); 
}else {
    console.log("nao é bissexto");
}
}
