import React, { useContext, useState } from "react";

export const Context = React.createContext({
  speed: 1,
  setSpeed: (v) => {},
});

export const ContextProvider = ({ children }) => {
  const [speed, setSpeed] = useState(1);

  return (
    <Context.Provider
      value={{
        speed,
        setSpeed,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useCarContext = () => useContext(Context);
export default useCarContext;
