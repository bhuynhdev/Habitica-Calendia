import React from 'react';
import {withRouter} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

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
    <Modal show={open} onHide={handleClose}>
      <Modal.Title>
        <Container>{title}</Container>
      </Modal.Title>
      <Modal.Body>
        <Table>
          <tbody>
            <tr>
              <td><i className="fa fa-calendar" aria-hidden="true"></i></td>
              <td>
                From:{' '}
                {processDate(start)}
                <br/>
                To:{' '}
                {processDate(end)}
              </td>
            </tr>
            <tr>
              <td><i class="fa fa-comments" aria-hidden="true"></i></td>
              <td>{description}</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={() => handleEdit(id)} color="primary">
          Edit event
        </Button> */}
        <Button variant="outline-danger" onClick={() => handleDelete(id)}>
          Delete event
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default withRouter(EventDialog);