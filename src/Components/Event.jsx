import Attendees from "./Attendees";

export default function Event({ events, setEvents, showAttendees, setShowAttendees, toggleEventAttendees }) {
  return(
    <div className="events">
      <ul>
        {events.map((event) => {
          const { people: attendees } = event;

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
                <>
                  <button onClick={toggleEventAttendees}>
                    {!showAttendees ? "Show Attendees" : "Hide Attendees"}
                  </button>

                  {showAttendees ? ( <Attendees attandees={ attendees } events={ events } setEvents={ setEvents } event={ event }/> ) : null}
                </>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
