import { IPrice } from "../interfaces/i.price";

export abstract class PriceDecorator implements IPrice {
    protected priceComponent: IPrice;

    public constructor(priceComponent: IPrice) {
        this.priceComponent = priceComponent;
    }

    public total(): number {
        return this.priceComponent.total();
    }
}