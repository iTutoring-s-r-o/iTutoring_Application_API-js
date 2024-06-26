/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";

class iTutoringApplicationVersion
{
    static #MODULE = "Version";

    static #GET_VERSION = "GetVersion";

    static async GetVersion()
    {
        var ver = await APIController.Get(this.#MODULE, this.#GET_VERSION);
        return ver;
    }
}

export default iTutoringApplicationVersion;