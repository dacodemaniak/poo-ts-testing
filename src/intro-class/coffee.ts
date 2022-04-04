export class Coffee {
    // Properties (propriétés ou attributs d'une classe)

    /**
     * private signifie que la propriété coffeeType n'est accessible en lecture
     *  et en écriture uniquement à l'intérieur de la classe...
     */
    private coffeeType: string;

    public origin: string;

    private perKgPrice: number;

    // Methods (fonctions de classe)

    // Getter and Setter
    public setCoffeeType(coffeeType: string): void {
        // strtolower($coffeeType)
        if (coffeeType.toLowerCase() === 'arabica' || coffeeType.toLowerCase() === 'robusta') {
            const initial: string = coffeeType.substring(0, 1);
            const rest: string = coffeeType.substring(1, coffeeType.length);
            const correctCoffeeType: string = initial.toUpperCase() + rest.toLowerCase();
           this.coffeeType = correctCoffeeType; 
        }
    }

    public getCoffeeType(): string {
        return this.coffeeType;
    }

    public setPerKgPrice(price: number): void {
        if (price > 0) {
            this.perKgPrice = price;
        }
    }

    public getPerKgPrice(): number {
        return this.perKgPrice;
    }

    public getCost(quantity: number): number {
        return this.perKgPrice / 1000 * quantity;
    }
}