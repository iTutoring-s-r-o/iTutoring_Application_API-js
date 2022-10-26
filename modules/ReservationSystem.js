import APIController from "./../apiController";
import Reservation from "./../objects/Reservation";

class ReservationSystem
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "ReservationSystem";

    // All method names
    static #GET_AVAILABILITY_FOR_DAY = "GetAvailabilityForDay";
    static #GET_AVAILABILITY_FOR_MONTH = "GetAvailabilityForMonth";
    static #IS_TIME_AVAILABLE = "IsTimeAvailable";
    static #IS_DAY_AVAILABLE = "IsDayAvailable";
    static #RESERVE_TIME = "ReserveTime";
    static #BOOK = "Book";
    static #ORDER_TIMEOUT = "OrderTimeout";
    static #CONFIRM_RESERVATION = "ConfirmReservation";
    static #GET_RESERVATION = "GetReservation";
    static #IS_RESERVATION_PAID = "IsReservationPaid";
    static #MARK_RESERVATION_PAID = "MarkReservationPaid";
    static #RETRIVE_ORDER_ID = "RetriveOrderID";

    /**
     * Returns availability for specific day and subject
     * @param {*} date 
     * @param {*} subject 
     * @returns float in range 0...1
     */
    static async GetAvailabilityForDay(date, subject)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_AVAILABILITY_FOR_DAY, { 'date': date, 'subject': subject });

        return parseFloat(data);
    }

    /**
     * Get how much each day in month is free.
     * 
     * @param {*} month month id (starts with 0 ends 11)
     * @param {*} year 
     * @param {*} subject subject id
     * @returns all values (in percent 0...1) by day ascending (1st .... 31st/30rd) as JSON string.
     */
    static async GetAvailabilityForMonth(month, year, subject)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_AVAILABILITY_FOR_MONTH,
            {
                'month': month,
                'year': year,
                'subject': subject,
            });

        return JSON.parse(data);
    }

    /**
     * Check if specific start time is availiable.
     * @param {*} date 
     * @param {*} subject 
     * @param {*} startTime 
     * @param {*} lessons number of lessons (1 = 60 mins, 2 = 2x60 mins)
     * @returns bool
     */
    static async IsTimeAvailable(date, subject, startTime, lessons = 1)
    {
        var data = await APIController.Get(this.#MODULE, this.#IS_TIME_AVAILABLE, { 'date': date, 'subject': subject, 'start': startTime, "lessons": lessons });

        return APIController.IntToBool(data);
    }

    /**
     * Get all available times for specific day and subject
     * @param {*} date 
     * @param {*} subject 
     * @param {*} lessons number of lessons (1 = 60 mins, 2 = 2x60 mins)
     * @returns float array of available times
     */
    static async IsDayAvailable(date, subject, lessons = 1)
    {
        var availableTimes = await APIController.Get(this.#MODULE, this.#IS_DAY_AVAILABLE, { 'date': date, 'subject': subject, "lessons": lessons });

        return JSON.parse(availableTimes);
    }

    /**
     * Reserve time during creating order.
     * 
     * Reserved time will have unique token.
     * 
     * Is not needed to pass teacherId if you already calld GetTeacherForLesson. So teacher is already chosen and saved in session.
     * @param {*} date 
     * @param {*} startTime 
     * @param {*} subject 
     * @param {*} lessons 
     * @param {*} teacherId
     */
    static async ReserveTime(date, startTime, subject, lessons, teacherId = "session")
    {
        var result = await APIController.Get(this.#MODULE, this.#RESERVE_TIME, {
            'date': date,
            'start': startTime,
            'subject': subject,
            'lessons': lessons,
            'teacher': teacherId,
        });

        return parseInt(result);
    }

    /**
     * Keep teacherId in reservation object null if you chosen teacher before
     * @param {*} reservation 
     * @param {*} lessons 
     * @returns int (BookReturn)
     */
    static async Book(reservation, lessons)
    {
        if (!reservation.IsValid())
        {
            throw ("Reservation is not valid");
        }

        var reservationJSON = JSON.stringify(reservation);

        var result = await APIController.Post(this.#MODULE, this.#BOOK, {
            'reservation': encodeURIComponent(reservationJSON),
            'lessons': lessons,
        });

        return result;
    }

    /**
     * Return if reserved time in DB is still present.
     * 
     * Need to be called after reserving time, so token is generated.
     * 
     * Should be called before book to check that time.
     * @returns true if is timeouted(time is deleted) , false if time is still there
     */
    static async OrderTimeout()
    {
        var res = await APIController.Get(this.#MODULE, this.#ORDER_TIMEOUT);

        return APIController.IntToBool(res);
    }

    /**
     * Send confirmation email to teacher and customer.
     * @param {*} resend If true, the last send confirmation email will be resend. (just for the same session)
     * @returns True if succeded
     */
    static async ConfirmReservation(resend = false)
    {
        var res = await APIController.Get(this.#MODULE, this.#CONFIRM_RESERVATION, { 'resend': APIController.BoolToInt(resend) });

        return APIController.IntToBool(res);
    }

    /**
     * Get reservation by id
     * @param {*} id reservation id
     * @returns Reservation object
     */
    static async GetReservation(id)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_RESERVATION, { 'id': id });

        try
        {
            JSON.parse(res)
        }
        catch
        {
            return null;
        }

        var reservationArray = JSON.parse(res);

        var reservation = new Reservation();
        reservation.Date = reservationArray['Date'];
        reservation.StartTime = reservationArray['StartTime'];
        reservation.Subject = reservationArray['Subject'];
        reservation.TeacherId = reservationArray['TeacherId'];
        reservation.Note = reservationArray['Note'];
        reservation.FirstName = reservationArray['FirstName'];
        reservation.LastName = reservationArray['LastName'];
        reservation.Email = reservationArray['Email'];

        return reservation;
    }

    /**
     * Check if reservation has been paid
     * @param {*} id reservation id
     * @returns 
     */ Bool
    static async IsReservationPaid(id)
    {
        var res = await APIController.Get(this.#MODULE, this.#IS_RESERVATION_PAID, { 'id': id })

        return APIController.IntToBool(res);
    }

    /**
     * Will mark reservation as paid. Must provide transaction id for that reservation to confirm that it was paid.
     * @param {*} reservationId 
     * @param {*} transactionId 
     * @returns bool
     */
    static async MarkReservationPaid(reservationId, transactionId)
    {
        var res = await APIController.Get(this.#MODULE, this.#MARK_RESERVATION_PAID, {
            'reservationId': reservationId,
            'transactionId': transactionId,
        });

        return APIController.IntToBool(res);
    }

    /**
     * Get latest order id. Works for both Lessons and courses.
     * 
     * Book function must be called before. ID is stored in session.
     * 
     * @returns orderId
     */
    static async RetriveOrderID()
    {
        var id = await APIController.Get(this.#MODULE, this.#RETRIVE_ORDER_ID);

        return id;
    }
}

export default ReservationSystem;