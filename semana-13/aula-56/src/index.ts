import {UserAccount} from "./UserAccount";
import {Bank} from "./Bank";
import {Transaction} from "./Transaction";

const conta: UserAccount = new UserAccount('1234567', 'antonio', 19 );
const transaction: Transaction ={
    value:200, cpf: '1234567', description:'comprar pao'
}
const banco = new Bank
// banco.createAccount(conta)
// banco.getAllAccounts()
// banco.getAccountByCpf('1234567')
// conta.getBalance()
// banco.getAccountByCpf(conta.cpf)
conta.addBalance(transaction)