import {Client} from "./client";


export class ClientManager {
    clients: Client[] = []

    addClient(client: Client) {
        this.clients.push(client)
    }

    getClientsQuantity():number {
        let total = 0
        this.clients.forEach(function (client) {
            total += 1
        });
        return total
    }

    printClientBills():void{
        this.clients.map((client) =>{
            return console.log(`${client.clientNumber} - ${client.clientName} - R$${client.calculateBill()}`)
        })
    }

    calculateAllIncome():void{
        console.log(this.clients.map( client => client.calculateBill()).reduce(function(a, b) {
            return a + b;
        }))
    }


}
