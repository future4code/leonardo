import {Transaction} from "./Transaction";
import {JSONFileManager} from "./JSONFileManager";
import {Bank} from "./Bank";

export class UserAccount {
    balance: number;
    cpf: string;
    name: string;
    age: number;
    transactions: Transaction[];

    constructor(cpf: string, name: string, age: number,) {
        this.balance = 0;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = []
    }

    public getBalance() {
        const bank = new Bank
        const client = bank.getAccountByCpf(this.cpf)
        console.log(`Saldo da conta ${client.balance}`)
    }

    public addBalance(transaction: Transaction) {
        const bank = new Bank()
        const account: any = bank.getAccountByCpf(transaction.cpf)
        const allAccounts : UserAccount[] = bank.getAllAccounts()
        let result: UserAccount[] = allAccounts.filter((accounts) => {
            return transaction.cpf !== accounts.cpf
        })
        const position: Transaction[] = account[0].transactions.push(transaction)
        console.log(position)

        console.log('conta',account)

        result.push(account)
        console.log('resultad', result)
        const file = new JSONFileManager('accounts.json');
        file.saveToJSON(result)





    }
}