export class RoomModel {
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
}