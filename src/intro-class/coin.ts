import { Monayeur } from "./monayeur";

export class Coin extends Monayeur {
    public encaisser(): string {
        console.log('Vous me devez ' + this.amount);
        return 'Coin => vous me devez ' + this.amount;
    }
}