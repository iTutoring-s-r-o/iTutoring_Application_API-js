import APIController from "../apiController";


class Toolkit
{
    static ModuleInfo = null;
    static UserDataLoaded = false;
    static AuthDone = false;

    /**
     * Main function to initialize any toolkit module.
     * It will handle all important authorizations
     */
    static async Initialize(moduleUid)
    {
        this.ModuleInfo = await this.GetModuleProperties(moduleUid);

        await this.RequestAccess(moduleUid);

        this.AuthDone = true;
    }

    /***** API Methods  ******/

    static #MODULE = "Toolkit";

    static #REQUEST_ACCESS = "RequestAccess";
    static #GET_MODULE_INFO = "GetModuleInfo";

    static async RequestAccess(moduleUid)
    {
        var data = await APIController.Post(this.#MODULE, this.#REQUEST_ACCESS, {
            'uid': moduleUid
        });
    }

    /**
     * Will be returned as array (parsed JSON).
     * @param {*} moduleUid 
     * @returns 
     */
    static async GetModuleProperties(moduleUid)
    {
        var info = await APIController.Get(this.#MODULE, this.#GET_MODULE_INFO, {
            'uid': moduleUid
        });

        return JSON.parse(info);
    }
}

export default Toolkit;