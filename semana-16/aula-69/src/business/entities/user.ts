export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }

    public getName() {
        return this.name
    }

    public getEmail() {
        return this.email
    }

    public getPassword() {
        return this.password
    }

    public getId() {
        return this.id
    }
}