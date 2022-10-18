import React from "react";
import "./AddEvent.css";
import dayjs from "dayjs";

function AddEvent(props) {
  // Default values for Date and Time input fields
  let now = dayjs(); // Get time of Now
  let anHourFromNow = now.add(1, "hour");

  let timeZone = now.format("Z");

  let startTime = now.format("HH:mm");
  let endTime = anHourFromNow.format("HH:mm");

  let startDay = now.format("YYYY-MM-DD");
  let endDay = anHourFromNow.format("YYYY-MM-DD");

  return (
    <div className="AddEventDiv">
      <form className="AddEventForm" method="POST" action="/api/event/create">
        <label htmlFor="tasktitle">Task title</label>
        <input id="tasktitle" name="title" type="text" placeholder="No title" />

        <label htmlFor="tasktitle">Description</label>
        <input id="taskdesp" name="desp" type="text" placeholder="No title" />

        <label htmlFor="">Choose start date</label>
        <input id="datestart" name="datestart" type="date" defaultValue={startDay} />

        <label htmlFor="endtime">Choose end date</label>
        <input id="dateend" name="dateend" type="date" defaultValue={endDay} />

        <label htmlFor="">Start Time</label>
        <input id="timestart" name="timestart" type="time" defaultValue={startTime} />

        <label htmlFor="">End Time</label>
        <input id="timeend" name="timeend" type="time" defaultValue={endTime} />

        {/* Send time zone */}
        <input type="hidden" name="timeZone" value={timeZone} />

        <button type="submit" className="AddEventSubmit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
