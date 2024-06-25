import APIController from "../apiController";

class TableExplorer
{
    static #MODULE = "TableExplorer";

    static #CREATE_INQUIRY_EXPLORER = "CreateInquiryExplorer";
    static #CREATE_EVENT_EXPLORER = "CreateEventExplorer";
    static #CREATE_OFFER_EXPLORER = "CreateOfferExplorer";
    static #CREATE_CUSTUMER_EXPLORER = "CreateCustumerExplorer";
    static #CREATE_LECTURE_EXPLORER = "CreateLectureExplorer";
    static #CREATE_LECTURE_ATTENDANCE_EXPLORER = "CreateLectureAttendanceExplorer";
    static #CREATE_STUDENT_EXPLORER = "CreateStudentExplorer";

    static #CHECK_EXPLORER = "CheckExplorer";
    static #GET_MAX_PAGES = "GetMaxPages";
    static #SET_PAGE_SIZE = "SetPageSize";
    static #GET_PAGE_SIZE = "GetPageSize";
    static #GET_CURRENT_PAGE_INDEX = "GetCurrentPageIndex";
    static #GET_CURRENT_PAGE = "GetCurrentPage";
    static #GET_PAGE = "GetPage";
    static #GET_NEXT_PAGE = "GetNextPage";
    static #GET_PREVIOUS_PAGE = "GetPreviousPage";
    static #GET_FILTERED_RESULTS = "GetFilteredResults";
    static #SEARCH = "Search";
    static #ADD_FILTER = "AddFilter";
    static #RESET_FILTER = "ResetFilter";

    static async createInquiryExplorer()
    {
        var data = await APIController.Get(this.#MODULE, this.#CREATE_INQUIRY_EXPLORER);

        return data['token'];
    }

    static async createEventExplorer()
    {
        var data = await APIController.Get(this.#MODULE, this.#CREATE_EVENT_EXPLORER);

        return data['token'];
    }

    static async createOfferExplorer()
    {
        var data = await APIController.Get(this.#MODULE, this.#CREATE_OFFER_EXPLORER);

        return data['token'];
    }

    static async createCustumerExplorer()
    {
        var data = await APIController.Get(this.#MODULE, this.#CREATE_CUSTUMER_EXPLORER);

        return data['token'];
    }

    static async createLectureExplorer()
    {
        var data = await APIController.Get(this.#MODULE, this.#CREATE_LECTURE_EXPLORER);

        return data['token'];
    }

    static async createLectureAttendanceExplorer()
    {
        var data = await APIController.Get(this.#MODULE, this.#CREATE_LECTURE_ATTENDANCE_EXPLORER);

        return data['token'];
    }

    static async createStudentExplorer()
    {
        var data = await APIController.Get(this.#MODULE, this.#CREATE_STUDENT_EXPLORER);

        return data['token'];
    }

    static async checkExplorer(token)
    {
        var data = await APIController.Get(this.#MODULE, this.#CHECK_EXPLORER, {
            'token': token,
        });

        return data;
    }
    
    static async getMaxPages(token)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_MAX_PAGES, {
            'token': token,
        });

        return data;
    }

    static async setPageSize(token, pageSize)
    {
        await APIController.Post(this.#MODULE, this.#SET_PAGE_SIZE, {
            'token': token,
            'pageSize': pageSize,
        });
    }

    static async getPageSize(token)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_PAGE_SIZE, {
            'token': token,
        });

        return data;
    }

    static async getCurrentPageIndex(token)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_CURRENT_PAGE_INDEX, {
            'token': token,
        });

        return data;
    }

    static async getCurrentPage(token)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_CURRENT_PAGE, {
            'token': token,
        });

        return data;
    }

    static async getPage(token, pageIndex)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_PAGE, {
            'token': token,
            'pageIndex': pageIndex,
        });

        return data;
    }

    static async getNextPage(token)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_NEXT_PAGE, {
            'token': token,
        });

        return data;
    }

    static async getPreviousPage(token)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_PREVIOUS_PAGE, {
            'token': token,
        });

        return data;
    }

    static async getFilteredResults(token, filters)
    {
        var data = await APIController.Get(this.#MODULE, this.#GET_FILTERED_RESULTS, {
            'token': token,
            'filters': JSON.stringify(filters),
        });

        return data;
    }

    static async search(token, searchPhrase, base64encoded = true)
    {
        var data = await APIController.Get(this.#MODULE, this.#SEARCH, {
            'token': token,
            'searchPhrase': searchPhrase,
            'base64encoded': base64encoded,
        });

        return data;
    }

    static async addFilter(token, filter, filterValue, filterOperation)
    {
        await APIController.Post(this.#MODULE, this.#ADD_FILTER, {
            'token': token,
            'filter': filter,
            'filterValue': filterValue,
            'filterOperation': filterOperation,
        });
    }

    static async resetFilter(token)
    {
        await APIController.Post(this.#MODULE, this.#RESET_FILTER, {
            'token': token,
        });
    }
}

export default TableExplorer;