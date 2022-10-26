class APICache
{
    static Cache(key, data)
    {
        localStorage.setItem(key, data);
    }

    static Retrive(key)
    {
        return localStorage.getItem(key);
    }

    static IsCached(key)
    {
        return !(localStorage.getItem(key) === null);
    }
}

export default APICache;