/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";

class Inventory
{
    static #MODULE = "Inventory";

    static #GET_AVAILABLE_ITEMS = "GetAvailableItems";
    static #SALE_COUPON_EXISTS = "SaleCouponExists";
    static #SEARCH = "Search";
    static #GET_ITEM = "GetItem";

    static async getItem(id)
    {
        var item = await APIController.Get(this.#MODULE, this.#GET_ITEM, {
            'id': id,
        });

        return item;
    }

    static async saleCouponExists(code)
    {
        var exists = await APIController.Get(this.#MODULE, this.#SALE_COUPON_EXISTS, {
            'code': code,
        });

        return exists;
    }

    static async getAvailableItems(category = "ANY", max = -1, offset = 0, filter = {}, startingWithinHours = -1)
    {
        var items = await APIController.Get(this.#MODULE, this.#GET_AVAILABLE_ITEMS, {
            'category': category,
            'max': max,
            'offset': offset,
            'filter': JSON.stringify(filter),
            'startingWithinHours': startingWithinHours
        });

        return items;
    }

    static async search(query) 
    {
        var items = await APIController.Get(this.#MODULE, this.#SEARCH, {
            'query': query
        });

        return items;
    }
}

export default Inventory;