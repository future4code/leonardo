import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    name:string
  ) {
    super(price, cost, ingredients, timeToCook, name);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}



