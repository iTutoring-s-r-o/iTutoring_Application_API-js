/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */

import APIController from "./../apiController";

class CustomerPortal
{
   /**
   * Respective module name for this class
   */
   static #MODULE = "CustomerPortal";

   // All method names
   static #GET_CUSTOMER_INFO = "GetCustomerInfo";

   /**
    * Customer must be logged in otherwise this method will return null object.
    * @returns Customer (CRM Object)
    */
   static async GetCustomerInfo()
   {
      var customer = await APIController.Get(this.#MODULE, this.#GET_CUSTOMER_INFO);
      return customer;
   }
}

export default CustomerPortal;