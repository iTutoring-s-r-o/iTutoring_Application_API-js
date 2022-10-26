import Subject from "./../objects/Subject";
import APIController from "./../apiController";
import Course from "./../objects/Course";

class SubjectManager
{
    /**
     * Respective module name for this class
     */
    static #MODULE = "SubjectManager";

    // All method names
    static #GET_ALL_AVAILABLE_SUBJECTS = "GetAllAvailableSubjects";
    static #GET_ALL_AVAILABLE_COURSES = "GetAllAvailableCourses";

    // Cache keys
    static #SUBJECTS_CACHE_KEY = "json_subjects_c_k";
    static #COURSES_CACHE_KEY = "json_courses_c_k";

    /**
     * 
     * @returns Array (Subject[id]) of all available subjects as array of Subject objects. Key is id of subject.
     */
    static async GetAllAvailableSubjects(requestReload = false)
    {
        var data;

        /*if (APICache.IsCached(this.#SUBJECTS_CACHE_KEY) && !requestReload)
        {
            data = APICache.Retrive(this.#SUBJECTS_CACHE_KEY);
        }
        else
        {
            data = await APIController.Get(this.#MODULE, this.#GET_ALL_AVAILABLE_SUBJECTS);
            APICache.Cache(this.#SUBJECTS_CACHE_KEY, data);
        }*/

        data = await APIController.Get(this.#MODULE, this.#GET_ALL_AVAILABLE_SUBJECTS);

        var dataArray = JSON.parse(data);

        var availableSubjects = [];

        for (const [key, value] of Object.entries(dataArray))
        {
            var subject = new Subject();
            subject.CreditPrice = value['CreditPrice'];
            subject.Description = value['Description'];
            subject.ID = value['ID'];
            subject.IconPath = value['IconPath'];
            subject.Name = value['Name'];
            subject.Price = value['Price'];
            subject.NameRaw = value['NameRaw'];
            subject.Level = value['Level'];
            subject.Item = value['Item'];
            subject.PriceBeforeSale = value['PriceBeforeSale'];
            subject.IsSaled = value['IsSaled'];

            availableSubjects[subject.ID] = subject;
        }

        return availableSubjects;
    }

    static async GetAllAvailableCourses(requestReload = false)
    {
        var data;

        /*if (APICache.IsCached(this.#COURSES_CACHE_KEY) && !requestReload)
        {
            data = APICache.Retrive(this.#COURSES_CACHE_KEY);
        }
        else
        {
            data = await APIController.Get(this.#MODULE, this.#GET_ALL_AVAILABLE_COURSES);
            APICache.Cache(this.#COURSES_CACHE_KEY, data);
        }*/

        data = await APIController.Get(this.#MODULE, this.#GET_ALL_AVAILABLE_COURSES);

        var dataArray = JSON.parse(data);

        var availableCourses = [];

        for (const [key, value] of Object.entries(dataArray))
        {
            var course = new Course();

            course.Name = value['Name'];
            course.NameRaw = value['NameRaw'];
            course.School = value['School'];
            course.Price = value['Price'];
            course.CreditPrice = value['CreditPrice'];
            course.ID = value['ID'];
            course.Day = value['Day'];
            course.Time = value['Time'];
            course.Length = value['Length'];
            course.Lessons = value['Lessons'];
            course.Capacity = value['Capacity'];
            course.Item = value['Item'];
            course.Subject = value['Subject'];
            course.PriceBeforeSale = value['PriceBeforeSale'];
            course.IsSaled = value['IsSaled'];

            availableCourses[course.ID] = course;
        }

        return availableCourses;
    }
}

export default SubjectManager;