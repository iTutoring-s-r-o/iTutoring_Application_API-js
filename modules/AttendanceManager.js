/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";
import AttendanceEvent from "../objects/AttendanceEvent";

class AttendanceManager
{
    static #MODULE = "AttendanceManager";

    static #RETRIVE_ALL_EVENTS = "RetriveAllEvents";
    static #UPDATE_EVENT = "UpdateEvent";
    static #GET_EVENTS = "GetEvents";
    static #GET_ATTENDANCE_FROM_EVENT = "GetAttendanceFromEvent";

    static async RetriveAllEvents()
    {
        var data = await APIController.Get(this.#MODULE, this.#RETRIVE_ALL_EVENTS);

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
    }

    static async GetEvents()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_EVENTS);

        data = JSON.parse(data);
        var atEvents = [];
        for (const [k0, v0] of Object.entries(data))
        {
            var ev = new AttendanceEvent();
            ev.CreateFromJSON(v0);
            atEvents.push(ev);
        }

        return atEvents;
    }

    static async GetAttendanceFromEvent(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_ATTENDANCE_FROM_EVENT, {
            "id": id,
        });

        data = JSON.parse(data);
        var atEvents = []
        for (const [k0, v0] of Object.entries(data))
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

        return atEvents;
    }
}

export default AttendanceManager;