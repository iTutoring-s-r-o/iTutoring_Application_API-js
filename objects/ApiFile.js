/*
 * Copyright (c) 2026 iTutoring s.r.o.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, distribution, or disclosure is prohibited.
 *
 */

/**
 * Use for sending files to API.  
 * ApiFile object can be added to any json data sent to API. It will be automatically converted to FormData and sent as multipart/form-data request.  
 * Server API will map this ApiFile to Api/File object
 */
export default class ApiFile
{
    /**
     * File object from input type=file
     * @type {File}
     */
    File;
}