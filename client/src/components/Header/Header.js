import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../logo.svg'

export default function Header() {
	return (
		<React.Fragment>
			<div>
		    Your task manager calendar
		    <img src={logo} className="App-logo" alt="React-logo" />
		  </div>
		  <div className="navigation">
		    <Link className="Link" to="/">Home</Link>{' '}|{' '}
			<Link className="Link" to="/addevent"> Add event</Link>
		  </div>
	  </React.Fragment>
	)
}