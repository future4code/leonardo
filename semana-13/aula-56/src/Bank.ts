import {UserAccount} from "./UserAccount";
import {JSONFileManager} from "./JSONFileManager";

function verifyAge (age:number):boolean{
    if(age > 18){
        return true
    }else {
        return false
    }
}


export class Bank {
    accounts: UserAccount[];
    fileManager: JSONFileManager;

    public createAccount(account: UserAccount): void {
        if (!verifyAge(account.age)) {
            console.log('Cliente menor de idade')
        } else {
            const file = new JSONFileManager('accounts.json');
            const getAccounts: UserAccount[] = file.getJSONContent()
            getAccounts.push(account)
            console.log(getAccounts)
            file.saveToJSON(getAccounts)
            console.log(`Conta criada com sucesso`)
        }
    }

    public getAllAccounts(): UserAccount[] {
        const file = new JSONFileManager('accounts.json');
        const getAccounts: UserAccount = file.getJSONContent()
        console.log(getAccounts)

        return
    }

    public getAccountByCpf(cpf: string): UserAccount {
        const file = new JSONFileManager('accounts.json');
        const getAccounts: UserAccount[] = file.getJSONContent()
        const filterAccountByCpf = getAccounts.filter((account) => {
            return cpf === account.cpf
        })
        console.log(filterAccountByCpf)
        return
    }

    public saveAccounts(): void {

        return
    }


}