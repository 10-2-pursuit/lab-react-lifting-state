import { useState } from "react";
import eventsData from "./data";
import { v1 as generateUniqueID } from "uuid";
import Header from "./Components/Header";
import NewEventForm from "./Components/NewEventForm";
import Footer from "./Components/Footer";
import Event from "./Components/Event";
// import Attendees from "./Attendees";
// import Event from "./Components/Event";
// import Footer from "./Components/Footer";
// import Header from "./Components/Header";
// import NewEventForm from "./Components/NewEventForm";

function App() {
  const [events, setEvents] = useState(eventsData);
  
  const [showAttendees, setShowAttendees] = useState(false);
  
  const [selectOption, setSelectOption] = useState("");

  const [newEvent, setNewEvent] = useState({
    id: "",
    eventType: "",
    name: "",
    organizer: "",
    eventImage: "",
    date: "",
    people: [],
  });

  function handleAddEvent(event) {
    setEvents([event, ...events]);
  }

  function toggleEventAttendees() {
    setShowAttendees(!showAttendees);
  }

  return (
    <div className="App">
      <>
        <Header />
      </>
      <main>
        <div className="new-event">
          <>
            <NewEventForm handleAddEvent={ handleAddEvent } newEvent={ newEvent } setNewEvent={ setNewEvent } generateUniqueID={ generateUniqueID } selectOption={ selectOption } setSelectOption={ setSelectOption }/>
          </>
        </div>
        <Event events={ events } setEvents={ setEvents } showAttendees={ showAttendees } toggleEventAttendees={ toggleEventAttendees }/>
      </main>
      <>
        <Footer />
      </>
    </div>
  );
}

export default App;
