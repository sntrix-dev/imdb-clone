import { createContext, useState } from "react";

const initialState = {
  query: null,
};
export const SearchContext = createContext(initialState);

const SearchContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const updateSearch = (query) => {
    setState({
      query,
    });
  };

  return (
    <SearchContext.Provider
      value={{
        query: state.query,
        updateSearch,
      }}
    >
      {" "}
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
