/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import APIController from "../apiController";
import PlainInquiryInfo from "../objects/PlainInquiryInfo";

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
    static #SEND_PLAIN_INQUIRY = "SendPlainInquiry";
    static #GET_INQUIRY_GROUP_DETAILS = "GetInquiryGroupDetails";
    static #FINISH_INQUIRY_GROUP = "FinishInquiryGroup";
    static #IS_INQUIRY_GROUP_FINISHED = "IsInquiryGroupFinished";
    
    static async isInquiryGroupFinished(groupId)
    {
        var res = await APIController.Get(this.#MODULE, this.#IS_INQUIRY_GROUP_FINISHED, {
            'groupId': groupId
        });
        return res;
    }

    static async getInquiryGroupDetails(groupId)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_INQUIRY_GROUP_DETAILS, {
            'groupId': groupId
        });
        return res;
    }

    static async sendPlainInquiry(inquiryInfo = new PlainInquiryInfo())
    {
        var res = await APIController.Post(this.#MODULE, this.#SEND_PLAIN_INQUIRY, {
            'inquiryInfo': JSON.stringify(inquiryInfo)
        });
        return res;
    }

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

    static async finishInquiryGroup(groupId, additionalInfo)
    {
        var res = await APIController.Post(this.#MODULE, this.#FINISH_INQUIRY_GROUP, {
            'groupId': groupId,
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

    static async sendInquiry(contactInfo, registrationForm = null)
    {
        var res = await APIController.Post(this.#MODULE, this.#SEND_INQUIRY, {
            'contactInfo': JSON.stringify(contactInfo),
            'registrationForm': JSON.stringify(registrationForm)
        });
        try
        {
            var parsedRes = JSON.parse(res);
            return parsedRes;
        } catch (e)
        {
            return res;
        }
    }

    static async finishInquiry(inquiryId, additionalInfo, silent = false)
    {
        var res = await APIController.Post(this.#MODULE, this.#FINISH_INQUIRY, {
            'inquiryId': inquiryId,
            'additionalInfo': JSON.stringify(additionalInfo),
            'silent': silent
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

    static async agreeOffer(inquiryId, billingInfo, lecturePackageId = null)
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