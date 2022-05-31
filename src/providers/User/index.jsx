import { createContext, useContext } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const handleSignup = (data) => {
    console.log(data);
  };

  return (
    <userContext.Provider value={{ handleSignup }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
