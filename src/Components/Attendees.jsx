import Attendee from "./Attendee"
export default function Attendees({attendees}) {
  return (
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <Attendee key={attendee.id} attendee={attendee} />
      ))}
    </div>
  )
}
