import { PriceDecorator } from "./price.decorator";

export class SingleBrakefeastDecorator extends PriceDecorator {
    public total(): number {
        return super.total();
    }
}