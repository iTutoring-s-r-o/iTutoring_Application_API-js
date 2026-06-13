/*
 * Copyright (c) 2026 iTutoring s.r.o.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, distribution, or disclosure is prohibited.
 *
 */

import APIController from "../apiController";

class SaleEvents
{
    static #MODULE = "SaleEvents";

    static #GET_SALE_EVENTS = "GetSaleEvents";
    static #GET_SALE_EVENT_BY_ID = "GetSaleEventById";

    static async getSaleEventById(id)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_SALE_EVENT_BY_ID, { id: id });
        return res;
    } 

    static async getSaleEvents(max = -1, offset = 0)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_SALE_EVENTS, { max: max, offset: offset });
        return res;
    }

}

export default SaleEvents;