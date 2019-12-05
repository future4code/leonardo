import { readFile, writeFile } from 'fs';
import * as moment from "moment"

type event = {
  name: string
  description: string
  data: moment.Moment
}

const nameInput: string = process.argv[2];
const descriptionInput: string = process.argv[3];
const dataInput: any = process.argv[4];


const birthday: event = {
  name: nameInput,
  description: descriptionInput,
  data: dataInput
}

console.log(birthday)

const fileName:string = 'src/calendario.json';

const writeFilePromise = new Promise((resolve, reject) =>{
  const currentEvent = JSON.stringify(birthday);
  writeFile(fileName, currentEvent, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
})

const readFilePromise = new Promise((resolve, reject) => {
  readFile(fileName, (err, data:Buffer) => {
    if(err){
      reject(err);
      return;
    }

    const fileContent = data.toString();
    resolve(fileContent)
  });
});

writeFilePromise.then((content) => {
}).catch(e => {
  console.error("Opa! Deu erro na Promise", e)
});

readFilePromise.then((content) => {
  console.log("Este é o conteúdo do arquivo", content)
}).catch(e => {
  console.error("Opa! Deu erro na Promise", e)
});
