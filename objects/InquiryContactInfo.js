/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import Agreement from "./Agreement";

class InquiryContactInfo
{
    FirstName = "";
    LastName = "";
    Email = "";
    Phone = "";
    PlaceId = "online";
    PlaceAdress = "";
    VopGdprConsent = new Agreement();
    MarketingConsent = new Agreement();
}

export default InquiryContactInfo;