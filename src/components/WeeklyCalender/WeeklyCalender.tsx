import React from 'react';

export default function WeeklyCalender() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = Array.from({ length: 24 }, (_, i) => `${i}:00`); // Generate time slots for 24 hours

  return (
    <div className="flex flex-col w-full border border-gray-300">
      <div className="grid grid-cols-7 bg-gray-100 text-center font-bold">
        {daysOfWeek.map((day) => (
          <div key={day} className="border border-gray-300 py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 divide-x divide-gray-300">
        {timeSlots.map((time) => (
          <React.Fragment key={time}>
            {daysOfWeek.map((day) => (
              <div
                key={`${day}-${time}`}
                className="border border-gray-300 h-12 flex items-center justify-center text-sm"
              >
                {time}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
