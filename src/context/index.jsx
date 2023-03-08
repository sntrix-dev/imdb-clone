import { createContext, useState } from "react";

const initialState = {
  data: {},
};
export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updateState = (data) => {
    setState(data);
  };

  return (
    <AuthContext.Provider
      value={{
        data: state.data,
        updateState,
      }}
    >
      {" "}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
