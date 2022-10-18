import React, { useState } from 'react';
import AddTodo from './AddTodo';
import FilterButton from './FilterButton';
import TodoItem from './TodoItem';
import { nanoid } from "nanoid";

export default function TodoApp(props) {

	const [tasks, setTasks] = useState(props.tasks);
	const [filterMode, setFilterMode] = useState('All');
	
	function addTask(name) {
  		const newTask = { id: nanoid(9), name: name, completed: false };
  		setTasks([...tasks, newTask]);
	}

	function deleteTask(toDeleteId) {
  	const remainingTasks = tasks.filter(task => task.id !== toDeleteId);
	  setTasks(remainingTasks);
	}

	function editTask(id, newName) {
	  const editedTaskList = tasks.map(task => {
	  // if this task has the same ID as the edited task
	    if (id === task.id) {
	      //
	      return {...task, name: newName}
	    }
	    return task;
	  });
	  setTasks(editedTaskList);
	}

	function toggleTaskComplete(id) {
	  const updatedTasks = tasks.map(currentTask => {
	    // if this task has the same ID as the edited task
	    if (id === currentTask.id) {
	      // use object spread to make a new object
	      // whose `completed` prop has been inverted
	      return {...currentTask, completed: !currentTask.completed}
	    }
	    return currentTask;
	  });
	  setTasks(updatedTasks);
	}

	const FILTER_MAP = {
	  All: () => true,
	  Active: task => !task.completed,
	  Completed: task => task.completed
	};
	const FILTER_MODES = Object.keys(FILTER_MAP);

	// Render the taskList UI based on what filter is chosen
	// Chose approproproate filter function based on current filter mode
	const taskList = tasks.filter(FILTER_MAP[filterMode])
	// Render the filtered list into TodoItem components
	.map(task => (
		<TodoItem id={task.id}
							key={task.id}
							name={task.name}
							completed={task.completed}
							toggleTaskComplete={toggleTaskComplete}
							deleteTask={deleteTask}
							editTask={editTask}
		/>
	));

	const filterToolbar = (
		// Wrap the toolbar in a div for styling
		<div className="filters btn-group stack-exception">
		{/*Create a button for each mode in FILTER_MODES*/}
		{FILTER_MODES.map(mode => (
			<FilterButton key={mode}
										name={mode}
										setFilterMode={setFilterMode}
										isPressed={mode === filterMode}
			/>)
		)}
		</div>
	);

	const tasksNoun = taskList.length > 1 ? 'tasks' : 'task';
	const headingText = `${taskList.length} ${tasksNoun} ${filterMode.toLowerCase()}`;

	return (
    <div className="todoapp stack-large">
      <AddTodo addTask={addTask}/>
      {filterToolbar}
      <div className="TodoList">
				<h2 id="list-heading">{headingText}</h2>
				<ul className="todo-list stack-large stack-exception"	aria-labelledby="list-heading">
					{taskList}
      	</ul>
      </div>
	  </div>
  );
}