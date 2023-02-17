declare module 'iTutoring Application JS API';

"use strict";

import APIController from "./apiController";
import CookiesManager from "./CookiesManager";

import CoursesSystem from "./modules/CoursesSystem";
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

import Course from "./objects/Course";
import CourseReservation from "./objects/CourseReservation";
import Customer from "./objects/Customer";
import Reservation from "./objects/Reservation";
import Subject from "./objects/Subject";
import Teacher from "./objects/Teacher";
import TeacherProfile from "./objects/TeacherProfile";

import
    {
        BookReturn,
        AuthResult,
        PaymentType,
        DeviceOS,
        PasswordChange,
        R_KEYs
    } from "./objects/Enums";

export
{
    APIController,
    CookiesManager,

    CoursesSystem,
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

    Course,
    CourseReservation,
    Customer,
    Reservation,
    Subject,
    Teacher,
    TeacherProfile,

    BookReturn,
    AuthResult,
    PaymentType,
    DeviceOS,
    PasswordChange,
    R_KEYs
}
