/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";
import iEvent from "../objects/Event";


class CustomerEduPortal
{
    static #MODULE = "CustomerEduPortal";

    static #GET_ALL_EVENTS = "GetAllEvents";
    static #CREATE_EVENT = "CreateEvent";
    static #SET_GUESTS = "SetGuests";
    static #OPEN_CONFERENCE = "OpenConference";
    static #MAKE_CONFERENCE_PRIVATE = "MakeConferencePrivate";
    static #UPDATE_PASSCODE = "UpdatePassCode";
    static #REQUEST_ACCESS = "RequestAccess";
    static #UPDATE_TYPE = "UpdateType";
    static #UPDATE_NAME = "UpdateName";
    static #UPDATE_DESCRIPTION = "UpdateDescription";
    static #SET_SUBJECT = "SetSubject";
    static #SET_ONE_TIME = "SetOneTime";
    static #SET_RECURSIVE = "SetRecursive";
    static #SET_DATE_AND_TIME = "SetDateAndTime";
    static #SET_DAY = "SetDay";
    static #SET_RECURSIVITY = "SetRecursivity";
    static #DELETE_EVENT = "DeleteEvent";

    static async GetAllEvents()
    {
        var events = await APIController.Get(this.#MODULE, this.#GET_ALL_EVENTS);

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

    static async CreateEvent()
    {
        var event = await APIController.Post(this.#MODULE, this.#CREATE_EVENT);

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async SetGuests(eventId, guests)
    {
        var event = await APIController.Post(this.#MODULE, this.#SET_GUESTS, {
            "eventId": eventId,
            "guests": JSON.stringify(guests),
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async OpenConference(eventId)
    {
        var event = await APIController.Post(this.#MODULE, this.#OPEN_CONFERENCE, {
            "eventId": eventId,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async MakeConferencePrivate(eventId, passCode)
    {
        var event = await APIController.Post(this.#MODULE, this.#MAKE_CONFERENCE_PRIVATE, {
            "eventId": eventId,
            "passCode": passCode,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async UpdatePassCode(eventId, passCode)
    {
        var event = await APIController.Post(this.#MODULE, this.#UPDATE_PASSCODE, {
            "eventId": eventId,
            "passCode": passCode,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async RequestAccess(eventId, request)
    {
        var event = await APIController.Post(this.#MODULE, this.#REQUEST_ACCESS, {
            "eventId": eventId,
            "request": APIController.BoolToInt(request),
        })

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async UpdateType(eventId, type)
    {
        var event = await APIController.Post(this.#MODULE, this.#UPDATE_TYPE, {
            "eventId": eventId,
            "type": type,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async UpdateName(eventId, name)
    {
        var event = await APIController.Post(this.#MODULE, this.#UPDATE_NAME, {
            "eventId": eventId,
            "name": name,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async UpdateDescription(eventId, description)
    {
        var event = await APIController.Post(this.#MODULE, this.#UPDATE_DESCRIPTION, {
            'eventId': eventId,
            'desc': description,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async SetSubejct(eventId, subId)
    {
        var event = await APIController.Post(this.#MODULE, this.#SET_SUBJECT, {
            'eventId': eventId,
            'subjectId': subId,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async SetOneTime(eventId)
    {
        var event = await APIController.Post(this.#MODULE, this.#SET_ONE_TIME, {
            'eventId': eventId,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async SetRecursive(eventId)
    {
        var event = await APIController.Post(this.#MODULE, this.#SET_RECURSIVE, {
            'eventId': eventId,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async SetDateAndTime(eventId, timestamp)
    {
        var event = await APIController.Post(this.#MODULE, this.#SET_DATE_AND_TIME, {
            'eventId': eventId,
            'timestamp': timestamp,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async SetDay(eventId, dayIndex)
    {
        var event = await APIController.Post(this.#MODULE, this.#SET_DAY, {
            'eventId': eventId,
            'day': dayIndex,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async SetRecursivity(eventId, repeatTime)
    {
        var event = await APIController.Post(this.#MODULE, this.#SET_RECURSIVITY, {
            'eventId': eventId,
            'repeatTime': repeatTime,
        });

        var eventObj = new iEvent();
        eventObj.CreateFromJSON(JSON.parse(event));
        return eventObj;
    }

    static async DeleteEvent(eventId)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_EVENT, {
            'eventId': eventId,
        });
    }
}

export default CustomerEduPortal;