/*
 * Copyright (c) 2026 iTutoring s.r.o.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, distribution, or disclosure is prohibited.
 *
 */

import APIController from "../apiController";
import ApplicationInfo from "../objects/ApplicationInfo";

class Hr
{
    static #MODULE = "Hr";

    static #GET_JOB_OFFERS = "GetJobOffers";
    static #SEND_APPLICATION = "SendApplication";

    static async getJobOffers(max = -1, offset = 0)
    {
        var res = await APIController.Get(this.#MODULE, this.#GET_JOB_OFFERS, { max: max, offset: offset });
        return res;
    }

    static async sendApplication(applicationInfo = new ApplicationInfo())
    {
        var res = await APIController.Post(this.#MODULE, this.#SEND_APPLICATION, { applicationInfo: applicationInfo });
        return res;
    }
}

export default Hr;