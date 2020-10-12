import React from 'react';
import {withRouter} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';


function processDate(date) {
  let dateStr = date.toDateString();
  let hour = date.getHours();
	if (hour < 10) hour = "0" + hour;
  let minute = date.getMinutes();
	if (minute < 10) minute = "0" + minute;
  return dateStr + " - " + hour + ":" + minute;
}

function EventDialog(props) {
  let open = props.open;
  let handleClose = props.onClose;
  let currentEvent = props.event;
  let title = currentEvent.title;
  let id = currentEvent.id;
  let description = currentEvent.extendedProps.description;
  let start = new Date(currentEvent.startStr);
  let end = new Date(currentEvent.endStr);

  function handleEdit(id) {
    let editURL = '/api/event/' + id + '/edit' 
    props.history.push(editURL);
  };

  function handleDelete(id) {
    let deleteURL = '/api/event/' + id + '/delete' 
    fetch(deleteURL, { method: 'POST' })
      .then(() => {
        handleClose()
        window.location.reload();
      })
      .catch(err => console.log(err))
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      {/* <DialogTitle id="form-dialog-title"></DialogTitle> */}
      <DialogContent component="div">
        
        <Typography variant="h3" component="span">{title}</Typography>
        <Box>
          <Typography variant="h4" component="span">From</Typography>
        </Box>
        <Typography variant="h5" component="span">{processDate(start)}</Typography>
        <br/>
        <Typography variant="h4" component="span">To</Typography>
        <br/>
        <Typography variant="h5" component="span">{processDate(end)}</Typography>
        <br/>
        <Typography variant="h4" component="span">Description:</Typography>
        <br/>
        <Typography variant="h5" component="span">{description}</Typography>        
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={() => handleEdit(id)} color="primary">
          Edit event
        </Button> */}
        <Button onClick={() => handleDelete(id)} color="primary">
          Delete event
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default withRouter(EventDialog);