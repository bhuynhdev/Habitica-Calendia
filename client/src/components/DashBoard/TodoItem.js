import React from "react";

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
			<button type="button" className="btn btn__danger" onClick={() => deleteTask(id)}>
			Delete <span className="visually-hidden">{title} </span> from Dashboard
			</button>
		</div>
	</li>
	)
  	return viewingTemplate;
}