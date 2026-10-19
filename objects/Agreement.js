/*
 * Copyright (c) 2026 iTutoring s.r.o.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, distribution, or disclosure is prohibited.
 *
 */

export default class Agreement
{
    ConsentReferenceId = '';
    IsAgreed = false;

    constructor(consentReferenceId = '', isAgreed = false)
    {
        this.ConsentReferenceId = consentReferenceId;
        this.IsAgreed = isAgreed;
    }
}