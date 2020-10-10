import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar'
// import TodoApp from './components/Todos/TodoApp'
import AddEvent from './components/AddEvent/AddEvent'
import Header from './components/Header/Header'
import DashBoard from './components/DashBoard/DashBoard'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  const [taskList, setTaskList] = useState([])
  const [isLoaded, setReadyStatus] = useState(false);
  

  useEffect(() => {
    fetch('/api/events')
      .then(res => res.json())
      .then(eventList => setTaskList(eventList))
      .then(() => setReadyStatus(true));
  }, []);

  const taskDashBoard = taskList.filter(task => task.show);
  // function addTask(title, desp, start, end) {
  //   const newTask = { id: nanoid(9), name: title, description: desp, completed: false, startTime: start, endTime: end };
  //   setTaskList([...taskList, newTask]);
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
              <Calendar tasks={taskList}/>
            </div>
            <div className="DashBoard">
              <DashBoard tasks={taskDashBoard}/>
            </div>
          </div>
        </React.Fragment>
      )} />
      <Route path="/addevent" render={
        props => <AddEvent/>
      } />
    </Router>    
  ) : <Calendar tasks={taskList}/>;
}

export default App;
