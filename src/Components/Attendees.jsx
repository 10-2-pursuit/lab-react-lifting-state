import Attendee from "./Attendee"
export default function Attendees({event, attendees, toggleEventAttendees, updateEventAttendance, showAttendees}) {
  return (
    <>
      <button onClick={() => toggleEventAttendees(event.id)}>
          {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>
          {showAttendees && (
            <div className="attendees">
                {attendees.map((attendee) => (
                    <Attendee event = {event} attendee={attendee} updateEventAttendance = {updateEventAttendance} />
                ))}
            </div>
          )}
    </>
  )
}
