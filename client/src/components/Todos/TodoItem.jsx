import React, { useState } from "react";
import { useRef, useEffect } from 'react'; //Improve accesiblity by manipulating focus indicator

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function TodoItem(props) {
  	var name = props.name;
  	let completed = props.completed;
  	let id = props.id;
  	let toggleTaskComplete = props.toggleTaskComplete;
  	let deleteTask = props.deleteTask;
  	let editTask = props.editTask;

  	// Depend on the isEditing state, we will present different UI
  	// used for editing task or only viewing the task
  	const [isEditing, setEditing] = useState(false);

  	// Whenever there's a form, there should be a state to control the input field
  	// This state is used for form is in the editingTemplete
  	const [newNameInputField, setNewNameInput] = useState('');

  	// References for the editField and editButton in editingTemplate,
  	// allowing us to focus these exact elements in appropriate situations
  	const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
    const wasEditing = usePrevious(isEditing);
		// Side effect: After rendering the element, focus them following the logic below
		useEffect(() => {
			// Focus on Edit Field if switch from viewing to editing
		  if (!wasEditing && isEditing) {
		    editFieldRef.current.focus();
		  }
		  // Focus on Edit Button if switch from editing to viewing
		  if (wasEditing && !isEditing) {
		    editButtonRef.current.focus();
		  }
		}, [wasEditing, isEditing]);


  	let handleChange = (e) => {
  		setNewNameInput(e.target.value);
  	}

  	let handleSubmit = (e) => {
  		e.preventDefault();
  		editTask(id, newNameInputField);
  		setNewNameInput("");
  		setEditing(false);
  	}

  	const editingTemplate = (
  		<li className="todo">
			  <form className="stack-small" onSubmit={handleSubmit}>
			    <div className="form-group">
			      <label className="todo-label" htmlFor={id}>New name for {name}</label>
			      <input id={id} className="todo-text" type="text" onChange={handleChange} ref={editFieldRef}/>
			    </div>
			    <div className="btn-group">
			      <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
			        Cancel
			        <span className="visually-hidden">renaming {name}</span>
			      </button>
			      <button type="submit" className="btn btn__primary todo-edit">
			        Save
			        <span className="visually-hidden">new name for {name}</span>
			      </button>
			    </div>
		  	</form>
		  </li>
		);

		const viewingTemplate = (
			<li className="todo stack-small">
	      <div className="c-cb">
	        <input id={id} type="checkbox" defaultChecked={completed} onChange={() => toggleTaskComplete(id)}/>
	        <label className="todo-label" htmlFor={id}>
	        	<span className={completed? 'done':''}>{name}</span>
	        </label>
	      </div>
	      {/*Edit and delete button for each task*/}
				<div className="btn-group">
		      <button type="button" className="btn" onClick={() => setEditing(true)} ref={editButtonRef}>
		        Edit <span className="visually-hidden">{name}</span>
		      </button>

		      <button type="button" className="btn btn__danger" onClick={() => deleteTask(id)}>
		        Delete <span className="visually-hidden">{name} </span>
		      </button>
		    </div>
	    </li>
		)
  	return (isEditing)? editingTemplate : viewingTemplate;
}