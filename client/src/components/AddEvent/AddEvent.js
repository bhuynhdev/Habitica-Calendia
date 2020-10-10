import React from 'react';
import './AddEvent.css'
import { withRouter } from 'react-router-dom';


function AddEvent(props) {
	
	// Default values for Date and Time input fields
	let date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let hour = date.getHours();
	let oneMoreHour = hour + 1;
	let minute = date.getMinutes();

	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;
	if (hour < 10) hour = "0" + hour;
	if (oneMoreHour < 10) oneMoreHour = "0" + oneMoreHour;
	if (minute < 10) minute = "0" + minute;

	var today = year + "-" + month + "-" + day;
	var now = hour + ":" + minute;
	var anHourFromNow = oneMoreHour + ":" + minute;

	return (
		<div className="AddEventDiv">
			<form className="AddEventForm" method="POST" action="/api/event/create">
				<label htmlFor="tasktitle">Task title</label>
				<input id="tasktitle" name="title" type="text" placeholder="No title"/>

				<label htmlFor="tasktitle">Description</label>
				<input id="taskdesp" name="desp" type="text" placeholder="No title"/>

				<label htmlFor="">Choose start date</label>
				<input id="datestart" name="datestart" type="date" defaultValue={today}/>

				<label htmlFor="endtime">Choose end date</label>
				<input id="dateend" name="dateend" type="date" defaultValue={today}/>

				<label htmlFor="">Start Time</label>
				<input id="timestart" name="timestart" type="time" defaultValue={now}/>
				
				<label htmlFor="">End Time</label>
				<input id="timeend" name="timeend" type="time" defaultValue={anHourFromNow}/>

				<button type="submit" className="AddEventSubmit">Submit</button>
			</form>
		</div>
	)
}

export default withRouter(AddEvent);