import React from "react";
import { Link } from "wouter";
import logo from "../../logo.svg";

export default function Header() {
  return (
    <>
      <div className="text-center">
        Your task manager calendar
        <img src={logo} className="App-logo" alt="React-logo" />
      </div>
      <div className="navigation text-center">
        <Link className="Link" href="/">
          Home
        </Link>
        |
        <Link className="Link" href="/addevent">
          {" "}
          Add event
        </Link>
      </div>
    </>
  );
}
