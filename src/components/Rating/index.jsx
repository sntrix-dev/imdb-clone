import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import "./styles.css";

const Rating = ({ count }) => {
  const memosizedSize = useMemo(() => {
    const times = new Set([]);
    for (let i = 0; i < count; i++) {
      times.add(i);
    }
    return Array.from(times);
  }, [count]);

  return (
    <div>
      {memosizedSize.map((time) => (
        <FontAwesomeIcon
          key={time}
          icon={faStar}
          color="#FFE234"
          className="star-icon"
        />
      ))}
    </div>
  );
};

export default Rating;
