import { Energy } from "./energy";

export class Electricity extends Energy {
    public getCost(waterQuantity: number): number {
        return this.perHourCost / 3600 * 15 * waterQuantity;
    }
}