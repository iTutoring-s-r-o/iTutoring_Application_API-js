/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


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
    static #REMOVE_MODULE_ACCESS = "RemoveModuleAccess";
    static #GET_COUNT_OF_LECTORS = "GetCountOfLectors";
    static #GET_PUBLIC_PROFILES = "GetPublicProfiles";

    /**
     * @deprecated use CRM (Table Explorer, Modles) instead
     * 
     * desc: Get count of lectors
     * 
     * @returns {int} count of lectors
     */
    static async getCountOfLectors()
    {
        var count = await APIController.Get(this.#MODULE, this.#GET_COUNT_OF_LECTORS);

        return count;
    }

    /**
     * @deprecated use CRM (Table Explorer, Modles) instead
     * 
     * desc: Remove module access
     * @param {string} lectorId
     * @param {string} moduleId
     */
    static async removeModuleAccess(lectorId, moduleId)
    {
        await APIController.Post(this.#MODULE, this.#REMOVE_MODULE_ACCESS, {
            'lectorId': lectorId,
            'module': moduleId,
        });
    }

    /**
     * @deprecated use CRM (Table Explorer, Modles) instead
     * 
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

        return lectors;
    }

    /**
     * @deprecated use CRM (Table Explorer, Modles) instead
     * 
     *  desc: Get lector info
     * @param {string} lectorId 
     * @returns 
     */
    static async getLectorInfo(lectorId)
    {
        var lector = await APIController.Get(this.#MODULE, this.#GET_LECTOR_INFO, {
            'lectorId': lectorId,
        });

        return lector;
    }


    /**
     * @deprecated use CRM (Table Explorer, Modles) instead
     * 
     *  desc: Query lector DSS
     * @param {string} dssQuery 
     * @returns 
     */
    static async queryLectorDSS(dssQuery)
    {
        var lector = await APIController.Get(this.#MODULE, this.#QUERY_LECTOR_DSS, {
            "query": dssQuery
        });

        return lector;
    }


    /**
     * @deprecated use CRM (Table Explorer, Modles) instead
     * 
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
     * 
     * @returns {string} lectorId
     */
    static async addLector(name, email)
    {
        var id = await APIController.Post(this.#MODULE, this.#ADD_LECTOR, {
            'name': name,
            'email': email,
        });

        return id;
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
     * @deprecated use CRM (Table Explorer, Modles) instead
     * 
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

    /**
     * desc: Get public profiles
     * @param {number} offset
     * @param {number} maxCount
     * @returns {Promise<array>}
     */
    static async getPublicProfiles(offset = 0, maxCount = -1, onlyWithProfilePictures = false, useCache = true)
    {
        return await APIController.Get(this.#MODULE, this.#GET_PUBLIC_PROFILES, {
            'offset': offset,
            'max': maxCount,
            'onlyWithProfilePictures': onlyWithProfilePictures,
        }, useCache, (onlyWithProfilePictures ? "onlyWithProfilePictures" : ""));
    }
}

export default LectorDatabase;