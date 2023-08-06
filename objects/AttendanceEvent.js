class AttendanceEvent
{
    Date;
    Presence;
    Note;
    ID;
    EventName;
    Subject;
    StudentName

    CreateFromJSON(json)
    {
        this.Date = json['Date'];
        this.Presence = json['Presence'];
        this.Note = json['Note'];
        this.ID = json['ID'];
        this.EventName = json['EventName'];
        this.Subject = json['Subject'];
        this.StudentName = json['StudentName'];
    }
}

export default AttendanceEvent;