import { RoomModel } from './../src/models/room.model';

describe('Testing room.model.ts', () => {
    test('Got an instance of RoomModel', () => {
        const room: RoomModel = new RoomModel();
        expect(room).toBeInstanceOf(RoomModel);
    })
});