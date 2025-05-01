import React from 'react';

import WeeklyCalender from '../components/WeeklyCalender/WeeklyCalender';
import { useAuthenticatedContext } from '../contexts/AuthenticatedContext';

const Home: React.FC = () => {
  const [displayType, setDisplayType] = React.useState('weekly');
  const { timeFrame } = useAuthenticatedContext();
  const renderDashboard = () => {
    switch (timeFrame) {
      case 'Week':
        return <WeeklyCalender />;
    }
  };
  return <div>{renderDashboard()}</div>;
};

export default Home;
