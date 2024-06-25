/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


class APICache
{
    static CacheStorage = {}

    static Cache(key, data)
    {
        this.CacheStorage[key] = data;
    }

    static Retrive(key)
    {
        if (!this.IsCached(key))
            return null;
        return this.CacheStorage[key];
    }

    static IsCached(key)
    {
        return this.CacheStorage[key] !== undefined;
    }
}

export default APICache;