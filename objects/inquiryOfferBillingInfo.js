/*
 * Copyright (C) 2025 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import BillingInfo from "./billingInfo";
import Agreement from "./Agreement";

export default class InquiryOfferBillingInfo extends BillingInfo
{
    InfoForLector = "";
    BindingAgreement = new Agreement();
}