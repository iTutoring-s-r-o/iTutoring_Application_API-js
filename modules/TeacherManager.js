import APIController from "./api/apiController";
import Teacher from "./Teacher";

class TeacherManager
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "TeacherManager";

    // All method names
    static #GET_TEACHER_FOR_LESSON = "GetTeacherForLesson";
    static #GET_ALL_TEACHERS = "GetAllTeachers";
    static #UPDATE_SUBJECT_TIMES = "UpdateSubjectTimes";

    /**
     * Find and choose available teacher for your time.
     * Teacher will be stored in session on server.
     * @param {*} date 
     * @param {*} startTime 
     * @param {*} subject 
     * @param {*} lessons 
     * @returns true if teacher was found, false if no teacher available
     */
    static async GetTeacherForLesson(date, startTime, subject, lessons)
    {
        var result = await APIController.Get(this.#MODULE, this.#GET_TEACHER_FOR_LESSON, {
            'date': date,
            'start': startTime,
            'subject': subject,
            'lessons': lessons,
        });

        return APIController.IntToBool(result);
    }

    static async GetAllTeachers()
    {
        var teachers = await APIController.Get(this.#MODULE, this.#GET_ALL_TEACHERS);
        
        var teachersArray = JSON.parse(teachers);

        var teachersClasses = [];

        for (const[key, value] of Object.entries(teachersArray))
        {
            var teacher = new Teacher;

            teacher.Name = value['Name'];
            teacher.Email = value['Email'];
            teacher.ZoomMeeting = value['ZoomMeeting'];
            teacher.ID = value['ID'];
            teacher.TeachedLessons = value['TeachedLessons'];
            teacher.Admin = APIController.IntToBool(value['Admin']);

            teachersClasses[teacher.ID] = teacher;
        }

        return teachersClasses;
    }

    static async UpdateSubjectTimes(teacherId)
    {
        var res = await APIController.Get(this.#MODULE, this.#UPDATE_SUBJECT_TIMES, {
            'teacherId': teacherId,
        });

        return APIController.IntToBool(res);
    }
}

export default TeacherManager;