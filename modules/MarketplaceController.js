/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import APIController from "../apiController";

class MarketplaceController
{
    static #MODULE = "MarketplaceController";

    static #GET_HOME_PAGE = "GetHome";
    static #GET_TUTORING_LECTURES = "GetTutoringLectures";
    static #GET_PZK = "GetPzk";
    static #GET_VS_EXAMS = "GetVsExams";
    static #GET_KROUZKY = "GetKrouzky";
    static #SEARCH = "Search";
    static #GET_PRODUCT_PAGE = "GetProductPage";
    static #GET_ORDER_DETAIL = "GetOrderDetail";
    static #GET_INQUIRY_ACCEPT_PAGE = "GetInquiryAcceptPage";

    static async getOrderPage(orderId)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_ORDER_DETAIL, {
            'orderId': orderId
        });
        return JSON.parse(res);
    }

    static async getProductPage(sku, instanceId = null)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_PRODUCT_PAGE, {
            'sku': sku,
            'instanceId': instanceId
        });
        return JSON.parse(res);
    }

    static async getHome()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_HOME_PAGE);
        return JSON.parse(res);
    }

    static async getTutoringLectures(category, level, max, offset)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_TUTORING_LECTURES, {
            'category': category,
            'level': level,
            'max': max,
            'offset': offset
        });
        return JSON.parse(res);
    }

    static async getPzk(lessonType, max, offset, obor = null, dayIndex = null, lessonCount = null, subject = null)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_PZK, {
            'lessonType': lessonType,
            'max': max,
            'offset': offset,
            'obor': obor,
            'dayIndex': dayIndex,
            'lessonCount': lessonCount,
            'subject': subject
        });
        return JSON.parse(res);
    }

    static async getVsExams()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_VS_EXAMS);
        return JSON.parse(res);
    }

    static async getKrouzky(subcategory = null, dayIndex = null, level = null)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_KROUZKY, {
            'subcategory': subcategory,
            'dayIndex': dayIndex,
            'level': level
        });
        return JSON.parse(res);
    }

    static async search(query)
    {
        var res = await APIController.Get(this.#MODULE, this.#SEARCH, {
            'query': query
        });
        return JSON.parse(res);
    }

    static async getInquiryAcceptPage(inquiryId, selectedOnly = false)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_INQUIRY_ACCEPT_PAGE, {
            'inquiryId': inquiryId,
            'selectedOnly': selectedOnly
        });
        return JSON.parse(res);
    }
}

export default MarketplaceController;