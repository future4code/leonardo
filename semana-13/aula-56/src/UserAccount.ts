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

    public getBalance(cpf: string) {
        if (cpf === this.cpf)
            console.log(`Saldo da conta ${this.balance}`);
        else
            console.log('Cpf invalido')
    }

    public addBalance(transaction: Transaction) {
        const file = new JSONFileManager('accounts.json');
        const bank = new Bank();
        const allAccounts = bank.getAllAccounts();
        const allAccountsMinusUserAccount = allAccounts.filter((user) => {
            return user.cpf !== transaction.cpf
        });
        const userAccountbyCpf = bank.getAccountByCpf(transaction.cpf);
        userAccountbyCpf[0].transactions.push(transaction);
        userAccountbyCpf[0].balance += transaction.value;
        allAccountsMinusUserAccount.push(userAccountbyCpf[0]);
        console.log(allAccountsMinusUserAccount);
        file.saveToJSON(allAccountsMinusUserAccount)
    }
}