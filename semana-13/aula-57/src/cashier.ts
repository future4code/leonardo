import {Employee} from "./employee";
import {Dish} from "./dish";

export  class Cashier extends Employee{
    protected job:string ="Caixa";
    constructor(
        name: string,
        salary: number,
    ) {
        super(name, salary);
    }

    public  sayJob(): void{
        return console.log(`Ola, meu nome é ${this.name} e trabalho de ${this.job}`)
    }
    //
    public calculateBill(comand: Dish[]): number {
        let total = 0
        comand.forEach(function (dish) {
            total += dish.getPrice(dish)
        });
        return total
    }
}