import { Coffee } from "./coffee";
import { Energy } from "./energy";

export class CoffeeMaker {
    private coffee: Coffee;
    private energy: Energy;

    private waterPrice: number = 0.0005; // Prix par cl

    private quantity: number = 5; // Quantité en cl

    public setCoffee(coffee: Coffee): void {
        this.coffee = coffee;
    }

    public setEnergy(energy: Energy): void {
        this.energy = energy;
    }

    public buyMeACoffee(): number {
        const energyCost = this.energy.getCost(this.quantity);
        const waterCost = this.waterPrice * this.quantity;
        const coffeeCost = this.coffee.getCost(this.quantity);

        const to4fixed: string = (energyCost + waterCost + coffeeCost).toFixed(4);

        return parseFloat(to4fixed);
    }
}