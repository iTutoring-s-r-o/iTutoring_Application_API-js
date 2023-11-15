
class iEvent
{
    /**
     * Event ID - cant be changed
     */
    ID;

    /**
     * In case of videoconference this code can be used for authentication to connect, when you are not on the guest list.
     */
    PassCode;

    /**
     * In case of video conference.
     * 
     * - !Must be positive eger!
     */
    RoomID = 0;
    /** 
     * Email / Name of user who is responsible for this event 
     * 
     * Can be teacher in case of leesons when the event is generated automaticly
     */
    Organizer;

    /**
     * Optional:  of invited people (their emails).
     * 
     * If someones not in this list, still can connect with PassCode.
     */
    Guests;

    /**
     * Anyone can join
     */
    Open;

    /**
     * If true organizer will have to manually allow the user when joining to be let in.
     */
    RequestAccess;

    /**
     * 0 - Lesson; 1 - General meeting
     */
    Type;

    Name;
    Description;

    /**
     * Optional: define which teached subject on this event.
     */
    Subject;

    OneTime;
    /**
     * Date and time when this event takes place.
     * 
     * If is recursive, only time will be taken.
     */
    DateAndTime;
    /**
     * Day in week this event takes place. In case of recursive events
     * 
     * (starting with 1 up to 7)
     */
    DayInWeekIndex;

    /**
     * How many times this event should repeat. If left -1 it will be forever ... forever young I wanna be....
     * 
     * Just in case of recursive events
     */
    Recursivity;

    IsVideoConference;

    ReadOnly;

    State;
    Place;
    Class;
    Students;
    Item;


    CreateFromJSON(json)
    {
        this.ID = json['ID'];
        this.PassCode = json['PassCode'];
        this.RoomID = json['RoomID'];
        this.Organizer = json['Organizer'];
        this.Guests = json['Guests'];
        this.Open = json['Open'];
        this.RequestAccess = json['RequestAccess'];
        this.Type = json['Type'];
        this.Name = json['Name'];
        this.Description = json['Description'];
        this.Subject = json['Subject'];
        this.OneTime = json['OneTime'];
        this.DateAndTime = json['DateAndTime'];
        this.DayInWeekIndex = json['DayInWeekIndex'];
        this.Recursivity = json['Recursivity'];
        this.IsVideoConference = json['IsVideoConference'];
        this.ReadOnly = json['ReadOnly'];
        this.State = json['State'];
        this.Class = json['Class'];
        this.Place = json['Place'];
        this.Students = json['Students'];
        this.Item = json['Item'];
    }
}

export default iEvent;