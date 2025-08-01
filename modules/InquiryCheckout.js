/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import APIController from "../apiController";

class InquiryCheckout
{
    static #MODULE = "InquiryCheckout";

    static #ADD_SUBJECT = "AddSubject";
    static #REMOVE_SUBJECT = "RemoveSubject";
    static #GET_CHECKOUT_SUBJECTS = "GetCheckoutSubjects";
    static #CLEAR_CHECKOUT = "ClearCheckout";
    static #SEND_INQUIRY = "SendInquiry";
    static #FINISH_INQUIRY = "FinishInquiry";
    static #IS_SUBJECT_IN_CHECKOUT = "IsSubjectInCheckout";
    static #GET_CHECKOUT_SUBJECTS_COUNT = "GetCheckoutSubjectsCount";

    static async getCheckoutSubjectsCount()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_CHECKOUT_SUBJECTS_COUNT);
        return res;
    }

    static async isSubjectInCheckout(subjectId)
    {
        var res = await APIController.Get(this.#MODULE, this.#IS_SUBJECT_IN_CHECKOUT, {
            'subjectId': subjectId
        });
        return res
    }

    static async addSubject(subjectId, level = 0)
    {
        var res = await APIController.Post(this.#MODULE, this.#ADD_SUBJECT, {
            'subjectId': subjectId,
            'level': level
        });
        return res;
    }

    static async removeSubject(subjectId)
    {
        var res = await APIController.Post(this.#MODULE, this.#REMOVE_SUBJECT, {
            'subjectId': subjectId,
        });
        return res;
    }

    static async getCheckoutSubjects()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_CHECKOUT_SUBJECTS);
        return res;
    }

    static async clearCheckout()
    {
        await APIController.Post(this.#MODULE, this.#CLEAR_CHECKOUT);
    }

    static async sendInquiry(contactInfo)
    {
        var res = await APIController.Post(this.#MODULE, this.#SEND_INQUIRY, {
            'contactInfo': JSON.stringify(contactInfo)
        });
        return res;
    }

    static async finishInquiry(inquiryId, additionalInfo)
    {
        var res = await APIController.Post(this.#MODULE, this.#FINISH_INQUIRY, {
            'inquiryId': inquiryId,
            'additionalInfo': JSON.stringify(additionalInfo)
        });
        return res;
    }
}

export default InquiryCheckout;