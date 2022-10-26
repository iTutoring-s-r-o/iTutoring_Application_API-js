import APIController from "./api/apiController";
import TeacherProfile from "./TeacherProfile";

class TeacherProfiles
{
    static #MODULE = "TeacherProfiles";

    static #GET_PROFILES = "GetProfiles";

    
    /**
     * Retrive all public teacher profiles
     * 
     * @returns teachers public profiles as array
     */
    static async GetProfiles()
    {
        var profiles =  await APIController.Get(this.#MODULE, this.#GET_PROFILES);
        
        var parsedProfiles;
        try
        {
            parsedProfiles = JSON.parse(profiles);
        }
        catch
        {
            return null;
        }
        
        var profilesArray = [];

        for (const [key, value] of Object.entries(parsedProfiles))
        {
            var profile = new TeacherProfile();

            profile.Name = value['Name'];
            profile.Bio = value['Bio'];
            profile.PhotoPath = value['PhotoPath'];

            profilesArray[key] = profile;
        }

        return profilesArray;
    }
}

export default TeacherProfiles;