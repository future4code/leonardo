export abstract class Dish {
  protected price: number;
  protected cost: number;
  protected ingredients: string[];
  protected timeToCook: number;
  protected name: string;

  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    name: string
  ) {
    this.price = price;
    this.cost = cost;
    this.ingredients = ingredients;
    this.timeToCook = timeToCook;
    this.name = name
  }

  public getProfit(): number {
    return this.price - this.cost;
  }

  public getPrice(dish:Dish): number{
    return dish.price
  }
  public getDishByName():string{
    return this.name
  }
  public abstract cook(): void;
}
