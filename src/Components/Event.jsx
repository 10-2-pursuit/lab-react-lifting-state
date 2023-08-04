import Attendees from "./Attendees";

export default function Event({ events, updateEvents, updateEventAttendance }) {
  const toggleEventAttendees = (id) => {
    const updatedEvents = events.map((event) => {
      if (event.id === id) {
        return { ...event, showAttendees: !event.showAttendees };
      }
      return event;
    });
    updateEvents(updatedEvents);
  };

  return (
    <div className="events">
      <ul>
        {events.map((event) => {

          return (
            <li key={event.id}>
              <img src={event.eventImage} alt={event.name} />
              <h5>
                {event.name} {event.eventType}
              </h5>
              <br />
              <span>Organized by: {event.organizer} </span>
              <br />
              <button onClick={() => toggleEventAttendees(event.id)}>
                {!event.showAttendees ? "Show Attendees" : "Hide Attendees"}
              </button>
              {event.showAttendees && (
                <Attendees
                  attendees={event.people}
                  updateEventAttendance={updateEventAttendance}
                  showAttendees={event.showAttendees}
                  eventId={event.id}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
