import React, { useState } from "react";
import "../stylesheets/CalendarCell.css";

// define CalendarCell component
// takes 'day','date','isHoliday' as props 
export default function CalendarCell({ day, date, isHoliday }) {
    return (
        // if isHoliday is true, we apply 
        // 'holiday' class to the calendar cell
        <div className={`calendar-cell ${isHoliday ? 'holiday' : ''}`}>
            {/* render day & date */}
            <p className="day">{day}</p>
            <p className="date">{date}</p>
        </div>
    );
};