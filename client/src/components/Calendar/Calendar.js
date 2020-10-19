import React from 'react'
import './Calendar.css'
// import EditEvent from '../EditEvent/EditEvent'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc)

function createEventObject(task) {
  let start = dayjs.utc(task.startTime).local().format();
  let end = dayjs.utc(task.endTime).local().format();
  return {
    id: task.id,
    title: task.title,
    start: start,
    end: end,
    description: task.description
  }
}

export default function Calendar(props) {
  let eventList = props.tasks.map(task => createEventObject(task))
  let handleEventClick = props.onEventClick;

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, bootstrapPlugin ]}
      themeSystem='bootstrap'
      initialView="dayGridMonth"
      weekNumberCalculation="ISO"
      headerToolbar={{center: 'timeGridDay,timeGridWeek,dayGridMonth,listWeek',
					right:'today,prev,next'}}
    	height={'100%'}
      events = {eventList}
      eventClick = {handleEventClick}
    />
  	
    
  );
}