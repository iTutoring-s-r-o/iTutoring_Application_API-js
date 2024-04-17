import APIController from "../apiController";

class LectorDatabase
{
    /**
     * Respective module name for this class
     */
    static #MODULE = "LectorDatabase";

    // All method names
    static #GET_LECTORS = "GetLectors";
    static #GET_LECTOR_INFO = "GetLectorInfo";
    static #QUERY_LECTOR_DSS = "QueryLectorDSS";
    static #REMOVE_LECTOR = "RemoveLector";
    static #ADD_LECTOR = "AddLector";
    static #RESET_PASSWORD = "ResetPassword";
    static #ADD_MODULE_ACCESS = "AddModuleAccess";

    /**
     * desc: Get all lectors
     * @param {int} listOffset 
     * @param {int} maxCount 
     * @returns 
     */
    static async getLectors(listOffset = 0, maxCount = -1)
    {
        var lectors = await APIController.Get(this.#MODULE, this.#GET_LECTORS, {
            'listOffset': listOffset,
            'maxCount': maxCount,
        });

        return JSON.parse(lectors);
    }

    /**
     *  desc: Get lector info
     * @param {string} lectorId 
     * @returns 
     */
    static async getLectorInfo(lectorId)
    {
        var lector = await APIController.Get(this.#MODULE, this.#GET_LECTOR_INFO, {
            'lectorId': lectorId,
        });

        return JSON.parse(lector);
    }


    /**
     *  desc: Query lector DSS
     * @param {string} dssQuery 
     * @returns 
     */
    static async queryLectorDSS(dssQuery)
    {
        var lector = await APIController.Get(this.#MODULE, this.#QUERY_LECTOR_DSS, {
            "query": dssQuery
        });

        return JSON.parse(lector);
    }


    /**
     *  desc: Remove lector
     * @param {string} lectorId 
     */
    static async removeLector(lectorId)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_LECTOR, {
            'lectorId': lectorId,
        });
    }

    /**
     *  desc: Add lector
     * @param {string} name 
     * @param {string} email 
     */
    static async addLector(name, email)
    {
        await APIController.Post(this.#MODULE, this.#ADD_LECTOR, {
            'name': name,
            'email': email,
        });
    }

    /**
     *  desc: Reset password
     * @param {string} lectorId 
     */
    static async resetPassword(lectorId)
    {
        await APIController.Post(this.#MODULE, this.#RESET_PASSWORD, {
            'lectorId': lectorId,
        });
    }

    /**
     *  desc: Add module access
     * @param {string} lectorId 
     * @param {string} moduleId 
     * @param {int} access 
     */
    static async addModuleAccess(lectorId, moduleId, access)
    {
        await APIController.Post(this.#MODULE, this.#ADD_MODULE_ACCESS, {
            'lectorId': lectorId,
            'module': moduleId,
            'access': access,
        });
    }
}

export default LectorDatabase;