import { PriceDecorator } from "./price.decorator";

export class SingleDecorator extends PriceDecorator {
    public total(): number {
        return super.total();
    }
}