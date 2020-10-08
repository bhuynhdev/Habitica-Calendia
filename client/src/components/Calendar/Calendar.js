import React from 'react'
import './Calendar.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';

export default class Calendar extends React.Component {
  render() {
    return (
    	<div className="Calendar">
	    	<FullCalendar
	        plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
	        initialView="dayGridMonth"
	        headerToolbar={{center: 'timeGridDay,timeGridWeek,dayGridMonth,listWeek',
							right:'today,prev,next'}}
	      	/>
    	</div>      
    );
  }
}