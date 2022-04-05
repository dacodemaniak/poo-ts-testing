import { CoffeeCollectionAsArray } from './../src/intro-class/coffee-collection-as-array';
import { CoffeeCollectionAsMap } from './../src/intro-class/coffee-collection-as-map';
import { CoffeeFactory } from './../src/intro-class/coffee-factory';
import { Coffee } from './../src/intro-class/coffee';

describe('Collection as array', () => {
    const collection: CoffeeCollectionAsArray = new CoffeeCollectionAsArray();

    collection
        .add(CoffeeFactory.getCoffee('Arabica', 'Ethiopie', 12))
        .add(CoffeeFactory.getCoffee('Robusta', 'Colombie', 15));

    const asMapCollection: CoffeeCollectionAsMap = new CoffeeCollectionAsMap();
    asMapCollection
        .add(CoffeeFactory.getCoffee('Robusta', 'Brésil', 10))
        .add(CoffeeFactory.getCoffee('Robusta', 'Honduras', 13));

    test('Collection must have 2 coffees', () => {
        expect(collection.size()).toBe(2);
    });

    test('Origins must be Ethiopie,Colombie direct form Collection', () => {
        const expected: string = 'Ethiopie,Colombie,';

        // Boucle sur le tableau des cafés
        let origins: string = '';
        let coffee: Coffee;

        while(collection.hasNext()) {
            coffee = collection.next();
            origins += coffee.origin + ',';
        }

        expect(origins).toBe(expected);
    });

    test('From Map, total price must be 23', () => {
        let coffee: Coffee;
        let total: number = 0;

        while(asMapCollection.hasNext()) {
            coffee = asMapCollection.next();
            total += coffee.getPerKgPrice();
        }

        expect(total).toBe(23);
    });
})