import {SaltyDish} from "./saltydish";
import {Dessert} from "./dessert";
import {Dish} from "./dish";

export const feijoada = new SaltyDish(100, 20, ["feijao", "carne de porco"], 100, 'feijoada');
export const omelete = new SaltyDish(16, 9, ["ovo", "queijo"], 20, 'omelete');
export const brigadeiro = new Dessert(100, 20, ["leite condensado"], 25, 10, 'brigadeiro');
export const pudim = new Dessert(10, 5, ["leite condensado", "açucar", "leite"], 30, 20, 'pudim');

export const Menu: Dish[] =[feijoada, brigadeiro, pudim, omelete ]
