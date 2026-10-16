/*
 * Copyright (C) 2026 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import APIController from "../apiController";

class Legal
{
    static #MODULE = "Legal";

    static #GET_CONSENT_SNAPSHOT = "GetConsentSnapshot";

    static async getConsentSnapshot(consentId)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_CONSENT_SNAPSHOT, {
            "consentId": consentId
        });
        return JSON.parse(res);
    }
}

export default Legal;