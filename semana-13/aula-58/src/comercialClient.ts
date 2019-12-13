import {Client} from "./client";
import {Trade} from "./trade";

export class ComercialClient extends Trade implements Client {
    constructor(
        name: string,
        cnpj: string,
        cep: string,
        public clientName: string,
        public clientNumber: number,
        public consumedEnergy: number,
    ) {
        super(name, cnpj, cep);
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

}