import React from "react";
import Button from 'react-bootstrap/Button';

export default function TodoItem(props) {
  	var title = props.title;
  	let desp = props.description;
  	let completed = props.completed;
	let id = props.id;
  	let toggleTaskComplete = props.toggleTaskComplete;
  	let deleteTask = props.deleteTask;

	const viewingTemplate = (
		<li className="todo stack-small">
		<div className="c-cb">
		<input id={id} type="checkbox" defaultChecked={completed} onChange={() => toggleTaskComplete(id)}/>
		<label className="todo-label" htmlFor={id}>
			<span className={completed? 'done':''}>{title}</span>
		</label>
		</div>
		{/*Description*/}
		<div className="desp">
		<span style={{fontSize: '0.85em'}}>{desp}</span>
		</div>
		{/*Delete button*/}
			<div className="btn-group">
			<Button variant="danger" onClick={() => deleteTask(id)}>
			Remove <span className="visually-hidden">{title} </span> from Dashboard
			</Button>
		</div>
	</li>
	)
  	return viewingTemplate;
}