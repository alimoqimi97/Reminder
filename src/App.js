import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Monitor from "./Monitor";
import ReminderMenu from "./ReminderMenu";

function App() {
  return (
    <div className="container" >
      <Monitor />

      {/* Reminder */},
      <ReminderMenu />
    </div>
  );
}

export default App;
