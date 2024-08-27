/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


import APIController from "../apiController";
import AuthUser from "../objects/AuthUser";
import TeacherProfile from "../objects/TeacherProfile";

class Authentication
{
    static #MODULE = "Authentication";

    static #LOG_IN = "LogIn";
    static #IS_AUTHENTICATED = "IsAuthenticated";
    static #GET_USER_INFO = "GetUserInfo";
    static #SIGN_OUT = "SignOut";

    static async SignOut()
    {
        var res = await APIController.Get(this.#MODULE, this.#SIGN_OUT);
        return res;
    }

    static async LogIn(email, pass, type)
    {
        var res = await APIController.Post(this.#MODULE, this.#LOG_IN, {
            "email": email,
            "pass": pass,
            "type": type,
        });

        return res;
    }

    static async IsAuthenticated()
    {
        var res = await APIController.Get(this.#MODULE, this.#IS_AUTHENTICATED);
        return APIController.IntToBool(res);
    }

    static async GetUserInfo()
    {
        var userString = await APIController.Get(this.#MODULE, this.#GET_USER_INFO);
        var arr = JSON.parse(userString);

        var user = new AuthUser();
        user.AuthenticationMethod = user['AuthenticationMethod'];

        user.ID = arr['ID'];
        user.Name = arr['Name'];
        user.Email = arr['Email'];
        user.Phone = arr['Phone'];
        user.EduMeetLink = arr['EduMeetLink'];
        user.BitmojiURL = arr['BitmojiURL'];
        user.ModuleAccess = arr['ModuleAccess'];
        user.TeachedLessons = arr['TeachedLessons'];
        if (arr['TeacherProfile'] != undefined | null)
        {
            var profile = new TeacherProfile();
            profile.Bio = arr['TeacherProfile']['Bio'];
            profile.Name = arr['TeacherProfile']['Name'];
            profile.PhotoPath = arr['TeacherProfile']['PhotoPath'];

            user.TeacherProfile = profile;
        }

        return user;
    }
}

export default Authentication;