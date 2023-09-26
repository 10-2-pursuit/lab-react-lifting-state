import React, { useState } from 'react';
import Event from './Components/Event'; // Import the Event component
import Attendees from './Components/Attendees'; // Import the Attendees component
import eventsData from './data'; // Import your events data here
import { v1 as generateUniqueID } from 'uuid';
import NewEventForm from './Components/NewEventForm';


function App() {
  // State to manage events
  const [events, setEvents] = useState(eventsData);

  function addEvent(newEvent) {
    setEvents([...events, newEvent]);
  }
  // Function to toggle showing/hiding attendees for a specific event
  const toggleEventAttendees = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId ? { ...event, showAttendees: !event.showAttendees } : event
      )
    );
  };

  // Function to update attendance status of a specific attendee within an event

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
      <header>
        <h1 className="color-change-5x">RSVP App</h1>
      </header>
      <main>
        <div className="new-event">
        <NewEventForm addEvent={addEvent} />
        </div>.        
        <div className="events">
          <ul>
            {events.map((event) => (
              <Event
                key={event.id}
                event={event}
                toggleEventAttendees={toggleEventAttendees}
                updateEventAttendance={updateEventAttendance}
              />
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <ul>
          <li>Contact</li>
          <li>About</li>
          <li>Legal</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
