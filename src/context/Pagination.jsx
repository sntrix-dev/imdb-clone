import { createContext, useState } from "react";

const initialState = {
  page: 1,
};

export const PageContext = createContext(initialState);

const PageContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updatePage = (page) => {
    setState({
      page,
    });
  };

  return (
    <PageContext.Provider
      value={{
        page: state.page,
        updatePage,
      }}
    >
      {" "}
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
