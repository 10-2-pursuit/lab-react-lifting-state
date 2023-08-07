export default function Attendee({ event, attendee, updateEventAttendance}) {
  
  return (
    <div key={attendee.id} className="attendee">
      <p>
        <img src={attendee.avatar} alt={attendee.firstName} />
        {"   "}
        <span> {" "} {attendee.firstName} {attendee.lastName}{" "} </span>
      </p>
      <p>
        <button className="clickable" onClick={() => updateEventAttendance(event.id, attendee.id)} > Attending: {attendee.attendance ? "✅" : "❌"} </button>
      </p>
      <p>
        <span>Note:</span> {attendee.note}
      </p>
    </div>
  )
}
