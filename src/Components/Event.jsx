import Attendees from "./Attendees";
import { useState } from "react";

export default function Event({
  event, 
  // toggleEventAttendees, 
  // showAttendees, 
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
