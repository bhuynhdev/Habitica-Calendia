import React from 'react';
import {Redirect, withRouter} from 'react-router-dom'

function AddEvent(props) {
	function handleSubmit(e) {
		e.preventDefault();
		props.history.push('/');
	}

	return (
		<form class="AddEventForm" onSubmit={handleSubmit}>
			<label htmlFor="">Task title</label>
			<input id="tasktitle" type="text"/>
			<br/>
			<label htmlFor="">Choose start time</label>
			<input type="datetime-local"/>
			<br/>
			<label htmlFor="">Choose end time</label>
			<input type="datetime-local"/>
			<br/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default withRouter(AddEvent)