import React from 'react';

import { timeFrameEnum } from '../lib/enums';

interface TimeFrameContextType {
  timeFrame: timeFrameEnum | undefined;
  timeFrameSelector: (timeFrame: timeFrameEnum) => void;
}

const TimeFrameContext = React.createContext<TimeFrameContextType | undefined>(undefined);

type TimeFrameContextProviderProps = {
  children: React.ReactNode;
};

const TimeFrameContextProvider = ({ children }: TimeFrameContextProviderProps) => {
  const [timeFrame, setTimeFrame] = React.useState<timeFrameEnum | undefined>(undefined);
  React.useEffect(() => {
    setTimeFrame(timeFrameEnum.week);
  });
  const timeFrameSelector = (timeFrame: timeFrameEnum) => {
    setTimeFrame(timeFrame);
  };
  return (
    <TimeFrameContext.Provider value={{ timeFrame, timeFrameSelector }}>
      {children}
    </TimeFrameContext.Provider>
  );
};

const useTimeFrameContext = () => {
  const context = React.useContext(TimeFrameContext);
  if (context) {
    return context;
  }
  throw new Error('TimeFrame Context Missing');
};

export { useTimeFrameContext, TimeFrameContextProvider };
