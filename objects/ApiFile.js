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
     * 
     * @param {FileList} files 
     */
    constructor(files)
    {
        if (files instanceof FileList)
        {
            if (files.length > 0)
            {
                this.File = files[0];
                let current = this;
                for (let i = 1; i < files.length; i++)
                {
                    current.next = new ApiFile(files[i]);
                    current = current.next;
                }
            }
        }
    }
    /**
     * File object from input type=file
     * @type {File}
     */
    File;
    /**
     * Linked list, next file or null
     */
    next = null;
}