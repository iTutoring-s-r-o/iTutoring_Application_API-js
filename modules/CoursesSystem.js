import APIController from "./api/apiController";
import Course from "./Course";
import CourseReservation from "./CourseReservation";

class CoursesSystem
{
    /**
     * Respective module name for this class
     */
    static #MODULE = "CourseSystem";

    // All method names
    static #GET_ALL_AVAILABLE_COURSES = "GetAvailableCourses";
    static #GET_PRICE = "GetPrice";
    static #BOOK = "Book";
    static #RESERVE_PLACE = "ReservePlace";
    static #CONFIRM_COURSE = "ConfirmCourse";
    static #ORDER_TIMEOUT = "OrderTimeout";
    static #GET_RESERVATION = "GetReservation";
    static #IS_RESERVATION_PAID = "IsReservationPaid";
    static #MARK_RESERVATION_PAID = "MarkReservationPaid";

    static async MarkReservationPaid(reservationId, transactionId)
    {
        var res = await APIController.Get(this.#MODULE, this.#MARK_RESERVATION_PAID, {
            'reservationId': reservationId,
            'transactionId': transactionId,
        });

        return APIController.IntToBool(res);
    }

    /**
     * Get if reservation is paid or not
     * @param {*} id reservation order ID
     * @returns bool
     */
    static async IsReservationPaid(id)
    {
        var res = await APIController.Get(this.#MODULE, this.#IS_RESERVATION_PAID, {
            'order': id,
        });

        return APIController.IntToBool(res);
    }

    /**
     * Get reservation by its ID.
     * @param {*} id reservation order ID
     * @returns CourseReservation object
     */
    static async GetReservation(id)
    {
        var reservationJSON = await APIController.Get(this.#MODULE, this.#GET_RESERVATION, {
            'order': id,
        });

        var reservationArray = JSON.parse(reservationJSON);

        var reservation = new CourseReservation();
        reservation.CourseId = reservationArray['CourseId'];
        reservation.Email = reservationArray['Email'];
        reservation.FirstName = reservationArray['FirstName'];
        reservation.LastName = reservationArray['LastName'];
        reservation.TeacherId = reservationArray['TeacherId'];

        return reservation;
    }

    /**
     * Checks if your reserved place is still in DB, if not returns true.
     * 
     * This method uses token stored in session, so you have to run ReservePlace 
     * before to be able to run this method.
     * 
     * Represents creating order timeout.
     * @returns bool
     */
    static async OrderTimeout()
    {
        var res = await APIController.Get(this.#MODULE, this.#ORDER_TIMEOUT);

        return APIController.IntToBool(res);
    }

    /**
     * Send notification email about reserving course. Reservation is taken from book,
     *  which means this method will work only after book.
     * @param {*} resend 
     * @returns Returns true if succeded.
     */
    static async ConfirmCourse(resend)
    {
        var res = await APIController.Get(this.#MODULE, this.#CONFIRM_COURSE, {
            'resend': APIController.BoolToInt(resend),
        });

        return APIController.IntToBool(res);
    }

    /**
     * This method is used to reserve place in course without creating reservation. 
     * Is used to hold course during creating order. Will create unique token which 
     * is used to identify your reserved place. This token is not returned and is kept 
     * on backend side. 
     * @param {*} courseId 
     * @returns  int (BookReturn enum)
     */
    static async ReservePlace(courseId)
    {
        var res = await APIController.Post(this.#MODULE, this.#RESERVE_PLACE, {
            'courseId': courseId,
        });

        return res;
    }

    /**
     * Book specific course.
     * 
     * Teacher id is not needed to be specified as will be fetched by course id.
     * @param {*} courseReservation CourseReservation object
     * @returns  int (BookReturn enum)
     */
    static async Book(courseReservation)
    {
        var res = await APIController.Post(this.#MODULE, this.#BOOK, {
            'reservation': encodeURIComponent(JSON.stringify(courseReservation)),
        });

        return res;
    }

    /**
     * Get all available courses by specific parameters
     * @param {*} school type of scool for the course
     * @param {*} subject subject id (0 - math 1 - czech)
     * @param {*} length course length (lessons)
     * @param {*} capacity  course capacity
     * @returns Course[]
     */
    static async GetAvailableCourses(school, subject, length, capacity)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_ALL_AVAILABLE_COURSES, {
            'school': school,
            'subject': subject,
            'length': length,
            'capacity': capacity,
        });

        // Check if returned data are valid JSON object.
        try
        {
            JSON.parse(data);
        }
        catch
        {
            return [];
        }

        var dataArray = JSON.parse(data);

        var availableCourses = [];

        for (const [key, value] of Object.entries(dataArray))
        {
            var course = new Course();

            course.Name = value['Name'];
            course.NameRaw = value['NameRaw'];
            course.School = value['School'];
            course.Price = value['Price'];
            course.CreditPrice = value['CreditPrice'];
            course.ID = value['ID'];
            course.Day = value['Day'];
            course.Time = value['Time'];
            course.Length = value['Length'];
            course.Lessons = value['Lessons'];
            course.Capacity = value['Capacity'];
            course.Item = value['Item'];
            course.Subject = value['Subject'];
            course.PriceBeforeSale = value['PriceBeforeSale'];
            course.IsSaled = value['IsSaled'];

            availableCourses[course.ID] = course;
        }

        return availableCourses;
    }

    /**
     * Get price of courses
     * @param {*} cheap if you want to get the cheapest or the most expensive price tag - bool
     * @param {*} paramas - optional -  JSON url encoded - additional params to filter the courses - key must be variable name of Course object
     * @returns int
     */
    static async GetPrice(cheap, paramas = [])
    {
        var price = await APIController.Get(this.#MODULE, this.#GET_PRICE, {
            'cheap': APIController.BoolToInt(cheap),
            'params': encodeURIComponent(JSON.stringify(paramas)),
        });

        console.log(price);
        return parseInt(price);
    }
}

export default CoursesSystem;