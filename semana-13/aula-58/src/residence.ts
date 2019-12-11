import { Place } from "./place";

export class Residence extends Place {
  constructor(
    public name: string,
    // Refere-se ao nome da indústria

    public cpf: string,
    // Refere-se ao número de registro da empresa

    cep: string
  ) {
    super(cep);
  }
}
