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
    static #FINISH_MULTIPLE_INQUIRIES = "FinishMultipleInquiries";
    static #IS_INQUIRY_FINISHED = "IsInquiryFinished";
    static #SELECT_OFFER = "SelectOffer";
    static #GET_SELECTED_OFFER = "GetSelectedOffer";
    static #AGREE_OFFER = "AgreeOffer";
    static #GET_INQUIRY_TYPE = "GetInquiryType";

    static async getInquiryType(inquiryId)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_INQUIRY_TYPE, {
            'inquiryId': inquiryId
        });
        return res;
    }

    static async isInquiryFinished(inquiryId)
    {
        var res = await APIController.Get(this.#MODULE, this.#IS_INQUIRY_FINISHED, {
            'inquiryId': inquiryId
        });
        return res;
    }

    static async finishMultipleInquiries(inquiryIds, additionalInfo)
    {
        var res = await APIController.Post(this.#MODULE, this.#FINISH_MULTIPLE_INQUIRIES, {
            'inquiryIds': inquiryIds,
            'additionalInfo': JSON.stringify(additionalInfo)
        });
        return res;
    }

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

    static async selectOffer(inquiryId, offerId, lessonLength)
    {
        var res = await APIController.Post(this.#MODULE, this.#SELECT_OFFER, {
            'inquiryId': inquiryId,
            'offerId': offerId,
            'lessonLength': lessonLength
        });
        return res;
    }

    static async getSelectedOffer(inquiryId)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_SELECTED_OFFER, {
            'inquiryId': inquiryId
        });
        return res;
    }

    static async agreeOffer(inquiryId, billingInfo, infoForLector, lecturePackageId = null)
    {
        var res = await APIController.Post(this.#MODULE, this.#AGREE_OFFER, {
            'inquiryId': inquiryId,
            'billingInfo': JSON.stringify(billingInfo),
            'infoForLector': infoForLector,
            'lecturePackageId': lecturePackageId
        });
        return res;
    }
}

export default InquiryCheckout;