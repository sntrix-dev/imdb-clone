import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { IconButton } from "../../designs/components";
import { useSearchParams } from "react-router-dom";

const SearchBox = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleSearchUpdate = (value) => {
    if (value) {
      setSearchParams({
        search: value,
      });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        placeholder="Search movies"
        onChange={(e) => handleSearchUpdate(e.target.value)}
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
