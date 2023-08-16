import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees({ event, setEvents, events }) {
  const [showAttendees, setShowAttendees] = useState(false);
  const toggleEventAttendees = () => {
    setShowAttendees(!showAttendees);
  };
  return (
    <>
      <button onClick={toggleEventAttendees}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees ? (
        <div className="attendees">
          {event.people.map((attendee) => (
            <Attendee
              attendee={attendee}
              event={event}
              setEvents={setEvents}
              events={events}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
