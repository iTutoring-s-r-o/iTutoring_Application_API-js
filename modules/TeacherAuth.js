/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "./../apiController";

class TeacherAuth
{
   /**
* Respective module name for this class
*/
   static #MODULE = "TeacherAuth";

   // All method names
   static #LOGIN = "Login";
   static #REGISTER = "Register";
   static #IS_AUTHENTICATED = "IsAuthenticated";
   static #CHANGE_PASSWOD = "ChangePassword";
   static #REQUEST_PASSWORD_CHANGE = "RequestPasswordChange";

   /**
    * This mothod will force default auth dialog
    */
   static async Auth(callbackUrl)
   {
      location.href = APIController.REST_URL() + encodeURI(APIController.GetVisitorSessionID() + '/auth/tauth?c=' + encodeURI(callbackUrl));
   }

   /**
    * Change current password
    * @param {*} oldPass is required to authorize user
    * @param {*} newPass 
    * @returns int (PasswordChange enum)
    */
   static async ChangePassword(oldPass, newPass)
   {
      var res = await APIController.Post(this.#MODULE, this.#CHANGE_PASSWOD, {
         'oldPass': oldPass,
         'newPass': newPass,
      });

      return res;
   }

   static async RequestPasswordChange(email)
   {
      await APIController.Get(this.#MODULE, this.#REQUEST_PASSWORD_CHANGE, {
         'email': email
      });
   }
}

export default TeacherAuth;