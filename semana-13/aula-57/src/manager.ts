import {Cashier} from "./cashier";

export class Manager extends Cashier {
    protected job: string = "Gerente";

    constructor(
        name: string,
        salary: number,
    ) {
        super(name, salary);
    }

    public sayJob(): void {
        return console.log(`Ola, meu nome é ${this.name} e trabalho de ${this.job}`)
    };

    public getProfit(): number {
        return
    }
}