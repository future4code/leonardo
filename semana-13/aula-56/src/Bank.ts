import {UserAccount} from "./UserAccount";
import {JSONFileManager} from "./JSONFileManager";

function verifyAge (age:number):boolean{
    if(age > 18){
        return true
    }else {
        return false
    }
}

function verifyCPF (cpf:string): boolean{
    const file = new JSONFileManager('accounts.json');
    const getAccounts: UserAccount[] = file.getJSONContent()
    const filterAccountByCpf: UserAccount[] = getAccounts.filter((account) => {
        return cpf === account.cpf
    })
    console.log(filterAccountByCpf)
    if (filterAccountByCpf.length === 0){
        return false
    } else {
        return true
    }
}

export class Bank {
    accounts: UserAccount[];
    fileManager: JSONFileManager;

    public createAccount(account: UserAccount): void {
        if (!verifyAge(account.age)) {
            console.log('Erro no procedimento, verifique a idade ')
        }else if (verifyCPF(account.cpf)) {
            console.log('CPF ja cadastrado')
        } else {
            const file = new JSONFileManager('accounts.json');
            const getAccounts: UserAccount[] = file.getJSONContent()
            getAccounts.push(account)
            file.saveToJSON(getAccounts)
            console.log(`Conta criada com sucesso`)
        }
    }

    public getAllAccounts(): UserAccount[] {
        const file = new JSONFileManager('accounts.json');
        const getAccounts: UserAccount[] = file.getJSONContent()
        return getAccounts
    }

    public getAccountByCpf(cpf: string): UserAccount {
        const file = new JSONFileManager('accounts.json');
        const getAccounts: UserAccount[] = file.getJSONContent()
        let filterAccountByCpf: any = getAccounts.filter((account) => {
            return cpf === account.cpf
        })
        return filterAccountByCpf
    }
//TODO
    public saveAccounts(): void {

        return
    }


}