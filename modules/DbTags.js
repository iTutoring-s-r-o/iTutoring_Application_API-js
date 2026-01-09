/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import APIController from "../apiController";

class DbTags
{
    static #MODULE = "DbTags";

    static #GET_AVAILABLE_TAGS = "GetAvailableTags";

    /**
     * @returns Array of available database tags.
     */
    static async getAvailableTags()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_AVAILABLE_TAGS, {}, true);
        return data;
    }
}

export default DbTags;