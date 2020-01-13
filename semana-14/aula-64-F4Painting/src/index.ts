// import express, { Request, Response } from "express";
// import { AddressInfo } from 'net'
// import {createUserEndpoint} from './presentation/CreateUser'
// import {createTaskEndpoint} from './presentation/CreateTask'
// import {getTaskByUserEndpoint} from './presentation/GetTasksByUser'
import { Painting } from './business/entities/Painting'
import { Order } from './business/entities/Order'


// const app = express();
// app.use(express.json()); // Linha mágica (middleware)

// app.post('/user', createUserEndpoint);

// app.post('/task', createTaskEndpoint);

// app.get('/task/:userId', getTaskByUserEndpoint);


// // Trecho do código responsável por inicializar todas as APIs
// const server = app.listen(process.env.PORT || 3000, () => {
//   if(server){
//     const address = server.address() as AddressInfo;
//     console.log(`Server is running in http://localhost:${address.port}`);
//   } else {
//     console.error(`Failure upon starting server.`);
//   }
// });

const quadro = new Painting('12', 'foto', '20', 'brilhante')
const pedido = new Order('12', 'leo', 'leo@leo', new Date(), 'cartao')

console.log(quadro)
console.log(pedido)