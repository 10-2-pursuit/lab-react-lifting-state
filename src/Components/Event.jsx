import Attendees from "./Attendees";
import { useEffect, useState } from "react";

export default function Event({ events, setEvents}) {

    const [showAttendees, setShowAttendees] = useState({});

  function toggleEventAttendees(id) {
    const tempObj = Object.assign({}, showAttendees);
    tempObj[id] = !tempObj[id];
    setShowAttendees(tempObj);
  }

  const tempObj = {};
  events.forEach(element => {
    Object.assign(tempObj, {[`${events.id}`]:false});      
  });
  useEffect(()=>setShowAttendees(tempObj),[]); 

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
                  <button onClick={()=>toggleEventAttendees(event.id)}>
                    {!showAttendees[event.id] ? "Show Attendees" : "Hide Attendees"}
                  </button>

                  {showAttendees[event.id] ? (<Attendees attendees={ attendees } events={ events } setEvents={ setEvents } event={ event }/>) : null}
                </>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
