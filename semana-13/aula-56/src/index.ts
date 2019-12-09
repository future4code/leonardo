import {UserAccount} from "./UserAccount";
import {Bank} from "./Bank";
import {Transaction} from "./Transaction";

const conta2: UserAccount = new UserAccount('1234567', 'antonio', 19 );
const banco = new Bank()
banco.createAccount(conta2)
const transaction: Transaction = {cpf:'1234567', description:'comprar pao', value:20}
conta2.addBalance(transaction)