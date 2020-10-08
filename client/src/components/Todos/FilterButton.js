import React from 'react';
import './Todos.css'

export default function FilterToolBar(props) {
	return (
    <button type="button"
            className="btn toggle-btn"
            aria-pressed={props.isPressed}
            onClick={() => props.setFilterMode(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
	);
}