import Attendees from "./Attendees";
export default function Event({ event, updateEventAttendance }) {
  return (
    <>
      <li key={event.id}>
        <img src={event.eventImage} alt={event.name} />
        <h5>
          {event.name} {event.eventType}
        </h5>
        <br />
        <span>Organized by: {event.organizer} </span>
        <br />
        <Attendees
          event={event}
          updateEventAttendance={updateEventAttendance}
        />
      </li>
    </>
  );
}
