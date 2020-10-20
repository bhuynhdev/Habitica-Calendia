[banner]: ./readme_assets/timeblock-banner-canva-cropped.png "Timeblocker Calendar Todolist"
[mainUI]: ./readme_assets/screenshot-mainui.png "Main interface"
[addEvent]: ./readme_assets/screenshot-addevent.png "Add event form"
[listView]: ./readme_assets/screenshot-listview.png "List view"


# Timeblocker Calendar - Todolist
A web application integrating a Calendar and a Todolist to facilitate the use of the [time-blocking](https://todoist.com/productivity-methods/time-blocking) method to increase life productivity.

## [Beta demo](timeblock-calendar.herokuapp.com)

![App intro banner][banner]

## Table of contents
* [Features](#Features)
* [How to use](#Usage)
* [Technologies](#Techonologies)
* [TODO / Future features](#TODO-/-Future-features)
* [Screenshots](#Screenshot)

## Features

* Interactive calendar using **React** and **FullCalendar**, with different view options (list, month, week, day) and interactive event clicking

* Side dashboard showing task lists, with filter options for *All*, *Active*, or *Uncompleted* tasks. Events created on the calendar will be automatically transfered into todo tasks.

* Connection to **MongoDB Atlas** database through **Mongoose** package to save, update, and populate user's tasks and events

* Backend built with **NodeJs** and **Express** to control routing and interact with MongoDB through models


## Usage

### Create a time block
Add a new task/event block by clicking the "Add event" link at the top. Then, provide a title, description, start time, and end time for the time block.

At the moment, only single-occurence events are supported

### Delete a time block
Delete a task/event block my clicking on the specific event on the calendar, and choose "Delete event" in the popup that appears. Deleted events also disappear form the task dashboard

### The task dashboard
The task dashboard displays a list of all tasks created and let you filter by *All*, *Active*, or *Completed* tasks by clicking on the specific option. Check/uncheck task completion status by clicking on the checkbox next to the task's name.

### Remove from Dashboard
The "Remove from Dashboard" button will remove a task from the dashboard PERMANENTLY, though it will not delete the event from the calendar. This option aims to help you decluster tasks that are already completeted, or just miscellaneous tasks that you simply don't need to be on the dashboard.

### The score system
The score indicator lies at the bottom at the task list. Score increases by 10 for every task that is completed, and vice versa. Therefore, the more tasks you do and the better you plan your days, the higher the score you will achieve.


## Technologies

* [ReactJs 16.14](https://reactjs.org/)

* [Bootstrap 4.5 / React Bootstrap 1.3](https://react-bootstrap.netlify.app/)

* [FullCalendar 5.3](https://fullcalendar.io/)

* [NodeJs 12.16](https://nodejs.org/en/)

* [Express 4.16](https://expressjs.com/)

* [Mongoose 5.10](https://mongoosejs.com/)

## TODO / Future features

* Implement an authentication system, allowing different users to login/resgister and control their own calendars.

* Create an accomplishment system to incentivize users to stick to their tasks/habits and achieve greater scores

* Add event drag-and-drop and dynamic event resizing functionality

* Add event coloring feature

* Add options to create recurring events

* Add option to integrate with **Habitica API** for even greater task completion incentive

## Screenshots
Main User Interface - default month view
![Main interface screenshot][mainUI]

List view
![List view screenshot][listView]

Add Event form
![Add event form screenshot][addEVent]