/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */

import APIController from "../apiController";

class WebController
{
    static #MODULE = "WebController";

    static #GET_GENERAL_PAGE_CONTENT = "GetGeneralPageContent";
    static #GET_PZK_PAGE_CONTENT = "GetPzkPage";
    static #GET_PRICING_PAGE = "GetPricingPage";

    static async GetGeneralPageContent()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_GENERAL_PAGE_CONTENT);
        return JSON.parse(res);
    }

    static async GetPzkPageContent()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_PZK_PAGE_CONTENT);
        return JSON.parse(res);
    }

    static async GetPricingPage()
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_PRICING_PAGE);
        return JSON.parse(res);
    }
}

export default WebController;