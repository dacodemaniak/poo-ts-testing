import { Monayeur } from "./monayeur";

export abstract class Magnetic extends Monayeur {
    protected disponible: number = 0;

    public abstract recharger(amount: number): void;

}