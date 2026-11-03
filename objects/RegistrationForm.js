/*
 * Copyright (C) 2026 iTutoring s.r.o.
 * All rights reserved.
 *
 *
 */

import Agreement from "./Agreement";

export default class RegistrationForm
{
    Email = "";
    Password = "";
    PasswordRepeat = "";
    GdprConsent = new Agreement();
    MarketingConsent = new Agreement();
}