/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


const BookReturn = {
    SUCCESS: 0,
    NO_TEACHER_AVAILABLE: 1,
    ERROR: 2,
    BAD_RESERVATION: 3,
}

const AuthResult = {
    Authenticated: 0,
    EmailUsed: 1,
    ConnectionError: 2,
    MissingInfo: 3,
    WrongPassword: 4,
    Error: 5,
}

const PaymentType = {
    Stripe: 0,
    Credits: 1,
}

const DeviceOS = {
    WindowsPhone: 0,
    Android: 1,
    iOS: 2,
    Desktop: 3,
}

const PasswordChange = {
    Changed: 0,
    NotAuthenticated: 1,
    NotAuthorized: 2,
}

const R_KEYs = {
    r_key_test: 'r_key_test',
    r_key_live: 'r_key_live'
}

const AuthType = {
    Teacher: 0,
    Customer: 1,
}

export
{
    BookReturn,
    AuthResult,
    PaymentType,
    DeviceOS,
    PasswordChange,
    R_KEYs,
    AuthType
}