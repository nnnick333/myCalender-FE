import React from 'react';

import WeeklyCalender from '../components/WeeklyCalender/WeeklyCalender';
import { useTimeFrameContext } from '../contexts/TimeFrameContext';

const Home: React.FC = () => {
  const [displayType, setDisplayType] = React.useState('weekly');
  const { timeFrame } = useTimeFrameContext();
  const renderDashboard = () => {
    switch (timeFrame) {
      case 'Week':
        return <WeeklyCalender />;
    }
  };
  return <div>{renderDashboard()}</div>;
};

export default Home;
