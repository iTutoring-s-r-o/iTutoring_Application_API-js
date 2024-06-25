import APIController from "../apiController";

class Models
{
    static #MODULE = 'Models';

    static #SET_EVENT = 'SetEvent';
    static #GET_EVENT = 'GetEvent';
    static #DELETE_EVENT = 'DeleteEvent';
    static #SET_INQUIRY = 'SetInquiry';
    static #GET_INQUIRY = 'GetInquiry';
    static #DELETE_INQUIRY = 'DeleteInquiry';    
    static #SET_OFFER = 'SetOffer';
    static #GET_OFFER = 'GetOffer';
    static #DELETE_OFFER = 'DeleteOffer';
    static #SET_CUSTOMER = 'SetCustomer';
    static #GET_CUSTOMER = 'GetCustomer';
    static #DELETE_CUSTOMER = 'DeleteCustomer';
    static #SET_STUDENT = 'SetStudent';
    static #GET_STUDENT = 'GetStudent';
    static #DELETE_STUDENT = 'DeleteStudent';
    static #SET_LECTURE = 'SetLecture';
    static #GET_LECTURE = 'GetLecture';
    static #DELETE_LECTURE = 'DeleteLecture';
    static #SET_LECTURE_ATTENDANCE = 'SetLectureAttendance';
    static #GET_LECTURE_ATTENDANCE = 'GetLectureAttendance';
    static #DELETE_LECTURE_ATTENDANCE = 'DeleteLectureAttendance';
    static #GET_OFFERS_FOR_INQUIRY = 'GetOffersForInquiry';
    static #GET_STUDENTS_FOR_CUSTOMER = 'GetStudentsForCustomer';
    static #GET_LECTURES_FOR_EVENT = 'GetLecturesForEvent';
    static #GET_ATTENDANCE_FOR_LECTURE = 'GetAttendanceForLecture';

    static async setEvent(event)
    {
        await APIController.Post(this.#MODULE, this.#SET_EVENT, {
            'event': JSON.stringify(event),
        });
    }

    static async getEvent(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_EVENT, {
            'id': id,
        });

        return data;
    }

    static async deleteEvent(id, toTrash = true)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_EVENT, {
            'id': id,
            'toTrash': toTrash,
        });
    }

    static async setInquiry(inquiry)
    {
        await APIController.Post(this.#MODULE, this.#SET_INQUIRY, {
            'inquiry': JSON.stringify(inquiry),
        });
    }

    static async getInquiry(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_INQUIRY, {
            'id': id,
        });

        return data;
    }

    static async deleteInquiry(id, toTrash = true)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_INQUIRY, {
            'id': id,
            'toTrash': toTrash,
        });
    }

    static async setOffer(offer)
    {
        await APIController.Post(this.#MODULE, this.#SET_OFFER, {
            'offer': JSON.stringify(offer),
        });
    }

    static async getOffer(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_OFFER, {
            'id': id,
        });

        return data;
    }

    static async deleteOffer(id, toTrash = true)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_OFFER, {
            'id': id,
            'toTrash': toTrash,
        });
    }

    static async setCustomer(customer)
    {
        await APIController.Post(this.#MODULE, this.#SET_CUSTOMER, {
            'customer': JSON.stringify(customer),
        });
    }

    static async getCustomer(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_CUSTOMER, {
            'id': id,
        });

        return data;
    }

    static async deleteCustomer(id, toTrash = true)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_CUSTOMER, {
            'id': id,
            'toTrash': toTrash,
        });
    }

    static async setStudent(student)
    {
        await APIController.Post(this.#MODULE, this.#SET_STUDENT, {
            'student': JSON.stringify(student),
        });
    }

    static async getStudent(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_STUDENT, {
            'id': id,
        });

        return data;
    }

    static async deleteStudent(id, toTrash = true)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_STUDENT, {
            'id': id,
            'toTrash': toTrash,
        });
    }

    static async setLecture(lecture)
    {
        await APIController.Post(this.#MODULE, this.#SET_LECTURE, {
            'lecture': JSON.stringify(lecture),
        });
    }

    static async getLecture(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_LECTURE, {
            'id': id,
        });

        return data;
    }

    static async deleteLecture(id, toTrash = true)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_LECTURE, {
            'id': id,
            'toTrash': toTrash,
        });
    }

    static async setLectureAttendance(attendance)
    {
        await APIController.Post(this.#MODULE, this.#SET_LECTURE_ATTENDANCE, {
            'attendance': JSON.stringify(attendance),
        });
    }

    static async getLectureAttendance(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_LECTURE_ATTENDANCE, {
            'id': id,
        });

        return data;
    }

    static async deleteLectureAttendance(id, toTrash = true)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_LECTURE_ATTENDANCE, {
            'id': id,
            'toTrash': toTrash,
        });
    }

    static async getOffersForInquiry(inquiryId)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_OFFERS_FOR_INQUIRY, {
            'inquiryId': inquiryId,
        });

        return data;
    }

    static async getStudentsForCustomer(customerId)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_STUDENTS_FOR_CUSTOMER, {
            'customerId': customerId,
        });

        return data;
    }

    static async getLecturesForEvent(eventId)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_LECTURES_FOR_EVENT, {
            'eventId': eventId,
        });

        return data;
    }

    static async getAttendanceForLecture(lectureId)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_ATTENDANCE_FOR_LECTURE, {
            'lectureId': lectureId,
        });

        return data;
    }
}

export default Models;