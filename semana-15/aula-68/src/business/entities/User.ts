export class User {
    constructor(
        private id: string,
        private email: string,
        private password: string) {

        if (this.password.length < 6) {
            throw new Error('Senha muito curta, deve contar mais que 6 caracteres')
        }
    }

    public getId() {
        return this.id
    }

    public getEmail() {
        return this.email
    }

    public getPassword() {
        return this.password
    }
}