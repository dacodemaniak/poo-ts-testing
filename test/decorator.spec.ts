import { BrakefeastModel } from "../src/models/brakefeast.model";
import { RoomModel } from "../src/models/room.model"

import { SingleDecorator } from './../src/decorators/single.decorator';
import { SingleBrakefeastDecorator } from './../src/decorators/single.brakefeast.decorator';

describe(`Price decorators`, () => {
    const room: RoomModel = new RoomModel();
    room
        .setRoomNumber(11)
        .setRoomPrice(45);

    const single: SingleDecorator = new SingleDecorator(room);
    const withBrakefeast: SingleBrakefeastDecorator = new SingleBrakefeastDecorator(single);

    test(`Single room price must be 45`, () => {
        expect(single.total()).toBe(45);
    });

    test(`Single room and brakefeast must be 56`, () => {
        expect(withBrakefeast.total()).toBe(56);
    });

})