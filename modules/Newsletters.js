/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "./../apiController";

class Newsletters
{
    /**
        * Respective module name for this class
        */
    static #MODULE = "Newsletters";

    static #ADD_CUSTOMER = "AddCustomer";

    static async AddCustomer(email)
    {
        await APIController.Get(this.#MODULE, this.#ADD_CUSTOMER, {
            'email': email
        });

        return true;
    }
}

export default Newsletters;