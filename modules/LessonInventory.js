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

    static async getAvailableSubjects() 
    {
        var subjects = await APIController.Get(this.#MODULE, this.#GET_AVAILABLE_SUBJECTS);
        return JSON.parse(subjects);
    }

    static async getSubject(id)
    {
        var subject = await APIController.Get(this.#MODULE, this.#GET_SUBJECT, {
            'id': id
        });
        return JSON.parse(subject);
    }

    static async getSubjectName(id)
    {
        var name = await APIController.Get(this.#MODULE, this.#GET_SUBJECT_NAME, {
            'id': id
        });
        return JSON.parse(name);
    }

    static async search(query) 
    {
        var subjects = await APIController.Get(this.#MODULE, this.#SEARCH, {
            'query': query
        });
        return JSON.parse(subjects);
    }
}

export default LessonInventory;