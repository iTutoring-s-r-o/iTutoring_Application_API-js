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
    static #GET_MARKETPLACE_HOME_FEED = "GetMarketplaceHomeFeed";
    static #GET_MARKETPLACE_SUBJECT_FEED = "GetMarketplaceSubjectFeed";

    static async getMarketplaceHomeFeed() 
    {
        return await APIController.Get(this.#MODULE, this.#GET_MARKETPLACE_HOME_FEED);
    }

    static async getMarketplaceHero() 
    {
        return await APIController.Get(this.#MODULE, this.#GET_MARKETPLACE_HERO);
    }
    
    static async getMarketplaceSubjectFeed() 
    {
        return await APIController.Get(this.#MODULE, this.#GET_MARKETPLACE_SUBJECT_FEED);
    }
}

export default WebConfig;