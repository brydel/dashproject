"use client";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState(Views.WORK_WEEK);

  const onViewChange = (nextView) => {
    setView(nextView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      style={{ height: "90%" }}
      onView={onViewChange}
      min={new Date(2025, 0, 11, 7, 0, 0)} // Début des heures visibles
      max={new Date(2025, 0, 11, 18, 0, 0)} // Fin des heures visibles
      defaultDate={new Date(2025, 0, 11)} // Vue initiale centrée sur aujourd'hui
    />
  );
};

export default BigCalendar;
