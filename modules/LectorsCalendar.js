/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";

class LectorsCalendar
{
    static #MODULE = 'LectorsCalendar';

    static #GET_CALENDAR = 'GetCalendar';
    static #GET_LECTORS_FOR_TIME = 'GetLectorsForTime';

    /**
     * 
     * @param {*} lectorIds 
     * @param {*} day 
     * @param {*} month 
     * @param {*} year 
     * @param {*} length 
     * @param {*} lesson  - minutes60 or minutes45
     * @returns 
     */
    static async getCalendar(lectorIds, day, month, year, length, lesson)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_CALENDAR, {
            'lectorIds': lectorIds,
            'day': day,
            'month': month,
            'year': year,
            'length': length,
            'lesson': lesson,
        });

        return data;
    }

    /**
     * 
     * @param {*} lectorIds 
     * @param {*} day 
     * @param {*} month 
     * @param {*} year 
     * @param {*} time 
     * @param {*} lesson   - minutes60 or minutes45
     * @returns 
     */
    static async getLectorsForTime(lectorIds, day, month, year, time, lesson)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_LECTORS_FOR_TIME, {
            'lectorIds': lectorIds,
            'day': day,
            'month': month,
            'year': year,
            'time': time,
            'lesson': lesson,
        });

        return data;
    }
}

export default LectorsCalendar;