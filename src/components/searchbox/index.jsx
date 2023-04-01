import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { IconButton } from "../../designs/components";
import { useContext, useDeferredValue, useEffect, useState } from "react";
import { SearchContext } from "../../context";

const SearchBox = () => {
  const { query, updateSearch } = useContext(SearchContext);
  const [search, setSearch] = useState(query);
  const deferredValue = useDeferredValue(search);

  useEffect(() => {
    if (deferredValue) {
      updateSearch(deferredValue);
    } else {
      updateSearch("");
    }
  }, [deferredValue, updateSearch]);

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        placeholder="Search movies"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="search-button">
        <IconButton size="full">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBox;
