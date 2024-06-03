import CookiesManager from "./CookiesManager";
import { R_KEYs } from "./objects/Enums";

/**
 * Main class for communicating with our backend REST api.
 */
class APIController
{
    static #R_KEY = "-1";
    static #CLIENT_KEY = "-1";
    
    static UserSource = null;

    static onErrorReceived = null

    /**
     * R_KEY MUST be loaded before calling this method!
     * @returns Returns appropriate rest url based on current server.
     */
    static REST_URL()
    {
        if (location.hostname === 'localhost' || this.#R_KEY === R_KEYs.r_key_test)
        {
            return "https://api.test.itutoring.cz/";

        }

        if (this.#R_KEY === R_KEYs.r_key_live)
        {
            return "https://api.itutoring.cz/";
        }
    }

    static CreateVisitorSession()
    {
        const id = Date.now();
        const date = new Date();
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

        CookiesManager.SetCookie("session", id, date.toUTCString());
        this.ReadUserSource();
    }

    static GetVisitorSessionID()
    {
        //console.log(CookiesManager.GetCookie("session"));
        return CookiesManager.GetCookie("session");
    }

    static ReadUserSource()
    {
        this.UserSource = CookiesManager.GetCookie("_o");
        if (this.UserSource != null)
            return;

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has("o"))
        {
            const source = urlParams.get("o");
            if (this.UserSource == null)
            {
                const date = new Date();
                date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
                CookiesManager.SetCookie("_o", source, date.toUTCString());
                this.UserSource = source;
            }
        }
    }

    static ResolveResponse(request)
    {
        const json = JSON.parse(request.responseText);
        if (json.code ===200)
        {
            // check for redirect
            if (json.data === "redirect" && json.url !== undefined)
            {
                window.location.href =  json.url;
            }
            return (json.data);
        }
        if (json.code === 400)
        {
            console.log("API Error:");
            console.log("Error: " + json.error_message);
            console.log("ErrorCode: " + json.error_code);
            console.log("StackTrace: " + json.stack_trace);
            const error = {
                error: {
                    message: json.error_message,
                    code: json.error_code,
                    stackTrace: json.stack_trace
                }
            };
            if (APIController.onErrorReceived !== null && APIController.onErrorReceived !== undefined)
            {
                APIController.onErrorReceived(error);
            }

            return (JSON.stringify(error));
        }
    }


    /**
     * 
     * @param module "Name of API module"
     * @param method "Name of API method "
     * @param data "data must be as array - key, value pair. They'll be passed into the request"
     * @returns "Response from server"
     */
    static async Get(module, method, data)
    {
        await APIController.GetLocalRKey();
        await APIController.GetClientKey();

        return new Promise(resolve =>
        {
            const args = APIController.GetArgsFromArray(data);

            const request = new XMLHttpRequest();
            request.withCredentials = true;
            request.open("GET", APIController.REST_URL() + module + "/" + method + "?" + args, true);
            request.onreadystatechange = function ()
            {
                if (request.readyState === 4)
                {
                   resolve(APIController.ResolveResponse(request));
                }
            }

            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("r-key", APIController.#R_KEY);
            request.setRequestHeader("sites", location.hostname);
            request.setRequestHeader("key", APIController.#CLIENT_KEY);
            request.setRequestHeader("visitor-session", this.GetVisitorSessionID());
            if (this.UserSource != null)
                request.setRequestHeader("visitor-source", this.UserSource);
            request.send();
        });
    }

    /**
     *
     * @param module "Name of API module"
     * @param method "Name of API method "
     * @param data "data must be as array - key, value pair. They'll be passed into the request"
     * @param file
     * @returns "Response from server"
     */
    static async Post(module, method, data, file = null)
    {
        await APIController.GetLocalRKey();
        await APIController.GetClientKey();

        return new Promise(resolve =>
        {
            let formData = new FormData();
            if (file != null)
            {
                formData = new FormData();
                formData.append("file", file);


            }

            const args = APIController.GetArgsFromArray(data);

            const request = new XMLHttpRequest();
            request.open("POST", APIController.REST_URL() + module + "/" + method, true);

            request.onreadystatechange = function ()
            {
                if (request.readyState === 4)
                {
                    resolve(APIController.ResolveResponse(request));
                }
            }

            request.setRequestHeader("r-key", APIController.#R_KEY);
            request.setRequestHeader("sites", location.hostname);
            request.setRequestHeader("key", APIController.#CLIENT_KEY);
            request.setRequestHeader("visitor-session", this.GetVisitorSessionID());
            if (this.UserSource != null)
                request.setRequestHeader("visitor-source", this.UserSource);

            if (file != null)
            {
                console.log(formData);
                request.send(formData);
            }
            else
            {
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                request.send(args);
            }
        });
    }

    static GetArgsFromArray(args)
    {
        let argsString = "";

        if (args != null)
        {
            for (const [key, value] of Object.entries(args))
            {
                argsString += key + "=" + value + "&";
            }
        }
        return argsString;
    }

    /**
     * 
     * @returns r_key for this server
     */
    static GetLocalRKey()
    {
        return new Promise(resolve =>
        {
            if (APIController.#R_KEY !== "-1")
            {
                resolve(APIController.#R_KEY);
                return;
            }

            if (localStorage.getItem("r_key") !== null)
            {
                APIController.#R_KEY = localStorage.getItem("r_key");
                resolve(APIController.#R_KEY);
                return;
            }

            // For localhost don't use xml config, but automatically
            // return test key.
            if (location.hostname === "localhost")
            {
                APIController.#R_KEY = R_KEYs.r_key_test;
                resolve(APIController.#R_KEY);
                return;
            }
            else
            {
                fetch('/key_config.xml').then(response => response.text()).then((data) =>
                {
                    const parser = new DOMParser();
                    const rKeyXML = parser.parseFromString(data, "text/xml");
                    const rKey = rKeyXML.getElementsByTagName("key")[0].childNodes[0].nodeValue;

                    APIController.#R_KEY = rKey;
                    localStorage.setItem("r_key", APIController.#R_KEY)
                    resolve(APIController.#R_KEY);
                    
                });
            }
        });
    }

    static GetClientKey()
    {
        return new Promise(resolve =>
        {
            if (APIController.#CLIENT_KEY !== "-1")
            {
                resolve(APIController.#CLIENT_KEY);
                return;
            }

            if (localStorage.getItem("client_key") !== null)
            {
                APIController.#CLIENT_KEY = localStorage.getItem("client_key");
                resolve(APIController.#CLIENT_KEY);
                return;
            }

            let keyPath = '/client_key.xml';
            // For localhost use different xml file (to make suer we won't rewrite the server key when uploading websites)
            if (location.hostname === "localhost")
            {
                keyPath = '/local_client_key.xml'
            }

            fetch(keyPath).then(response => response.text()).then((data) =>
            {
                const parser = new DOMParser();
                const keyXML = parser.parseFromString(data, "text/xml");
                const key = keyXML.getElementsByTagName("key")[0].childNodes[0].nodeValue;

                APIController.#CLIENT_KEY = key;
                localStorage.setItem("client_key", APIController.#CLIENT_KEY)
                resolve(APIController.#CLIENT_KEY);
            });

        });
    }

    static async GetCurrentHostURl()
    {
        if (location.hostname === 'localhost')
        {
            return "http://localhost:3000";
        }
        else
        {
            var r_key = await this.GetLocalRKey();
            if (r_key === R_KEYs.r_key_test)
            {
                return "https://test.itutoring.cz";
            }
            else
            {
                return "https://itutoring.cz";
            }
        }
    }

    static IntToBool(value)
    {
        return value === 1;
    }

    static BoolToInt(value)
    {
        return value ? 1 : 0;
    }
}

export default APIController;