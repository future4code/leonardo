export class User {
    constructor(
        private id: string,
        private email: string,
        private password: string) {

        if (this.password.length < 6) {
            throw new Error('Password is too short')
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