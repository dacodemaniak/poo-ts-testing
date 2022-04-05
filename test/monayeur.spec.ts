import { Monayeur } from './../src/intro-class/monayeur';
import { Badge } from './../src/intro-class/badge';
describe('Test encaissements', () => {
    
    test('Paiement par badge', () => {
        const monayeur: Monayeur = new Badge();
        monayeur.setAmount(0.50);
        //const result: string = monayeur.encaisser();
        expect(() => {
            monayeur.encaisser()
        }).toThrow(Error);
        
    });
})