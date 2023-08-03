import Attendee from "./Attendee";

export default function Attendees({ attendees, events, setEvents, event }) {
  return(
    <div className="attendees">
      {attendees.map((attendee, index) => (
        <>
          <Attendee attendee={ attendee } index={ index } events={ events } setEvents={ setEvents } event={ event }/>
        </>
      ))}
    </div>
  );
}
