/*
 * Copyright (C) 2026 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import APIController from "../apiController";

class Accounting
{
    static #MODULE = "Accounting";

    static #ADD_TAX_SALE_INTERVAL_TO_LECTOR = "AddTaxSaleIntervalToLector";
    static #REMOVE_TAX_SALE_INTERVAL_FROM_LECTOR = "RemoveTaxSaleIntervalFromLector";
    static #UPDATE_TAX_SALE_INTERVAL_FOR_LECTOR = "UpdateTaxSaleIntervalForLector";

    static async addTaxSaleIntervalToLector(lectorId, start, end = 0, sale = 15000)
    {
        var res = await APIController.Post(this.#MODULE, this.#ADD_TAX_SALE_INTERVAL_TO_LECTOR, {
            lectorId: lectorId,
            start: start,
            end: end,
            sale: sale
        });
        return res;
    }

    static async removeTaxSaleIntervalFromLector(lectorId, intervalId)
    {
        var res = await APIController.Post(this.#MODULE, this.#REMOVE_TAX_SALE_INTERVAL_FROM_LECTOR, {
            lectorId: lectorId,
            intervalId: intervalId
        });
        return res;
    }

    static async updateTaxSaleIntervalForLector(lectorId, intervalModel)
    {
        var res = await APIController.Post(this.#MODULE, this.#UPDATE_TAX_SALE_INTERVAL_FOR_LECTOR, {
            lectorId: lectorId,
            interval: intervalModel
        });
        return res;
    }
}

export default Accounting;