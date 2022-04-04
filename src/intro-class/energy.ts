/**
 * Destinée à gérer les différents types d'énergie nécessaire à la machine à café
 * - Les énergies possibles : gaz, électricité
 * - Le coût à l'heure pour l'énergie concernée
 */
export abstract class Energy {
    protected perHourCost: number;

    public setPerHourCost(amount: number): void {
        if (amount > 0) {
            this.perHourCost = amount;
        }
    }

    public getPerHourCost(): number {
        return this.perHourCost;
    }

    public abstract getCost(quantity: number);
}