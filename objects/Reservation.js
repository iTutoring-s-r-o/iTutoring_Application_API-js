/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


/**
 * @deprecated do not use
 
 */
class Reservation
{
    Date;
    StartTime;
    Subject;
    TeacherId;
    Note;
    FirstName;
    LastName;
    Email;
    ID;
    Phone;

    IsValid()
    {
        if (this.Date == null       ||
            this.StartTime == null  ||
            this.Subject == null    ||
            this.Note == null       ||
            this.FirstName == null  ||
            this.LastName == null   ||
            this.Phone == null   ||
            this.Email == null)
                return false;

        return true;
    }
}

export default Reservation;