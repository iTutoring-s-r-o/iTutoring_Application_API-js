import APIController from "./api/apiController";

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

   /**
    * 
    * @param {*} email 
    * @param {*} password 
    * @returns int (AuthResult)
    */
   static async Login(email, password)
   {
      var res = await APIController.Post(this.#MODULE, this.#LOGIN, {
         'email': email,
         'pass': password,
      })

      return res;
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

   /**
    * 
    * @param {*} email 
    * @param {*} password 
    * @returns int (AuthResult)
    */
   static async Register(email, password, name, meetingLink, subjects)
   {
      var res = await APIController.Post(this.#MODULE, this.#REGISTER, {
         'email': email,
         'pass': password,
         'name': name,
         'meetingLink': meetingLink,
         'subjects': subjects,
      });

      return res;
   }

   static async IsAuthenticated()
   {
      var res = await APIController.Get(this.#MODULE, this.#IS_AUTHENTICATED);

      return APIController.IntToBool(res);
   }
}

export default TeacherAuth;