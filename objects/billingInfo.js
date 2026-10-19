/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import Agreement from "./Agreement";

class BillingInfo
{
    FirstName = "";
    LastName = "";
    StudentName = "";
    StudentAge = 1;
    Email = "";
    Phone = "";
    Address = "";
    City = "";
    Zip = "";
    /**
     * @var {int} Country
     */
    Country = 2;
    VopGdprConsent = new Agreement();
    MarketingConsent = new Agreement();
}

export default BillingInfo;