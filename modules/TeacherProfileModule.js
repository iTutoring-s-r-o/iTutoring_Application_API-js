import APIController from "../apiController";

class TeacherProfileModule
{
    static #MODULE = "TeacherProfileModule";

    static #GET_MY_SUBJECTS = "GetMySubjects";
    static #SET_SUBJECT_ACTIVE = "SetSubjectActive";
    static #ADD_TIME_INTERVAL = "AddTimeInterval";
    static #REMOVE_TIME_INTERVAL = "RemoveTimeInterval";
    static #ADD_UNAVAILABLE_TIME_INTERVAL = "AddUnavailableTimeInterval";
    static #REMOVE_UNAVAILABLE_TIME_INTERVAL = "RemoveUnavailableTimeInterval";
    static #SET_PUBLIC_PROFILE_ACTIVE = "SetPublicProfileActive";
    static #SET_BIO = "SetBio";
    static #UPLOAD_PROFILE_PICTURE = "UploadProfilePicture";
    static #SET_ONSITE_PLACE = "SetOnsitePlace";
    static #REMOVE_ONSITE_PLACE = "RemoveOnSitePlace";
    static #GET_ALL_ONSITE_PLACES = "GetAllOnsitePlaces";
    static #GET_PERSONAL_INFO_CENSORED = "GetPersonalInfoCensored";
    static #REQUEST_PERSONAL_INFO = "RequestPersonalInfo";
    static #GET_PERSONAL_INFO = "GetPersonalInfo";
    static #GET_MAX_EVENTS = "GetMaxEvents";
    static #SET_MAX_EVENTS = "SetMaxEvents";
    static #GET_AVAILABLE_TIME_INTERVALS = "GetAvailableTimeIntervals";
    static #GET_UNAVAILABLE_TIME_INTERVALS = "GetUnavailableTimeIntervals";
    static #GET_BIO = "GetBio";
    static #IS_PUBLIC_PROFILE_ACTIVE = "IsPublicProfileActive";
    static #GET_PROFILE_PICTURE = "GetProfilePicture";
    static #GET_TEACHER_INFO = "GetTeacherInfo";
    static #IS_TEACHING_ONSITE = "IsTeachingOnsite";
    static #SET_TEACHING_ONSITE = "SetTeachingOnsite";
    static #REMOVE_UNAVAILABLE_DATE = "RemoveUnavailableDate";
    static #SET_PERSONAL_INFO = "SetPersonalInfo";

    static async setPersonalInfo(personalInfo)
    {
        await APIController.Post(this.#MODULE, this.#SET_PERSONAL_INFO, {
            'info': JSON.stringify(personalInfo),
        });
    }

    static async removeUnavailableDate(date)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_UNAVAILABLE_DATE, {
            'date': date,
        });
    }

    static async isTeachingOnsite()
    {
        var data = await APIController.Get(this.#MODULE, this.#IS_TEACHING_ONSITE);
        return data;
    }

    static async setTeachingOnsite(onsite)
    {
        await APIController.Post(this.#MODULE, this.#SET_TEACHING_ONSITE, {
            'teachingOnsite': onsite,
        });
    }

    static async getTeacherInfo()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_TEACHER_INFO);
        return JSON.parse(data);
    }

    static async getProfilePicture()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_PROFILE_PICTURE);
        return data;
    }

    static async getAvailableTimeIntervals()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_AVAILABLE_TIME_INTERVALS);
        return JSON.parse(data);
    }

    static async getUnavailableTimeIntervals()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_UNAVAILABLE_TIME_INTERVALS);
        return JSON.parse(data);
    }

    static async getBio()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_BIO);
        return data;
    }

    static async isPublicProfileActive()
    {
        var data = await APIController.Get(this.#MODULE, this.#IS_PUBLIC_PROFILE_ACTIVE);
        return data;
    }

    static async getMySubjects()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_MY_SUBJECTS);

        return JSON.parse(data);
    }

    static async setSubjectActive(subjectId, active)
    {
        await APIController.Post(this.#MODULE, this.#SET_SUBJECT_ACTIVE, {
            'subjectId': subjectId,
            'active': active,
        });
    }

    static async addTimeInterval(day, from, to, id)
    {
        await APIController.Post(this.#MODULE, this.#ADD_TIME_INTERVAL, {
            'day': day,
            'from': from,
            'to': to,
            'id': id,
        });
    }

    static async removeTimeInterval(day, id)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_TIME_INTERVAL, {
            'day': day,
            'id': id,
        });
    }

    static async addUnavailableTimeInterval(date, from, to, id)
    {
        await APIController.Post(this.#MODULE, this.#ADD_UNAVAILABLE_TIME_INTERVAL, {
            'date': date,
            'from': from,
            'to': to,
            'id': id,
        });
    }

    static async removeUnavailableTimeInterval(date, id)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_UNAVAILABLE_TIME_INTERVAL, {
            'date': date,
            'id': id,
        });
    }

    static async setPublicProfileActive(active)
    {
        await APIController.Post(this.#MODULE, this.#SET_PUBLIC_PROFILE_ACTIVE, {
            'active': active,
        });
    }

    static async setBio(bio)
    {
        await APIController.Post(this.#MODULE, this.#SET_BIO, {
            'bio': bio,
        });
    }

    static async uploadProfilePicture(photoFile)
    {
        await APIController.Post(this.#MODULE, this.#UPLOAD_PROFILE_PICTURE, null, photoFile);
    }

    static async setOnsitePlace(places)
    {
        await APIController.Post(this.#MODULE, this.#SET_ONSITE_PLACE, {
            'place': JSON.stringify(places),
        });
    }

    static async removeOnsitePlace(places)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_ONSITE_PLACE, {
            'place': JSON.stringify(places),
        });
    }

    static async getAllOnsitePlaces()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_ALL_ONSITE_PLACES);
        return JSON.parse(data);
    }

    static async getPersonalInfoCensored()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_PERSONAL_INFO_CENSORED);
        return JSON.parse(data);
    }

    static async requestPersonalInfo()
    {
        await APIController.Get(this.#MODULE, this.#REQUEST_PERSONAL_INFO);
    }

    static async getPersonalInfo(token)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_PERSONAL_INFO, {
            'token': token,
        });

        return JSON.parse(data);
    }

    static async getMaxEvents()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_MAX_EVENTS);
        return parseInt(data);
    }

    static async setMaxEvents(maxEvents)
    {
        await APIController.Post(this.#MODULE, this.#SET_MAX_EVENTS, {
            'maxEvents': maxEvents,
        });
    }
}

export default TeacherProfileModule;