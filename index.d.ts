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
import Email from "./modules/Email";
import Newsletters from "./modules/Newsletters";
import Payments from "./modules/Payments";
import ReservationSystem from "./modules/ReservationSystem";
import SubjectManager from "./modules/SubjectManager";
import TeacherAuth from "./modules/TeacherAuth";
import TeacherManager from "./modules/TeacherManager";
import TeacherPortal from "./modules/TeacherPortal";
import TeacherProfiles from "./modules/TeacherProfiles";
import WebinarSystem from "./modules/WebinarsSystem";
import GoogleReviews from "./modules/GoogleReviews";
import CustomerEduPortal from "./modules/CustomerEduPortal";
import EventManager from "./modules/EventManager";
import iTutoringApplicationVersion from "./modules/Version";
import LessonManager from "./modules/LessonManager";
import AttendanceManager from "./modules/AttendanceManager";
import TeacherProfileModule from "./modules/TeacherProfileModule";
import LectorDatabase from "./modules/LectorDatabase";

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
    Email,
    Newsletters,
    Payments,
    ReservationSystem,
    SubjectManager,
    TeacherAuth,
    TeacherManager,
    TeacherPortal,
    TeacherProfiles,
    WebinarSystem,
    GoogleReviews,
    CustomerEduPortal,
    EventManager,
    iTutoringApplicationVersion,
    LessonManager,
    Authentication,
    AttendanceManager,
    Toolkit,
    TeacherProfileModule,
    LectorDatabase,
    Pricing,
    Reviews,
    FAQ,
    Inventory,
    
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
