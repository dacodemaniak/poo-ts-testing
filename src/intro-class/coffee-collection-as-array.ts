import { Coffee } from "./coffee";
import { Collection } from "./collection";
import { Iterable } from "./iterable";

export class CoffeeCollectionAsArray extends Collection<Coffee> {
    private collection: Coffee[];

    private index: number;

    public constructor() {
        super();
        this.collection = [];
        this.index = 0;
    }

    public add(coffee: Coffee): CoffeeCollectionAsArray {
        this.collection.push(coffee);

        return this;
    }

    public hasNext(): boolean {
        return this.index < this.collection.length;
    }

    public next(): Coffee {
        if (this.index <this.collection.length) {
            const element: Coffee =  this.collection[this.index];
            this.index++;
            return element;
        }

        throw new Error('Collection has no more element');
    }

    public size(): number {
        return this.collection.length;
    }
}