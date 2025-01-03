/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


class CookiesManager
{
    static SetCookie(name, value, expiracy, force = false)
    {
        if (this.GetCookie(name) != null && !force)
            return;
        
        document.cookie = name + "=" + value + "; expires=" + expiracy + ";path=/";
    }

    static GetCookie(name)
    {
        var cookie = decodeURIComponent(document.cookie);
        var values = cookie.split(';');

        for (var i = 0; i < values.length; i++)
        {
            var c = values[i];

            while (c.charAt(0) == ' ')
            {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0)
            {
                return c.substring(name.length + 1, c.length);
            }
        }

        return null;
    }

    static RemoveCookie(name)
    {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}

export default CookiesManager;