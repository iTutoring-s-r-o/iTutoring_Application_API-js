/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


declare module 'iTutoring Application JS API';

"use strict";

import APIController from "./apiController";
import CookiesManager from "./CookiesManager";

import CustomerAuth from "./modules/CustomerAuth";
import CustomerPortal from "./modules/CustomerPortal";
import Payments from "./modules/Payments";
import ReservationSystem from "./modules/ReservationSystem";
import SubjectManager from "./modules/SubjectManager";
import TeacherAuth from "./modules/TeacherAuth";
import TeacherProfiles from "./modules/TeacherProfiles";
import GoogleReviews from "./modules/GoogleReviews";
import iTutoringApplicationVersion from "./modules/Version";
import TeacherProfileModule from "./modules/TeacherProfileModule";
import LectorDatabase from "./modules/LectorDatabase";
import LectorsCalendar from "./modules/LectorsCalendar";
import AiAssist from "./modules/AiAssist";

import Course from "./objects/Course";
import CourseReservation from "./objects/CourseReservation";
import Customer from "./objects/Customer";
import Reservation from "./objects/Reservation";
import Subject from "./objects/Subject";
import Teacher from "./objects/Teacher";
import TeacherProfile from "./objects/TeacherProfile";
import iEvent from "./objects/Event";
import AuthUser from "./objects/AuthUser";
import Authentication from "./modules/Authentication";
import AttendanceEvent from "./objects/AttendanceEvent";
import Toolkit from "./toolkit/Toolkit";
import Pricing from "./modules/Pricing";
import Reviews from "./modules/Reviews";
import FAQ from "./modules/FAQ";
import Inventory from "./modules/Inventory";
import BillingInfo from "./objects/billingInfo";

import
    {
        BookReturn,
        AuthResult,
        PaymentType,
        DeviceOS,
        PasswordChange,
        R_KEYs,
        AuthType,
    } from "./objects/Enums";

export
{
    APIController,
    CookiesManager,

    CustomerAuth,
    CustomerPortal,
    Payments,
    ReservationSystem,
    SubjectManager,
    TeacherAuth,
    TeacherProfiles,
    GoogleReviews,
    iTutoringApplicationVersion,
    Authentication,
    Toolkit,
    TeacherProfileModule,
    LectorDatabase,
    Pricing,
    Reviews,
    FAQ,
    Inventory,
    LectorsCalendar,
    AiAssist,
    
    Course,
    CourseReservation,
    Customer,
    Reservation,
    Subject,
    Teacher,
    TeacherProfile,
    iEvent,
    AuthUser,
    AttendanceEvent,
    BillingInfo,

    BookReturn,
    AuthResult,
    PaymentType,
    DeviceOS,
    PasswordChange,
    R_KEYs,
    AuthType
}
