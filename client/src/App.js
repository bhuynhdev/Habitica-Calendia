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
    <div className="App">
      <header className="App-header">
        <p>
          Your task manager calendar
          <img src={logo} className="App-logo" alt="React-logo" />
        </p>
      </header>
      <TodoApp tasks={DATA}/>
      <Calendar/>
    </div>
  );
}

export default App;
