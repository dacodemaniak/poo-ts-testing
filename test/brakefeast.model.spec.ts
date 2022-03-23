import { BrakefeastModel } from './../src/models/brakefeast.model';

describe('Testing room.model.ts', () => {
    const brakefeast: BrakefeastModel = new BrakefeastModel();

    test(`Brakefeast amount is 11`, () => {
        expect(brakefeast.total()).toBe(11);
    })
});