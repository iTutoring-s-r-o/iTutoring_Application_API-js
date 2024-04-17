import TeacherProfile from "../objects/TeacherProfile";
import APIController from "./../apiController";
import Teacher from "./../objects/Teacher";

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

        var teachersClasses = [];

        teachers.forEach(value =>
        {
            var teacherArray = JSON.parse(value);
            var teacher = new Teacher();
            teacher.Email = teacherArray['email'];
            teacher.Name = teacherArray['name'];
            teacher.ZoomMeeting = teacherArray['zoomMeeting'];
            teacher.ID = teacherArray['id'];
            teacher.TeachedLessons = teacherArray['taughtLessons'];

            teachersClasses[teacher.ID] = teacher;
        });

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