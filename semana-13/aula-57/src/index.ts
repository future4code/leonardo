import {Cashier} from "./cashier";
import {brigadeiro, feijoada, Menu} from "./menu";
import {Manager} from "./manager";
import {Chef} from "./chef";

// const caixa = new Cashier('joao',123 )
// caixa.sayJob()
// console.log(caixa.calculateBill(Menu))
// const gerente = new Manager('josé', 1234)
// gerente.sayJob()
const chefe = new Chef('Alencar', 12345)
chefe.sayJob()
chefe.removeDishFromMenu('feijoada')
