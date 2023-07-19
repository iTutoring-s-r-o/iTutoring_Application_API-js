import APIController from "../apiController";
import iEvent from "../objects/Event";


class LessonManager
{
    /**
* Respective module name for this class
*/
    static #MODULE = "LessonManager";

    // All method names
    static #GET_ALL_EVENTS = "GetAllEvents";
    static #SEARCH_ALL_EVENTS = "SearchAllEvents";
    static #DELETE_EVENT = "DeleteEvent";
    static #UPDATE_EVENT = "UpdateEvent";
    static #CREATE_EVENT = "CreateEvent";

    static async GetAllEvents(filters, filterOp = "AND")
    {
        var events = await APIController.Get(this.#MODULE, this.#GET_ALL_EVENTS, {
            "filters": JSON.stringify(filters),
            "filterOp": filterOp,
        });

        var eventObjs = [];
        var eventsJson = JSON.parse(events)
        for (const [key, value] of Object.entries(eventsJson))
        {
            var ev = new iEvent();
            ev.CreateFromJSON(JSON.parse(value))
            eventObjs.push(ev);
        }

        return eventObjs;
    }

    static async SearchAllEvents(searchParam)
    {
        var events = await APIController.Get(this.#MODULE, this.#SEARCH_ALL_EVENTS, {
            "search_param": searchParam,
        });

        var eventObjs = [];
        var eventsJson = JSON.parse(events)
        for (const [key, value] of Object.entries(eventsJson))
        {
            var ev = new iEvent();
            ev.CreateFromJSON(JSON.parse(value))
            eventObjs.push(ev);
        }

        return eventObjs;
    }

    static async DeleteEvent(eventId)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_EVENT, {
            "id": eventId,
        });
    }

    static async UpdateEvent(event)
    {
        var eventJson = JSON.stringify(event);
        await APIController.Post(this.#MODULE, this.#UPDATE_EVENT, {
            "event": eventJson,
        });
    }

    /**
     * Will create a new event. 
     */
    static async CreateEvent(defaultTimeUnix = null)
    {
        await APIController.Post(this.#MODULE, this.#CREATE_EVENT, {
            'def_time': defaultTimeUnix,
        });
    }
}

export default LessonManager;