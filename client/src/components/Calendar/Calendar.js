import React from 'react'
import './Calendar.css'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';


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

  return (
  	<FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
      initialView="dayGridMonth"
      weekNumberCalculation="ISO"
      headerToolbar={{center: 'timeGridDay,timeGridWeek,dayGridMonth,listWeek',
					right:'today,prev,next'}}
    	height={'100%'}
      events = {eventList}
      />
  );
}