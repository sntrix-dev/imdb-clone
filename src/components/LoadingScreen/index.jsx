import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <FontAwesomeIcon icon={faSpinner} spin size="2x" />
    </div>
  );
};
