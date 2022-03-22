export class RoomModel {
    private roomNumber: number;

    public setRoomNumber(roomNumber: number): RoomModel {
        this.roomNumber = roomNumber;

        return this;
    }

    public getRoomNumber(): number {
        return this.roomNumber;
    }
}