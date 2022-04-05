export interface Iterable<T> {
    size(): number;
    hasNext(): boolean;
    next(): T;
}