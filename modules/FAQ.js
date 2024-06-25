/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";

class FAQ
{
    static #MODULE = "Faq";

    static #GET_FAQ = "GetFAQ";

    /**
     * desc: Get FAQ
     * @returns 
     */
    static async GetFAQ()
    {
        const faq = await APIController.Get(this.#MODULE, this.#GET_FAQ, {}, true);

        return faq;
    }
}

export default FAQ;