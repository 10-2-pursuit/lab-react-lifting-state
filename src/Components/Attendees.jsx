import Attendee from "./Attendee"

export default function Attendees({attendees, updateEventAttendance, event}) {
  return(
    <div className="attendees">
    {attendees.map((attendee, index) => {
   return <Attendee event={event} attendee={attendee} updateEventAttendance={updateEventAttendance}/>
    }
  )}
  </div>
  )
}
