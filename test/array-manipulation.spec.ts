import {
    sum, average, max, min, odds, uniqueValues
} from './../src/algorithmique/array-manipulation';

describe(`Array Manipulation`, () => {
    const intArray: number[] = [16, 11, 23, 10, 11, 5, 8, 25, 16];

    test(`Sum of array must be 125`, () => {
        expect(sum(intArray)).toBe(125);
    });

    test(`Average of array must be 13.88`, () => {
        expect(average(intArray)).toBe(13.88);
    });

    test(`Max of array must be 25`, () => {
        expect(max(intArray)).toBe(25);
    });

    test(`Min of array must be 5`, () => {
        expect(min(intArray)).toBe(5);
    });

    test(`Odds values number from array must be 5`, () => {
        expect(odds(intArray).length).toBe(5);
    });

    test(`Odds array from array must be [11, 23, 11, 5, 25]`, () => {
        expect(odds(intArray)).toBe([11, 23, 11, 5, 25]);
    });

    test(`Unique values array from array must be [16, 11, 23, 10, 5, 8, 25]`, () => {
        expect(uniqueValues(intArray)).toBe([16, 11, 23, 10, 5, 8, 25]);
    });

});