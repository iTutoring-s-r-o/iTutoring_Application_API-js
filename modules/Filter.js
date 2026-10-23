/*
 * Copyright (C) 2026 iTutoring s.r.o.
 * All rights reserved.
 *
 */

import APIController from "../apiController";

class Filter
{
    static #MODULE = "Filter";

    static #GET = "Get";
    static #SET = "Set";
    static #GET_OPTIONS = "GetOptions";
    static #CLEAR_FILTERS = "ClearFilters";

    static async get(name, forceNew = false)
    {
        var filter = await APIController.Get(this.#MODULE, this.#GET, {
            'name': name,
            'forceNew': forceNew
        });

        return filter;
    }
    
    static async set(filterName, id, value)
    {
        var result = await APIController.Post(this.#MODULE, this.#SET, {
            'filterName': filterName,
            'id': id,
            'value': value
        });

        return result;
    }

    static async getOptions(filterName)
    {
        var options = await APIController.Get(this.#MODULE, this.#GET_OPTIONS, {
            'filterName': filterName
        });

        return options;
    }
    
    static async clearFilters(filterName)
    {
        var result = await APIController.Post(this.#MODULE, this.#CLEAR_FILTERS, {
            'filterName': filterName
        });

        return result;
    }
}

export default Filter;