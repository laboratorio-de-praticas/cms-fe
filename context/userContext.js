import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState("aluno"); // valor padrão pode vir da API, login, etc
  const [curso, setCurso] = useState("GE"); // adicionando o curso (padrão: DSM)

  return (
    <UserContext.Provider value={{ userType, setUserType, curso, setCurso }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
