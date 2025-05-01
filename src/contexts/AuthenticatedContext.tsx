import React from 'react';

import { timeFrameEnum } from '../lib/enums';

interface AuthenticatedContextType {
  timeFrame: timeFrameEnum | undefined;
  timeFrameSelector: (timeFrame: timeFrameEnum) => void;
}

const AuthenticatedContext = React.createContext<AuthenticatedContextType | undefined>(undefined);

type AuthenticatedContextProviderProps = {
  children: React.ReactNode;
};

const AuthenticatedContextProvider = ({ children }: AuthenticatedContextProviderProps) => {
  const [timeFrame, setTimeFrame] = React.useState<timeFrameEnum | undefined>(undefined);
  React.useEffect(() => {
    setTimeFrame(timeFrameEnum.week);
  });
  const timeFrameSelector = (timeFrame: timeFrameEnum) => {
    setTimeFrame(timeFrame);
  };
  return (
    <AuthenticatedContext.Provider value={{ timeFrame, timeFrameSelector }}>
      {children}
    </AuthenticatedContext.Provider>
  );
};

const useAuthenticatedContext = () => {
  const context = React.useContext(AuthenticatedContext);
  if (context) {
    return context;
  }
  throw new Error('TimeFrame Context Missing');
};

export { useAuthenticatedContext, AuthenticatedContextProvider };
