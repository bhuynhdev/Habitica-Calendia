import React, { useState } from 'react';
import TodoItem from './TodoItem'
import FilterButton from './FilterButton'

export default function DashBoard(props) {

	const [tasks, setTasks] = useState(props.tasks);
	const [filterMode, setFilterMode] = useState('All');
	const FILTER_MAP = {
	  All: () => true,
	  Active: task => !task.completed,
	  Completed: task => task.completed
	};
	const FILTER_MODES = Object.keys(FILTER_MAP);

	function deleteTask(toDeleteId) {
  	const remainingTasks = tasks.filter(task => task.id !== toDeleteId);
	  setTasks(remainingTasks);
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


	const taskList = tasks.filter(FILTER_MAP[filterMode])
	// Render the filtered list into TodoItem components
	.map(task => (
		<TodoItem id={task.id}
							key={task.id}
							name={task.name}
							description={task.description}
							completed={task.completed}
							toggleTaskComplete={toggleTaskComplete}
							deleteTask={deleteTask}
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
		<div className="stack-large"> 
			{filterToolbar}
			<div className="TodoList">
				<h2 id="list-heading">{headingText}</h2>
				<ul className="todo-list stack-large stack-exception"	aria-labelledby="list-heading">
					{taskList}
      	</ul>
      </div>
		</div>
	)
}