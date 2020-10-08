import React from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar'
import TodoApp from './components/Todos/TodoApp'
import logo from './logo.svg'

function App() {
  const DATA = [
    {id:'1', name:'Sleep', completed:false}
  ];
  return (
    <React.Fragment>
      <header className="App-header">
        <p>
          Your task manager calendar
          <img src={logo} className="App-logo" alt="React-logo" />
        </p>
      </header>
      <div className="App">
        <TodoApp tasks={DATA} className='TodoApp'/>
        <Calendar className='Calendar'/>
      </div>
    </React.Fragment>
    
  );
}

export default App;
