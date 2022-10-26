import APIController from "./api/apiController";
import Reservation from "./Reservation";
import Teacher from "./Teacher";

class TeacherPortal
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "TeacherPortal";

    // All method names
    static #REMOVE_PERIODIC_TIME = "RemovePeriodicTime";
    static #REMOVE_TIMES = "RemoveTimes";
    static #SELECT_TIMES = "SelectTimes";
    static #SET_TIMES_PERIODICLY = "SetTimePeriodicly";
    static #GET_SUBJECTS = "GetSubjects";
    static #GET_DATE_TIMES = "GetDayTimes";
    static #GET_TEACHER_INFO = "GetTeacherInfo";
    static #GET_RESERVATIONS = "GetReservations";
    static #SET_BITMOJI = "SetBitmoji";
    static #HAS_BITMOJI = "HasBitmoji";

    static async HasBitmoji()
    {
        var res = await APIController.Get(this.#MODULE, this.#HAS_BITMOJI);

        return APIController.IntToBool(res);
    }

    static async SetBitmoji(url)
    {
        await APIController.Get(this.#MODULE, this.#SET_BITMOJI, {
            'url': encodeURIComponent(url),
        });

        return true;
    }

    /**
     * Removes time for specific date and following weeks
     * @param {*} from start time
     * @param {*} to end time
     * @param {*} date 
     * @param {*} subject array of subjects 
     * @param {*} period how many weeks from date (is treated as start date) will be affected
     */
    static async RemovePeriodicTime(from, to, date, subject, period)
    {
        var subjects = JSON.stringify(subject);

        await APIController.Post(this.#MODULE, this.#REMOVE_PERIODIC_TIME, {
            'from': from,
            'to': to,
            'date': date,
            'subject': encodeURIComponent(subjects),
            'period': period,
        });
    }

    static async GetReservations()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_RESERVATIONS);

        try
        {
            JSON.parse(data);
        }
        catch {
            return null;
        }

        var array = JSON.parse(data);
        var reservations = [];

        for (const [key, value] of Object.entries(array))
        {
            var reservation = new Reservation();

            reservation.Date = value['Date']
            reservation.StartTime = value['StartTime'];
            reservation.Subject = value['Subject'];
            reservation.TeacherId = value['TeacherId'];
            reservation.Note = value['Note'];
            reservation.FirstName = value['FirstName'];
            reservation.LastName = value['LastName'];
            reservation.Email = value['Email'];
            reservation.ID = value['ID'];

            reservations[key] = reservation;
        }

        return reservations;
    }

    /**
     * This method will return all availabe teacher info (Except password for security reasons).
     */
    static async GetTeacherInfo()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_TEACHER_INFO);

        try
        {
            JSON.parse(data);
        }
        catch {
            return null;
        }

        var teacherArray = JSON.parse(data);

        var teacher = new Teacher();
        teacher.Email = teacherArray['Email'];
        teacher.Name = teacherArray['Name'];
        teacher.ZoomMeeting = teacherArray['ZoomMeeting'];
        teacher.ID = teacherArray['ID'];
        teacher.TeachedLessons = teacherArray['TeachedLessons'];
        teacher.Admin = teacherArray['Admin'];
        teacher.BitmojiURL =decodeURIComponent(teacherArray['BitmojiURL']);

        return teacher;
    }

    /**
     * 
     * @param {*} from 
     * @param {*} to 
     * @param {*} date 
     * @param {*} subject array of subjects 
     */
    static async RemoveTimes(from, to, date, subject)
    {
        var subjects = JSON.stringify(subject);

        await APIController.Post(this.#MODULE, this.#REMOVE_TIMES, {
            'from': from,
            'to': to,
            'date': date,
            'subject': encodeURIComponent(subjects),
        });
    }

    /**
     * 
     * @param {*} from 
     * @param {*} to 
     * @param {*} date 
     * @param {*} subject array of subjects 
     */
    static async SelectTimes(from, to, date, subject)
    {
        var subjects = JSON.stringify(subject);

        await APIController.Post(this.#MODULE, this.#SELECT_TIMES, {
            'from': from,
            'to': to,
            'date': date,
            'subject': encodeURIComponent(subjects),
        });
    }

    /**
     * Set time for specific date and following weeks
     * @param {*} from 
     * @param {*} to 
     * @param {*} date 
     * @param {*} subject array of subjects 
     * @param {*} period how many weeks from date (is treated as start date) will be affected
     */
    static async SetTimePeriodicly(from, to, date, subject, period)
    {
        var subjects = JSON.stringify(subject);

        await APIController.Post(this.#MODULE, this.#SET_TIMES_PERIODICLY, {
            'from': from,
            'to': to,
            'date': date,
            'subject': encodeURIComponent(subjects),
            'period': period,
        });
    }

    /**
     * Gets all subjects this teacher can teach.
     * @returns json object
     */
    static async GetSubjects()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_SUBJECTS);

        return JSON.parse(res);
    }

    /**
     * Return all available times for this teacher for specific day
     * @param {*} date 
     * @returns JSON object
     */
    static async GetDayTimes(date, id = 'logged')
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_DATE_TIMES, { 'date': date, 'id': id});

        return JSON.parse(res);
    }
}

export default TeacherPortal;