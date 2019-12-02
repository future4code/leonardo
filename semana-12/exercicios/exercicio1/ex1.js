const operacao = String(process.argv[2] );
const number1 = Number(process.argv[3]);
const number2 = Number(process.argv[4]);
let total;
const color = '\x1b[41m';
const endcolor = '\x1b[0m'

if (!number1 || !number2){
	console.log('\x1b[31m Favor informar dois numeros \x1b[0m')
}else{
	if(operacao === 'add'){
		total = number1 + number2;
		return console.log(`Resposta: ${color}${total}${endcolor}`);
	}else if(operacao === 'multi'){
		total = number1 * number2;
		return console.log(`Resposta: ${color}${total}${endcolor}`);
	}else if(operacao === 'sub'){
		total = number1 - number2;
		return console.log(`Resposta: ${color}${total}${endcolor}`);
	}else if(operacao === 'div'){
		total = number1 / number2;
		return console.log(`Resposta: ${color}${total}${endcolor}`);
	}else {
		return console.log('\x1b[31m Operacao invalida \x1b[0m');
	}
}
