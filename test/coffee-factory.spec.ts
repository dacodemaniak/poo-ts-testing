import { CoffeeFactory } from './../src/intro-class/coffee-factory';
describe('Coffee Factory', () => {

    test('Create a Robusta from Colombia', () => {
        const coffee = CoffeeFactory.getCoffee('RoBuSta', 'Colombia', 15);

        expect(coffee.getCoffeeType()).toBe('Robusta');
    })
})