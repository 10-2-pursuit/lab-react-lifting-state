import React from 'react';
import Attendees from './Attendees';

function Event({ event, toggleEventAttendees, updateEventAttendance }) {
  const { id, name, eventImage, eventType, organizer, showAttendees, attendees } = event;

  return (
    <li>
      <img src={eventImage} alt={name} />
      <h5>
        {name} {eventType}
      </h5>
      <br />
      <span>Organized by: {organizer} </span>
      <br />
      <button onClick={() => toggleEventAttendees(id)}>
        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
      </button>

      {showAttendees && (
        <Attendees attendees={attendees} updateEventAttendance={updateEventAttendance} eventId={id} />
      )}
    </li>
  );
}

export default Event;
