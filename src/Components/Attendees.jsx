import Attendee from "./Attendee"

export default function Attendees({attendees, eventId, updateEventAttendance, showAttendees}) {
  return(
    <>
    {showAttendees ? (
      <div className="attendees">
      {attendees.map((attendee, index) => (
        <Attendee key={attendee.id} attendee={attendee} eventId={eventId} updateEventAttendance={updateEventAttendance}/>
        ))};
        </div>
        ) : null}
    </>
  );
}
