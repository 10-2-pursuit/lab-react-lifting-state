import { useState } from "react";
import Attendee from "./Attendee";

export default function Attendees({event, attendees,updateEventAttendance}) {
  return(
    <div className="attendees" >
      {attendees.map((attendee, index) => (
        <>
          <Attendee attendee={attendee} event={event} updateEventAttendance={updateEventAttendance}/>
          
          {/* <div key={attendee.id} className="attendee">
            <p>
              <img src={attendee.avatar} alt={attendee.firstName} />
              {"   "}
              <span>
                {" "}
                {attendee.firstName} {attendee.lastName}{" "}
              </span>
            </p>
            <p>
              <button
                className="clickable"
                onClick={() =>
                  updateEventAttendance(event.id, attendee.id)
                }
                >
                Attending:
              </button>
              <span>{attendee.attendance ? "✅" : "❌"}</span>
            </p>
            <p>
              <span>Note:</span> {attendee.note}
            </p>
          </div> */}
        </>
        ))} 
                
      </div>
  );
}
