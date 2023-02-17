import APIController from "../apiController"

class WebinarSystem
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "WebinarsSystem"

    // All method names
    static #REGISTER = "Register"

    static async Register(email)
    {
        var res = await APIController.Post(this.#MODULE, this.#REGISTER, {
            "email": email,
        });

        return APIController.IntToBool(res);
    }
}

export default WebinarSystem;