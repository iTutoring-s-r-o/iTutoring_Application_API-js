/*
 * Copyright (C) 2024 iTutoring s.r.o.
 * All rights reserved.
 *
 
 *
 */


/**
 * @deprecated do not use
 */
class Course 
{
    Name;
    NameRaw;
    School;
    Price;
    PriceBeforeSale = -1;
    IsSaled = false;
    CreditPrice;
    ID;
    Day;
    /**
     * as string in hh:mm
     */
    Time;
    Length;
    /**
     * Array of lesson dates as dd/mm/YYYY
     */
    Lessons;
    Capacity;
    Item;
    Subject;
}

export default Course;
