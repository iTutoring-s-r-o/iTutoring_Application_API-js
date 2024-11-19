/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";

class AiAssist
{
    static #MODULE = 'AiAssist';

    static #FIX_LECTURE_REPORT = 'FixLectureReport';

    static async fixLectureReport(topic, report, review, homework)
    {
        var data = await APIController.Post(this.#MODULE, this.#FIX_LECTURE_REPORT, {
            'topic': topic,
            'report': report,
            'review': review,
            'homework': homework,
        });

        return data;
    }
}

export default AiAssist;