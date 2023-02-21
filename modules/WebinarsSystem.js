import APIController from "../apiController"
import Webinar from "../objects/Webinar";

class WebinarSystem
{
    /**
    * Respective module name for this class
    */
    static #MODULE = "WebinarsSystem"

    // All method names
    static #REGISTER = "Register"
    static #GET_ALL_WEBINARS = "GetAllWebinars";

    static async Register(email, webinarId)
    {
        var res = await APIController.Post(this.#MODULE, this.#REGISTER, {
            "email": email,
            "id": webinarId
        });

        return APIController.IntToBool(res);
    }

    static async GetAllWebinars()
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_ALL_WEBINARS);

        var dataArray = JSON.parse(data);
        var webinars = [];

        for (const [key, value] of Object.entries(dataArray))
        {
            var webinar = new Webinar();
            webinar.Name = value['Name'];
            webinar.Description = value['Description'];
            webinar.ID = value['ID'];
            webinar.Program = value['Program'];
            webinar.Date = value['Date'];
            webinar.StartTime = value['StartTime'];
            webinar.EndTime = value['EndTime'];
            webinar.TeacherId = value['TeacherId'];
            webinar.TeacherRole = value['TeacherRole'];
            webinar.Price = value['Price'];
            webinar.TeacherName = value['TeacherName'];
            webinar.TeacherPhotoURL = value['TeacherPhotoURL'];

            webinars[webinar.ID] = webinar;
        }

        return webinars;
    }
}

export default WebinarSystem;