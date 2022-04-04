import { Energy } from "./energy";

export class Gaz extends Energy {
    public getCost(waterQuantity: number): number {
        return this.perHourCost / 3600 * 10 * waterQuantity;
    }
}