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

        this.CheckForError(data);

        data = JSON.parse(data);
        var events = [];
        for (const [key, value] of Object.entries(data))
        {
            var atEvents = []
            for (const [k0, v0] of Object.entries(value))
            {
                var atEventsStudent = [];
                for (const [k1, v1] of Object.entries(v0))
                {
                    var ev = new AttendanceEvent();
                    ev.CreateFromJSON(JSON.parse(v1));
                    atEventsStudent.push(ev);
                }

                atEvents.push(atEventsStudent);
            }
            events.push(atEvents);
        }

        return events;
    }

    static async UpdateEvent(event)
    {
        var data = await APIController.Post(this.#MODULE, this.#UPDATE_EVENT, {
            'event': JSON.stringify(event),
        });

        this.CheckForError(data);
    }

    static async CheckForError(data)
    {
        if (data.includes("error: "))
        {
            data = data.replace("error: ", "");
            location.href = data
        }
    }
}

export default AttendanceManager;