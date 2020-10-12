import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar'
// import TodoApp from './components/Todos/TodoApp'
import AddEvent from './components/AddEvent/AddEvent'
import Header from './components/Header/Header'
import DashBoard from './components/DashBoard/DashBoard'
import EventDialog from './components/EventDialog/EventDialog'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const [eventList, setEventList] = useState([])
  const [isLoaded, setReadyStatus] = useState(false);
  const [clickedEvent, setClickedEvent] = useState({extendedProps: {}});
  const [openEditForm, setOpenEditForm] = useState(false);

  let handleEventClick= ({event}) => {
    setClickedEvent(event);
    setOpenEditForm(true);
  }

  const handleClose = () => {
    setOpenEditForm(false);
  };
  
  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(eventList => setEventList(eventList))
      .then(() => setReadyStatus(true));
  }, []);

  const taskDashBoard = eventList.filter(task => task.show);
  // function addTask(title, desp, start, end) {
  //   const newTask = { id: nanoid(9), name: title, description: desp, completed: false, startTime: start, endTime: end };
  //   setTaskList([...eventList, newTask]);
  // }

  return isLoaded? (
    <Router>
      <Route path="/" exact render={props => (
        <React.Fragment>
          <div className="App-header">
            <Header />
          </div>
          <div className="App">
            <div className="Calendar">
              <Calendar tasks={eventList} onEventClick={handleEventClick}/>
            </div>
            <div className="DashBoard">
              <DashBoard tasks={taskDashBoard}/>
            </div>
            <div>
              <EventDialog open={openEditForm} onClose={handleClose} event={clickedEvent} />
            </div>            
          </div>
        </React.Fragment>
      )} />
      <Route path="/addevent" render={
        props => <AddEvent/>
      } />
      {/* <Route path="/editevent" render={
        props => {}
      } /> */}
    </Router>    
  ) : <Calendar tasks={eventList}/>;
}

export default App;
