import { Coffee } from "./coffee";
import { CoffeeMaker } from "./coffee-maker";
import { Energy } from "./energy";

export class CoffeeFactory {
    public static getCoffee(type: string, origin: string, price: number): Coffee {
        const correctType: string = type.charAt(0).toUpperCase() + type.substring(1, type.length).toLowerCase();
        const coffee = new Coffee(correctType, origin);
        coffee.setPerKgPrice(price);

        return coffee;
    }

    public static getCoffeeMaker(energy: Energy, coffee: Coffee): CoffeeMaker {
        const coffeeMaker = new CoffeeMaker();
        coffeeMaker.setCoffee(coffee);
        coffeeMaker.setEnergy(energy);

        return coffeeMaker;
    }
}