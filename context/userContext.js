// context/UserContext.js
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState("aluno"); // valor padrão pode vir da API, login, etc

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
