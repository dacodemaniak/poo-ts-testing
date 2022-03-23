import { RoomModel } from './../src/models/room.model';

describe('Testing room.model.ts', () => {
    const room: RoomModel = new RoomModel();

    test('Got an instance of RoomModel', () => {
        expect(room).toBeInstanceOf(RoomModel);
    });

    test(`Room must have a 'roomNumber' attribute`, () => {
        const hasProperty: boolean = room.hasOwnProperty('roomNumber');
        expect(hasProperty).toBeTruthy();
    });

    test(`Room number setting must return the current RoomModel instance`, () => {
        const afterSetter: RoomModel = room.setRoomNumber(10);
        expect(afterSetter).toStrictEqual(room);
    });

    test(`Room number must be '10' after setting`, () => {
        room.setRoomNumber(10);
        expect(room.getRoomNumber()).toBe(10);
    });

    test(`Room price must be '45'`, () => {
        room.setRoomPrice(45);
        expect(room.getRoomPrice()).toBe(45);
    });
});