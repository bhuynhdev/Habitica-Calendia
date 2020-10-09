import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar'
import TodoApp from './components/Todos/TodoApp'
import AddEvent from './components/AddEvent/AddEvent'
import Header from './components/Header/Header'
import DashBoard from './components/DashBoard/DashBoard'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  const DATA = [
    {
      id:'1', 
      name:'Eat',
      description:'Eat Pizza today',
      completed:false,
      startTime: '2020-10-10T13:30:00+07:00',
      endTime: '2020-10-10T14:00:00+07:00'
    },
    {
      id: '2',
      name: 'Play cards',
      descrition: 'Do some magic tricks',
      completed: false,
      startTime: '2020-10-09T14:50:00+07:00',
      endTime: '2020-10-10T08:00:00+07:00'
    }
  ];

  return (
    <Router>
      <Route path="/" exact render={props => (
        <React.Fragment>
          <div className="App-header">
            <Header />
          </div>
          <div className="App">
            <div className="Calendar">
              <Calendar tasks={DATA}/>
            </div>
            <div className="DashBoard">
              <DashBoard tasks={DATA}/>
            </div>
          </div>
        </React.Fragment>
      )} />
      <Route path="/addevent" component={AddEvent} />
    </Router>    
  );
}

export default App;
