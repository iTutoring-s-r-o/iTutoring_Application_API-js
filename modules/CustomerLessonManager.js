/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */

class CustomerLessonManager
{
    static #MODULE = "CustomerLessonManager";

    static #ADD_LESSONS = "AddLessons";

    static async AddLessons(customerId, count, lessonType, lessonLength)
    {
        var res = await APIController.Post(this.#MODULE, this.#ADD_LESSONS, {
            'customerId': customerId,
            'count': count,
            'lessonType': lessonType,
            'lessonLength': lessonLength
        });

        return res;
    }
}

export default CustomerLessonManager;