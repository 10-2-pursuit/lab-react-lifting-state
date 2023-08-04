import { useState } from "react";
import eventsData from "./data";
// import Attendee from "./Components/Attendee";
// import Attendees from "./Components/Attendees";
// import Event from "./Components/Event";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  function toggleEventAttendees(eventId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    event.showAttendees = !event.showAttendees;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }

  function updateEventAttendance(eventId, attendeeId) {
    const eventArray = [...events];
    const eventIndex = eventArray.findIndex((event) => eventId === event.id);
    const event = { ...eventArray[eventIndex] };
    const personIndex = event.people.findIndex(
      (person) => person.id === attendeeId
    );
    const peopleArray = [...event.people];
    peopleArray[personIndex].attendance = !peopleArray[personIndex].attendance;
    event.people = peopleArray;
    eventArray[eventIndex] = event;
    setEvents(eventArray);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="new-event">
          <NewEventForm handleAddEvent={handleAddEvent} />
        </div>
        <div className="events">
          <ul>
            {events.map((event) => {
              const { people: attendees, showAttendees } = event;

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
                      <button onClick={() => toggleEventAttendees(event.id)}>
                        {!showAttendees ? "Show Attendees" : "Hide Attendees"}
                      </button>
                      {showAttendees && (
                        <div className="attendees">
                          {attendees.map((attendee) => (
                            <div key={attendee.id} className="attendee">
                              <p>
                                <img
                                  src={attendee.avatar}
                                  alt={attendee.firstName}
                                />
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
                                  Attending: {attendee.attendance ? "✅" : "❌"}
                                </button>
                              </p>
                              <p>
                                <span>Note:</span> {attendee.note}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
