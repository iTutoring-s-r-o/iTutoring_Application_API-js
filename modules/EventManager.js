import APIController from "../apiController";

class EventManager
{
    static #MODULE = "EventManager"
    
    static #EVENT_EXISTS = "EventExists";
    static #ROOM_EXISTS = "RoomExists";

    static async EventExists(eventId)
    {
        var exists = await APIController.Get(this.#MODULE, this.#EVENT_EXISTS, {
            "eventId": eventId,
        });

        return APIController.IntToBool(exists);
    }

    static async RoomExists(roomId)
    {
        var exists = await APIController.Get(this.#MODULE, this.#ROOM_EXISTS, {
            'roomId': roomId,
        });

        return APIController.IntToBool(exists);
    }
}

export default EventManager;