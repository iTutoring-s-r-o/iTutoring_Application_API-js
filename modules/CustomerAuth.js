/*
 * Copyright (C) 2025 iTutoring s.r.o.
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
    static #RESEND_CONFIRMATION_EMAIL = 'ResendConfirmationEmail';
    static #REQUEST_PASSWORD_CHANGE = 'RequestPasswordChange';

    static async RequestPasswordChange(email)
    {
        var result = await APIController.Get(this.#MODULE, this.#REQUEST_PASSWORD_CHANGE, {
            'email': email
        });

        return result;
    }

    static async ResendConfirmationEmail(email)
    {
        var result = await APIController.Get(this.#MODULE, this.#RESEND_CONFIRMATION_EMAIL, {
            'email': email
        });

        return result;
    }

    /**
     * 
     * @param {*} email 
     * @param {*} pass 
     * @returns Int (AuthResult)
     */
    static async SignIn(email, pass)
    {
        var result = await APIController.Post(this.#MODULE, this.#SIGN_IN, {
            'email': email,
            'pass': pass,
        });

        return result;
    }
}

export default CustomerAuth;