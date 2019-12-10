import {UserAccount} from "./UserAccount";
import {Bank} from "./Bank";
import {Transaction} from "./Transaction";

const conta: UserAccount = new UserAccount('1234567', 'antonio', 19);
const cont2: UserAccount = new UserAccount('1234', 'jose', 25);
const cont3: UserAccount = new UserAccount('1234', 'jose', 17);
const banco = new Bank();
banco.createAccount(conta)
banco.createAccount(cont2)
banco.createAccount(cont3)
const trasaction: Transaction = {value: 122, cpf: '1234567', description: 'comprar pao'};
conta.getBalance(conta.cpf)
conta.addBalance(trasaction);
conta.addBalance(trasaction);