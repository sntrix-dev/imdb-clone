import { createContext, useState } from "react";

const initialState = {
  notification: null,
};
export const ToastContext = createContext(initialState);

const ToastContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const notify = (notification) => {
    setState({
      notification,
    });
  };

  return (
    <ToastContext.Provider
      value={{
        notification: state.notification,
        notify,
      }}
    >
      {" "}
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
