import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

const Rating = ({ count }) => {
  const memosizedSize = [0, 1, 2, 3, 5];

  return (
    <div>
      {memosizedSize.map((time, index) => (
        <FontAwesomeIcon
          key={time}
          icon={faStar}
          color={index < count ? "#FFE234" : ""}
          className="star-icon"
        />
      ))}
    </div>
  );
};

export default Rating;
