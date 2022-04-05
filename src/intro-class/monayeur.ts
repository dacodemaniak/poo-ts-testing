export abstract class Monayeur {
    protected amount: number;

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getAmount(): number {
        return this.amount;
    }

    public abstract encaisser(): string;
}