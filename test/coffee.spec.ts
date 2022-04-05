import { Coffee } from './../src/intro-class/coffee';

describe('Coffee', () => {

    // Test 1 : Instanciation d'un objet
    test('Coffee class instanciation', () => {
        let ethiopie: Coffee;

        ethiopie = new Coffee('Arabica', 'Ethiopie');

        expect(ethiopie).toBeInstanceOf(Coffee);
    });

    test('Ethiopie must be arabica and from Ethiopy', () => {
        /**
         * $ethiopie = new Coffee();
         * $ethiopie->coffeeType = 'Arabica';
         * $ethiopie->origin = 'Ethiopy';
         */
        const ethiopie = new Coffee('Arabica', 'Ethiopie');
 

        expect(ethiopie.getCoffeeType()).toBe('Arabica');
        expect(ethiopie.origin).toBe('Ethiopie');

        const colombie = new Coffee('RoBuSTA', 'Colombie');

        expect(colombie.getCoffeeType()).toBe('Robusta');
        expect(colombie.origin).toBe('Colombie');
    })
})