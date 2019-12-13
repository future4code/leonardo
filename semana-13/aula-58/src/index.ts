import {ResidentialClient} from "./residentialClient";
import {ComercialClient} from "./comercialClient";
import {IndustrialClient} from "./industrialClient";
import {ClientManager} from "./clientManager";

// const residential1 = new ResidentialClient('Casa', '123.45', '01500-010', 'Leo', 1, 19)
// const residential2 = new ResidentialClient('Ap', '456.67', '01200-020', 'Jose', 1, 34)
//
// console.log(residential1)
// console.log(residential2)
// console.log(residential1.calculateBill())

// const comercial1 = new ComercialClient('Restaurante', '321.32', '01344-090', 'Andre',4, 100)
const comercial2 = new ComercialClient('Sorveteria', '323.56', '015444-090', 'Amanda',65, 300)
// console.log(comercial1)
// console.log(comercial2)
// console.log(comercial2.calculateBill())

const industry1 = new IndustrialClient('cervejaria', '24.532', '43243-432', 'Boa Breja', 323, 1000)
// const industry2 = new IndustrialClient('vidraria', '4.3232', '432432-432', 'Vidro Claro', 3223, 500)
// console.log(industry1)
// console.log(industry2)
// console.log(industry2.calculateBill())
const manager = new ClientManager()
// console.log(manager.getClientsQuantity())
// manager.addClient(industry1)
// console.log(manager.getClientsQuantity())
// manager.addClient(industry1)
// manager.addClient(industry1)
// manager.addClient(industry1)
manager.addClient(industry1)
manager.addClient(comercial2)
console.log(manager.getClientsQuantity())
manager.printClientBills()
manager.calculateAllIncome()
manager.getHighestBill()