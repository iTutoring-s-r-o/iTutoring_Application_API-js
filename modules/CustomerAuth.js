/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "./../apiController";
//import EventHandling from "./EventHandling";

class CustomerAuth
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "CustomerAuth";

    // All method names
    static #IS_AUTHENTICATED = "IsAuthenticated";
    static #LOG_IN = "Login";
    static #SIGN_ING = "SignIn";

    /**
     * Checks if currunet user(customer) is authenticated or not.
     * @returns bool
     */
    static async IsAuthenticated()
    {
        var result = await APIController.Get(this.#MODULE, this.#IS_AUTHENTICATED);

        return APIController.IntToBool(result);
    }

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
        var result = await APIController.Post(this.#MODULE, this.#SIGN_ING, {
            'email': email,
            'pass': pass,
            'fname': fname,
            'lname': lname,
            'phone': phone,
        });

        /*EventHandling.OnUserSignIn.publish(
            {
                result: result
            }
        );*/

        return result;
    }

    /**
     * 
     * @param {*} email 
     * @param {*} password 
     * @returns Int (AuthResult)
     */
    static async LogIn(email, password)
    {
        var result = await APIController.Post(this.#MODULE, this.#LOG_IN, {
            'email': email,
            'pass': password,
        });

        /*EventHandling.OnUserLogIn.publish(
            {
                result: result,
            }
        );
*/
        return result;
    }
}

export default CustomerAuth;