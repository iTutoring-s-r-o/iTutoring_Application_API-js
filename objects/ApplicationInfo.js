/*
 * Copyright (c) 2026 iTutoring s.r.o.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, distribution, or disclosure is prohibited.
 *
 */

import ApiFile from "./ApiFile";

export default class ApplicationInfo
{
    FirstName = "";
    LastName = "";
    Email = "";
    Phone = "";
    Message = "";
    GdprConsent = false;
    /**
     * @type {ApiFile}
     */
    Attachments = null;
    JobOfferTitle = "";
}