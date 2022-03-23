import { BrakefeastModel } from "../models/brakefeast.model";
import { PriceDecorator } from "./price.decorator";

export class SingleBrakefeastDecorator extends PriceDecorator {
    public total(): number {
        const brakefeast: BrakefeastModel = new BrakefeastModel();
        return brakefeast.total() + super.total();
    }
}