import Attendees from "./Attendees";

export default function Event({
  event, 
  attendees,
  updateEventAttendance}) {
    
  return (
      <li className="event" key={event.id}>
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
          <Attendees 
            event={event}
            attendees={attendees} 
            updateEventAttendance={updateEventAttendance}
          />
      </li>
  );
}
