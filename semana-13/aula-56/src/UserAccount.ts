import {Transaction} from "./Transaction";
import {JSONFileManager} from "./JSONFileManager";

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
        console.log(`Saldo da conta ${this.balance}`)
    }

    public addBalance(transaction: Transaction) {
        const file = new JSONFileManager('accounts.json');
        const getAccounts: UserAccount[] = file.getJSONContent()
        const filterAccountByCpf = getAccounts.map((account) => {
            if (transaction.cpf === account.cpf) {
                account.transactions.push(transaction)
            }
        })
        file.saveToJSON(filterAccountByCpf)
        console.log(filterAccountByCpf)
        // console.log(`Saldo de ${this.balance}, depositado ${transaction.value}`)
        //
        // this.transactions.push(transaction)
        // console.log(`Novo saldo ${this.balance}`)

    }
}