import CookiesManager from "../CookiesManager";
import { R_KEYs } from "../Enums";

/**
 * Main class for comunicating with our backend REST api.
 */
class APIController
{
    static #R_KEY = "-1";
    static #CLIENT_KEY = "-1";

    /**
     * 
     * @returns Returns apropriate rest url based on current server.
     */
    static REST_URL()
    {
        if (location.hostname == 'localhost')
        {
            return "https://itutoring.9e.cz/server/php/API/";
            
        }
        else
        {
            return "server/php/API/";
        }
    }

    static CreateVisitorSession()
    {
        var id = Date.now();
        var date = new Date();
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

        CookiesManager.SetCookie("session", id, date.toUTCString());
    }

    static GetVisitorSessionID()
    {
        console.log(CookiesManager.GetCookie("session"));
        return CookiesManager.GetCookie("session");
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
            var args = APIController.GetArgsFromArray(data);

            var request = new XMLHttpRequest();
            request.withCredentials = true;
            request.open("GET", APIController.REST_URL() + module + "/" + method + "?" + args, true);
            request.onreadystatechange = function ()
            {
                if (request.readyState == 4)
                {
                    resolve(request.responseText);
                }
            }

            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("r-key", APIController.#R_KEY);
            request.setRequestHeader("sites", location.hostname);
            request.setRequestHeader("key", APIController.#CLIENT_KEY);
            request.setRequestHeader("visitor-session", this.GetVisitorSessionID());
            request.send();
        });
    }

    /**
     * 
     * @param module "Name of API module"
     * @param method "Name of API method "
     * @param data "data must be as array - key, value pair. They'll be passed into the request"
     * @returns "Response from server"
     */
    static async Post(module, method, data)
    {
        await APIController.GetLocalRKey();
        await APIController.GetClientKey();

        return new Promise(resolve =>
        {
            var args = APIController.GetArgsFromArray(data);

            var request = new XMLHttpRequest();
            request.open("POST", APIController.REST_URL() + module + "/" + method, true);

            request.onreadystatechange = function ()
            {
                if (request.readyState == 4)
                {
                    resolve(request.responseText);
                }
            }

            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.setRequestHeader("r-key", APIController.#R_KEY);
            request.setRequestHeader("sites", location.hostname);
            request.setRequestHeader("key", APIController.#CLIENT_KEY);
            request.setRequestHeader("visitor-session", this.GetVisitorSessionID());
            request.send(args);
        });
    }

    static GetArgsFromArray(args)
    {
        var argsString = "";

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
            if (APIController.#R_KEY != "-1")
            {
                resolve(APIController.#R_KEY);
            }

            // For localhost don't use xml config, but automaticly
            // return test key.
            if (location.hostname === "localhost")
            {
                APIController.#R_KEY = R_KEYs.r_key_test;
                resolve(APIController.#R_KEY);
            }
            else
            {
                fetch('/key_config.xml').then(response => response.text()).then((data) =>
                {
                    var parser = new DOMParser();
                    var rKeyXML = parser.parseFromString(data, "text/xml");
                    var rKey = rKeyXML.getElementsByTagName("key")[0].childNodes[0].nodeValue;

                    APIController.#R_KEY = rKey;
                    resolve(APIController.#R_KEY);
                });
            }
        });
    }

    static GetClientKey()
    {
        return new Promise(resolve =>
            {
                if (APIController.#CLIENT_KEY != "-1")
                {
                    resolve(APIController.#CLIENT_KEY);
                }
    
                // For localhost don't use xml config, but automaticly
                // return test key.
                if (location.hostname === "localhost")
                {
                    APIController.#CLIENT_KEY = "r5u8x/A?D(G+KbPeShVmYp3s6v9y$B&E";
                    resolve(APIController.#R_KEY);
                }
                else
                {
                    fetch('/client_key.xml').then(response => response.text()).then((data) =>
                    {
                        var parser = new DOMParser();
                        var keyXML = parser.parseFromString(data, "text/xml");
                        var key = keyXML.getElementsByTagName("key")[0].childNodes[0].nodeValue;
    
                        APIController.#CLIENT_KEY = key;
                        resolve(APIController.#CLIENT_KEY);
                    });
                }
            });
    }

    static async GetCurrentHostURl()
    {
        if (location.hostname == 'localhost')
        {
            return "http://localhost:3000";
        }
        else
        {
            var r_key = await this.GetLocalRKey();
            if (r_key == R_KEYs.r_key_test)
            {
                return "https://itutoring.9e.cz";
            }
            else
            {
                return "https://itutoring.cz";
            }
        }
    }

    static IntToBool(value)
    {
        return value == 1 ? true : false;
    }

    static BoolToInt(value)
    {
        return value ? 1 : 0;
    }
}

export default APIController;