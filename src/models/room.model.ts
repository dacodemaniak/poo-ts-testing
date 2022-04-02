import { IPrice } from "../interfaces/i.price";

export class RoomModel implements IPrice {

    private roomNumber: number;
    private roomPrice: number;

    public setRoomNumber(roomNumber: number): RoomModel {
        this.roomNumber = roomNumber;

        return this;
    }

    public getRoomNumber(): number {
        return this.roomNumber;
    }

    public setRoomPrice(roomPrice: number): RoomModel {
        this.roomPrice = roomPrice;

        return this;
    }

    public getRoomPrice(): number {
        return this.roomPrice;
    }

    public total(): number {
        return this.roomPrice;
    }
}