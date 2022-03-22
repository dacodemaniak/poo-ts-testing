import { RoomModel } from './../src/models/room.model';

describe('Testing room.model.ts', () => {
    const room: RoomModel = new RoomModel();

    test('Got an instance of RoomModel', () => {
        expect(room).toBeInstanceOf(RoomModel);
    });

    test(`Room must have a 'roomNumber' attribute`, () => {
        const hasProperty: boolean = room.hasOwnProperty('roomNumber');
        expect(hasProperty).toBeTruthy();
    })
});