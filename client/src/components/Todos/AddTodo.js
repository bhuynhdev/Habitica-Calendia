import React, { useState } from 'react'

export default function AddTodo(props) {
	const [inputField, setInputField] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(inputField);
    setInputField("")
  }

  let handleChange = (e) => {
    setInputField(e.target.value)
  }

  return (
		<form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={inputField}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
	);
}