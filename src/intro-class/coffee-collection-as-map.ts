import { Coffee } from "./coffee";
import { Collection } from "./collection";
import { Iterable } from "./iterable";

export class CoffeeCollectionAsMap extends Collection<Coffee> {
    private collection: Map<number, Coffee>;

    private index: number;

    public constructor() {
        super();
        this.collection = new Map();
        this.index = 0;
    }

    public add(coffee: Coffee): CoffeeCollectionAsMap {
        if (this.collection.size === 0) {
            this.collection.set(1, coffee);
        } else {
            this.collection.set(this.collection.size + 1, coffee);
        }

        return this;
    }

    public hasNext(): boolean {
        return this.index < this.collection.size;
    }

    public next(): Coffee {
        if (this.hasNext()) {
            const keys: number[] = [...this.collection.keys()];
            
            const key: number = keys[this.index];

            const element: Coffee = this.collection.get(key);

            this.index++;

            return element;
        }

        throw new Error('No more element in the collection');


    }

    public size(): number {
        return this.collection.size;
    }
}