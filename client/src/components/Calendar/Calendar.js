import React, { useState } from 'react'
import './Calendar.css'
// import EditEvent from '../EditEvent/EditEvent'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

function createEventObject(task) {
  return {
    id: task.id,
    title: task.title,
    start: task.startTime,
    end: task.endTime,
    description: task.description
  }
}

export default function Calendar(props) {
  let eventList = props.tasks.map(task => createEventObject(task))
  let handleEventClick = props.onEventClick;

  return (
    <React.Fragment>
      <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin ]}
      initialView="dayGridMonth"
      weekNumberCalculation="ISO"
      headerToolbar={{center: 'timeGridDay,timeGridWeek,dayGridMonth,listWeek',
					right:'today,prev,next'}}
    	height={'100%'}
      events = {eventList}
      eventClick = {handleEventClick}
      />
    </React.Fragment>
  	
    
  );
}