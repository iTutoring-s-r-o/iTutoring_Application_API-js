class AttendanceEvent
{
    Date;
    Presence;
    Note;
    ID;
    EventName;
    Subject

    CreateFromJSON(json)
    {
        this.Date = json['Date'];
        this.Presence = json['Presence'];
        this.Note = json['Note'];
        this.ID = json['ID'];
        this.EventName = json['EventName'];
        this.Subject = json['Subject'];
    }
}

export default AttendanceEvent;