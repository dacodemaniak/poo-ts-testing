import { IPrice } from "../interfaces/i.price";

export class BrakefeastModel implements IPrice {
    private brakefeastPrice: number = 11;

    total(): number {
        return this.brakefeastPrice;
    }
}