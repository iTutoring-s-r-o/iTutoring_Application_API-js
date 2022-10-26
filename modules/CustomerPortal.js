import APIController from "./../apiController";
import Customer from "./../objects/Customer";

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
    * @returns Customer object
    */
   static async GetCustomerInfo()
   {
      var customerString = await APIController.Get(this.#MODULE, this.#GET_CUSTOMER_INFO);
      if (customerString == "null")
      {
         return null;

      }
      var customerArray = JSON.parse(customerString);

      var customer = new Customer();
      customer.Email = customerArray['Email'];
      customer.FirstName = customerArray['FirstName'];
      customer.LastName = customerArray['LastName'];
      customer.ID = customerArray['ID'];

      return customer;
   }
}

export default CustomerPortal;