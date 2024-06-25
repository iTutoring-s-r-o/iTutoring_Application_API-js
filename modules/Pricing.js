/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";

class Pricing
{
    static #MODULE = 'Pricing';

    static #GET_PRICE_TABLE = 'GetPriceTable';
    static #GET_LESSON_PRICE = 'GetLessonPrice';
    static #GET_LESSON_PRICE_OFFER = 'GetLessonPriceOffer';

    /**
     * desc: Get price table
     * 
     * @returns 
     */
    static async getPriceTable()
    {
        var priceTable = await APIController.Get(this.#MODULE, this.#GET_PRICE_TABLE, {}, true);

        return priceTable;
    }

    /**
     * desc: Get lesson price
     * 
     * @param {*} type 
     * @param {*} len 
     * @param {*} count 
     * @returns 
     */
    static async getLessonPrice(type, len, count)
    {
        var price = await APIController.Get(this.#MODULE, this.#GET_LESSON_PRICE, {
            'type': type,  
            'len': len,
            'count': count,
        });

        return price;
    }

    /**
     * desc: Get lesson price offer
     * 
     * @param {*} type 
     * @param {*} len 
     * @param {*} count 
     * @returns 
     */
    static async getLessonPriceOffer(type, len, count)
    {
        var price = await APIController.Get(this.#MODULE, this.#GET_LESSON_PRICE_OFFER, {
            'type': type,  
            'len': len,
            'count': count,
        });

        return price;
    }
}

export default Pricing;