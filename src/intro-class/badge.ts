import { Magnetic } from "./magnetic";

/**
 * Maybe final to avoid next extension
 */
export class Badge extends Magnetic {
    public recharger(amount: number): void {
        this.disponible = amount;
    }

    public encaisser(): string {
        if (this.disponible >= this.amount) {
            this.disponible = this.disponible - this.amount;
            return 'Badge => vous allez être débité de ' + this.amount;            
        }

        throw new Error('Transaction impossible');
    }
    
}