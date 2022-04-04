import { Coffee } from './../src/intro-class/coffee';

describe('Coffee', () => {

    // Test 1 : Instanciation d'un objet
    test('Coffee class instanciation', () => {
        let ethiopie: Coffee;

        ethiopie = new Coffee();

        expect(ethiopie).toBeInstanceOf(Coffee);
    });

    test('Ethiopie must be arabica and from Ethiopy', () => {
        /**
         * $ethiopie = new Coffee();
         * $ethiopie->coffeeType = 'Arabica';
         * $ethiopie->origin = 'Ethiopy';
         */
        const ethiopie = new Coffee();
        ethiopie.setCoffeeType('ARABICA');
        ethiopie.origin = 'Ethiopy';

        expect(ethiopie.getCoffeeType()).toBe('Arabica');
        expect(ethiopie.origin).toBe('Ethiopy');

        const colombie = new Coffee();
        colombie.setCoffeeType('RoBuSTA');
        colombie.origin = 'Colombie';

        expect(colombie.getCoffeeType()).toBe('Robusta');
        expect(colombie.origin).toBe('Colombie');
    })
})