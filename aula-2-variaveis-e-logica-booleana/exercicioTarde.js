
banana = {preco: 2.00};
abacate = {preco: 3.00};
laranja = {preco: 4.00};
valorTotal = banana.preco + abacate.preco + laranja.preco;
console.log('Os produtos tem um valor total de: R$', valorTotal.toFixed(2));

tempFarenheit = 100;
const transformaFarenheitparakelvin = (tempFarenheit - 32) * 5 / 9 + 273.15;
console.log('A temperatura de',tempFarenheit, ' °F na escala Kelvin é de',transformaFarenheitparakelvin.toFixed(2), '°K');
const transformaFarenheitparaCelsius = (tempFarenheit - 32) * 5 / 9;
console.log('A temperatura de',tempFarenheit, ' °F na escala Celsius é de',transformaFarenheitparaCelsius.toFixed(2), '°C');

tempFarenheit2 = prompt("Digite qual a temperatura em Farenheit");
console.log('A temperatura de',tempFarenheit2, ' °F na escala Kelvin é de',transformaFarenheitparakelvin.toFixed(2), '°K');
console.log('A temperatura de',tempFarenheit2, ' °F na escala Celsius é de',transformaFarenheitparaCelsius.toFixed(2), '°C');

primeiroNome = prompt('Qual o seu primeiro nome?');
ultimoNome = prompt('Qual o seu ultimo nome?');
console.log('Seu nome completo é: ',primeiroNome, ultimoNome);

rua = prompt('Digite sua Rua');
numeroCasa = prompt('Digite o numero da sua casa');
complementoCasa = prompt('Digite o complemento');
bairro = prompt('Digite seu Bairro');
cidade = prompt('Digite sua Cidade');
console.log('Voce mora em: ', rua, numeroCasa, complementoCasa, bairro, cidade);

casaDestrancada = confirm('A casa esta destrancada?')
chaveDaCasa = confirm('Voce tem a chave da casa?')
const entrarEmCasa = casaDestrancada || chaveDaCasa;
console.log(entrarEmCasa);
chuva = confirm('Esta chovendo?');
guardaChuva = confirm('Tem guarda-chuva?');
iraSeMolhar = chuva && !guardaChuva;
console.log(iraSeMolhar);

salarioMinimo = prompt('Digite o valor do salario minimo');
consumoQwCasa = prompt('Digite o valor de consumo da residencia em quilowatt'); 
valorQw = salarioMinimo / 5;
valorPagoCasa = consumoQwCasa * valorQw;
valorPagoCasaDesconto = valorPagoCasa * 0.85; 
console.log('O valor do quilowatt é: R$', valorQw);
console.log('O valor pago pela residencia é: R$', valorPagoCasa);
console.log('O valor pago pela residencia com desconto é: R$', valorPagoCasaDesconto);
