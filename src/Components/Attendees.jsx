import React from 'react';
import Attendee from './Attendee'; // Import the Attendee component

function Attendees({ attendees, updateEventAttendance, eventId }) {
  const peopleArray = attendees
  return (
    <div className="attendees">
      {peopleArray.map((attendee) => (
        <Attendee
          key={attendee.id}
          attendee={attendee}
          updateEventAttendance={updateEventAttendance}
          eventId={eventId}
        />
      ))}
    </div>
  );
}

export default Attendees;
