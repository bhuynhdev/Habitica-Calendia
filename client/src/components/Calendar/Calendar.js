import React, { useState } from 'react'
import './Calendar.css'
// import EditEvent from '../EditEvent/EditEvent'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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

  let handleEventClick= ({event}) => {
    setOpenEditForm(true);
  }

  const [openEditForm, setOpenEditForm] = useState(false);

  const handleClose = () => {
    setOpenEditForm(false);
  };

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
      <Dialog open={openEditForm} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  	
    
  );
}