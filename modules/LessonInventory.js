/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import APIController from "../apiController";

class LessonInventory  
{
    static #MODULE = "LessonInventory";

    static #GET_AVAILABLE_SUBJECTS = "GetAvailableSubjects";
    static #GET_SUBJECT = "GetSubject";
    static #GET_SUBJECT_NAME = "GetSubjectName";
    static #SEARCH = "Search";

    static async getAvailableSubjects(category = 'ANY', max = -1, offset = 0, filter = []) 
    {
        var subjects = await APIController.Get(this.#MODULE, this.#GET_AVAILABLE_SUBJECTS, {
            'category': category,
            'max': max,
            'offset': offset,
            'filter': JSON.stringify(filter)
        });
        return subjects;
    }

    static async getSubject(id)
    {
        var subject = await APIController.Get(this.#MODULE, this.#GET_SUBJECT, {
            'id': id
        });
        return subject;
    }

    static async getSubjectName(id)
    {
        var name = await APIController.Get(this.#MODULE, this.#GET_SUBJECT_NAME, {
            'id': id
        });
        return name;
    }

    static async search(query) 
    {
        var subjects = await APIController.Get(this.#MODULE, this.#SEARCH, {
            'query': query
        });
        return subjects;
    }
}

export default LessonInventory;