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
