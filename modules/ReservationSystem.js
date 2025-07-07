/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import BillingInfo from "../objects/billingInfo";
import APIController from "./../apiController";

/**
 * @deprecated
 */
class ReservationSystem
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "ReservationSystem";

    static #SEND_REQUEST = "SendRequest";



    /**
     * Send request for tutoring. Will register as inquiry and it's id will be returned.
     * @param {*} name 
     * @param {*} email 
     * @param {*} tel 
     * @param {*} msg 
     * @param {*} place  must be PlaceID !
     */
    static async SendRequest(fname, lname, email, tel, msg, place)
    {
        var id = await APIController.Post(this.#MODULE, this.#SEND_REQUEST, {
            "fname": fname,
            "lname": lname,
            "email": email,
            "tel": tel,
            "msg": msg,
            "place": place
        })
        return id;
    }
}

export default ReservationSystem;