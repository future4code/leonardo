import {Employee} from "./employee";
import {brigadeiro, feijoada, Menu} from "./menu";

export  class Chef extends Employee{
    protected job: string = "Chefe de Cozinha";
    constructor(
        name: string,
        salary: number,
    ){
        super(name, salary);
    }

    public  sayJob(): void{
        return console.log(`Ola, meu nome é ${this.name} e trabalho de ${this.job}`)
    }

    public removeDishFromMenu(dish: string): void {
        const newMenu = Menu.filter((find) => {
            return find.getDishByName() !== dish
        })

    }
}