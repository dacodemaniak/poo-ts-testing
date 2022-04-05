import { Iterable } from "./iterable";

export abstract class Collection<T> implements Iterable<T> {
    abstract size(): number;

    abstract hasNext(): boolean;

    abstract next(): T;
    
    public abstract add(t: T): Collection<T>;
}