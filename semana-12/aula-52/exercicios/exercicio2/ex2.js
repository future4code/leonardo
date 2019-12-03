const fs = require('fs');
const tarefa = String(process.argv[3]);
const fileName = String(process.argv[2]);
const data = `\n ${tarefa}`;
const color = '\x1b[41m';
const endcolor = '\x1b[0m'

try{
	fs.appendFileSync(fileName, data, 'utf8');
	console.log('\x1b[41m Tarefa inserida com sucesso! \x1b[0m')
} catch (erro){
	console.log(`${color}erro${endcolor}`)
}
