import APIController from "../apiController";
import AttendanceEvent from "../objects/AttendanceEvent";

class AttendanceManager
{
    static #MODULE = "AttendanceManager";

    static #RETRIVE_ALL_EVENTS = "RetriveAllEvents";
    static #UPDATE_EVENT = "UpdateEvent";

    static async RetriveAllEvents()
    {
        var data = await APIController.Get(this.#MODULE, this.#RETRIVE_ALL_EVENTS);

        var events = [];
        for (const [key, value] of Object.entries(data))
        {
            var atEvents = []
            for (const [k1, v1] of Object.entries(value))
            {
                var ev = new AttendanceEvent();
                ev.CreateFromJSON(JSON.parse(v1));
                atEvents.push(ev);
            }
            events.push(atEvents);
        }

        return events;
    }

    static async UpdateEvent(event)
    {
        await APIController.Post(this.#MODULE, this.#UPDATE_EVENT, {
            'event': JSON.stringify(event),
        });
    }
}

export default AttendanceManager;