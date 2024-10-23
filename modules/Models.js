/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


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
    static #SET_INQUIRY_FLAG = 'SetInquiryFlag';
    static #UNSET_INQUIRY_FLAG = 'UnsetInquiryFlag';
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
    static #GET_PLANNED_LECTURE_COUNT = 'GetPlannedLectureCount';
    static #CREATE_EVENT_FROM_INQUIRY = 'CreateEventFromInquiry';
    static #GET_FIRST_PLANNED_LECTURE = 'GetFirstPlannedLecture';
    static #MARK_INQUIRY_ALL_INFO_SET = 'MarkInquiryAllInfoSet';
    static #SET_LECTOR = 'SetLector';
    static #GET_LECTOR = 'GetLector';
    static #DELETE_LECTOR = 'DeleteLector';

    static async setLector(lector)
    {
        return await APIController.Post(this.#MODULE, this.#SET_LECTOR, {
            'model': JSON.stringify(lector),
        });
    }

    static async getLector(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_LECTOR, {
            'id': id,
        });

        return data;
    }

    static async deleteLector(id, toTrash = true, archiveOnly = false)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_LECTOR, {
            'id': id,
            'toTrash': toTrash,
            'archiveOnly': archiveOnly,
        });
    }

    static async markInquiryAllInfoSet(inquiryId)
    {
        await APIController.Post(this.#MODULE, this.#MARK_INQUIRY_ALL_INFO_SET, {
            'id': inquiryId,
        });
    }

    static async getFirstPlannedLecture(eventId, includeToday)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_FIRST_PLANNED_LECTURE, {
            'eventId': eventId,
            'includeToday': includeToday,
        });

        return data;
    }

    static async createEventFromInquiry(inquiryId)
    {
        return await APIController.Post(this.#MODULE, this.#CREATE_EVENT_FROM_INQUIRY, {
            'inquiryId': inquiryId,
        });
    }

    static async getPlannedLectureCount(customerId, lessonType, lessonLength)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_PLANNED_LECTURE_COUNT, {
            'customerId': customerId,
            'lessonType': lessonType,
            'lessonLength': lessonLength,
        }
        );

        return data;
    }

    static async setInquiryFlag(id, flag)
    {
        await APIController.Post(this.#MODULE, this.#SET_INQUIRY_FLAG, {
            'id': id,
            'flag': flag,
        });
    }

    static async unsetInquiryFlag(id, flag)
    {
        await APIController.Post(this.#MODULE, this.#UNSET_INQUIRY_FLAG, {
            'id': id,
            'flag': flag,
        });
    }

    static async setEvent(event)
    {
        return await APIController.Post(this.#MODULE, this.#SET_EVENT, {
            'model': JSON.stringify(event),
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
        return await APIController.Post(this.#MODULE, this.#SET_INQUIRY, {
            'model': JSON.stringify(inquiry),
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
        return await APIController.Post(this.#MODULE, this.#SET_OFFER, {
            'model': JSON.stringify(offer),
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
        return await APIController.Post(this.#MODULE, this.#SET_CUSTOMER, {
            'model': JSON.stringify(customer),
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
        return await APIController.Post(this.#MODULE, this.#SET_STUDENT, {
            'model': JSON.stringify(student),
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

    static async setLecture(lecture, draft = false)
    {
        return await APIController.Post(this.#MODULE, this.#SET_LECTURE, {
            'model': JSON.stringify(lecture),
            'draft': draft,
        });
    }

    static async getLecture(id)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_LECTURE, {
            'id': id,
        });

        return data;
    }

    static async deleteLecture(id, toTrash = true, draft = false)
    {
        await APIController.Post(this.#MODULE, this.#DELETE_LECTURE, {
            'id': id,
            'toTrash': toTrash,
            'draft': draft,
        });
    }

    static async setLectureAttendance(attendance)
    {
        return await APIController.Post(this.#MODULE, this.#SET_LECTURE_ATTENDANCE, {
            'model': JSON.stringify(attendance),
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