import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

export default function StatCalendar() {
  const [value, onChange] = useState(new Date());
  const locale = 'ko-Hang';
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType={'US'}
        locale={'ko-Hang'}
        formatDay={(locale, date) => dayjs(date).format('D')}
      />
    </div>
  );
}
