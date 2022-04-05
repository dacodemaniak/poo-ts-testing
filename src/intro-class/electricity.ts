import { Energy } from "./energy";

export class Electricity extends Energy {
    public constructor(cost: number) {
        super(cost);
    }

    public getCost(waterQuantity: number): number {
        return this.perHourCost / 3600 * 15 * waterQuantity;
    }
}