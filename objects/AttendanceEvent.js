class AttendanceEvent
{
    Date;
    Presence;
    Note;
    ID;
    EventName;
    Subject;
    StudentName;
    EventDescription;
    Class;
    Place;
    Recursivity

    CreateFromJSON(json)
    {
        this.Date = json['Date'];
        this.Presence = json['Presence'];
        this.Note = json['Note'];
        this.ID = json['ID'];
        this.EventName = json['EventName'];
        this.Subject = json['Subject'];
        this.StudentName = json['StudentName'];
        this.EventDescription = json['EventDescription'];
        this.Class = json['Class'];
        this.Place = json['Place'];
        this.Recursivity = json['Recursivity'];
    }
}

export default AttendanceEvent;