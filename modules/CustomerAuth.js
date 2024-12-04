/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */


import APIController from "./../apiController";

class CustomerAuth
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "CustomerAuth";

    // All method names
    static #SIGN_IN = "SignIn";


    /**
     * 
     * @param {*} email 
     * @param {*} pass 
     * @param {*} fname 
     * @param {*} lname 
     * @returns Int (AuthResult)
     */
    static async SignIn(email, pass, fname, lname, phone)
    {
        var result = await APIController.Post(this.#MODULE, this.#SIGN_IN, {
            'email': email,
            'pass': pass,
            'fname': fname,
            'lname': lname,
            'phone': phone,
        });

        return result;
    }
}

export default CustomerAuth;