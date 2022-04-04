import { Coffee } from './../src/intro-class/coffee';
import { Energy } from './../src/intro-class/energy';
import { Gaz } from './../src/intro-class/gaz';
import { Electricity } from './../src/intro-class/electricity';
import { CoffeeMaker } from './../src/intro-class/coffee-maker';

describe('Coffee maker', () => {
    // Create some coffees
    const arabicaEthiopy = new Coffee();
    arabicaEthiopy.setCoffeeType('arabica');
    arabicaEthiopy.origin = 'Ethiopy';
    arabicaEthiopy.setPerKgPrice(10);

    const colombiaRobusta = new Coffee();
    colombiaRobusta.setCoffeeType('robusta');
    colombiaRobusta.origin = 'Colombie';
    colombiaRobusta.setPerKgPrice(15);

    const gaz = new Gaz();
    gaz.setPerHourCost(0.18);

    const electricite = new Electricity();
    electricite.setPerHourCost(0.15);

    test('Coffee maker with gaz and arabica from Ethiopy', () => {
        const coffeeMaker = new CoffeeMaker();
        coffeeMaker.setEnergy(gaz);
        coffeeMaker.setCoffee(arabicaEthiopy);

        expect(coffeeMaker.buyMeACoffee()).toBe(0.055);
    });

    test('Coffee maker with Electricité and robusta from Colombia', () => {
        const coffeeMaker = new CoffeeMaker();
        coffeeMaker.setEnergy(electricite);
        coffeeMaker.setCoffee(colombiaRobusta);

        expect(coffeeMaker.buyMeACoffee()).toBe(0.0796);
    });

})