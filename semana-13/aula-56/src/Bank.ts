import {UserAccount} from "./UserAccount";
import {JSONFileManager} from "./JSONFileManager";

function ageVerify (age:number):boolean{
    if(age > 18){
        return true
    }else {
        return false
    }
}

function cpfVerify ( cpf: string): boolean {
    const file = new JSONFileManager('accounts.json');
    const getAccounts: UserAccount[] = file.getJSONContent()
    const filterAccountByCpf: any[] = getAccounts.filter((account) => {
        return cpf === account.cpf
    })
    if (filterAccountByCpf.length > 0) {
        return false
    }else {
        return true
    }
}

export class Bank {
    accounts: UserAccount[];
    fileManager: JSONFileManager;

    public createAccount(account: UserAccount): void {
        if (!ageVerify(account.age)) {
            console.log('Cliente menor de idade')
        } else if (!cpfVerify(account.cpf)) {
            console.log("cliente ja possui cadastro")
        }else {
            const file = new JSONFileManager('accounts.json');
            const getAccounts: UserAccount[] = file.getJSONContent()
            getAccounts.push(account)
            file.saveToJSON(getAccounts)
            console.log(`Conta criada com sucesso`)
        }
    }

    public getAllAccounts(): UserAccount[] {
        const file = new JSONFileManager('accounts.json');
        return file.getJSONContent()

    }

    public getAccountByCpf(cpf: string): UserAccount[] {
        const file = new JSONFileManager('accounts.json');
        const getAccounts: UserAccount[] = file.getJSONContent()
        const filterAccountByCpf: UserAccount[] = getAccounts.filter((account) => {
            if (cpf === account.cpf){
                return account
            }else {
                return console.log('Cpf nao encontrado')
            }
        })
        return filterAccountByCpf
    }

    public saveAccounts(): void {

        return
    }


}