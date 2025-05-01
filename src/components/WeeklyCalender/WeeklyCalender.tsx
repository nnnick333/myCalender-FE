import React from 'react';
import api from '../../api/axios';

export default function WeeklyCalendar() {
  const timeSlots = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  const offset = (currentHour + currentMinutes / 60) * 48;

  const [userEvents, setUserEvents] = React.useState([]);

  const getUser = () => {
    api
      .get('/event/user')
      .then((response) => {
        setUserEvents(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getUser();
  }, []);

  // Dynamically generate 7-day array starting from today
  const generateWeekDays = () => {
    const days = [];
    const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(now.getDate() + i);
      days.push({
        label: formatter.format(date), // e.g. "Wednesday"
        date: date.toISOString().split('T')[0], // e.g. "2025-04-30"
      });
    }
    return days;
  };

  const daysOfWeek = generateWeekDays();

  return (
    <div className="w-full border border-gray-200 rounded-lg shadow-sm">
      {/* Days of the Week Header */}
      <div className="flex">
        <div className="w-16 bg-transparent"></div>
        <div className="grid grid-cols-7 flex-1 bg-gray-50 text-center font-medium text-gray-600">
          {daysOfWeek.map((day) => (
            <div key={day.date} className="py-2 border-b border-gray-200">
              {day.label} <br />
              <span className="text-xs text-gray-400">{day.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots Rows */}
      <div className="flex relative">
        {/* Time Labels */}
        <div className="w-16 relative">
          {timeSlots.map((time, index) => (
            <div
              key={time}
              className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-gray-500"
              style={{ top: `${index * 3}rem` }}
            >
              {time}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 relative">
          <div
            className="absolute w-full h-0.5 bg-red-500 z-40"
            style={{ top: `${offset}px` }}
          ></div>

          {timeSlots.map((time) => (
            <div key={time} className="grid grid-cols-7 border-b border-gray-200 h-12 relative">
              {daysOfWeek.map((day) => (
                <div
                  key={`${day.date}-${time}`}
                  className="border-r border-gray-200 hover:bg-gray-100 transition-colors"
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
