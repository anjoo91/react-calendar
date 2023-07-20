import React, { useState } from 'react';
import days, { dates }from '../days';
import './App.css'

export default function App() {
  
  return (
    <div className="app">
    <h1>Calendar</h1>
    <Calendar days={days} dates={dates}/> {/* render calendar component w. days & dates props */}
    </div>
  );
};