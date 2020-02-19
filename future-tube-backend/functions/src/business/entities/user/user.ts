export class User {
    constructor(
        private id: string,
        private name: string,
        private birthday: Date,
        private email: string,
        private photo: string,
        private password: string,
        private email_code?: string
    ) {
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getBirthday(): Date {
        return this.birthday
    }

    public getEmail(): string {
        return this.email
    }

    public getPhoto(): string {
        return this.photo
    }

    public getPassword(): string {
        return this.password
    }

    public getEmailCode(): string | undefined {
        return this.email_code
    }
}