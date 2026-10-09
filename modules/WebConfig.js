/*
 * Copyright (C) 2026 iTutoring s.r.o.
 * All rights reserved.
 *
 */

import APIController from "../apiController";

class WebConfig
{
    static #MODULE = "WebConfig";

    static #GET_MARKETPLACE_HERO = "GetMarketplaceHero";

    static async GetMarketplaceHero() 
    {
        return await APIController.Get(this.#MODULE, this.#GET_MARKETPLACE_HERO);
    }
}

export default WebConfig;