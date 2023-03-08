import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import "./styles.css";

const Rating = ({ count }) => {
  const memosizedSize = [0, 1, 2, 3, 5];
  // const memosizedSize = useMemo(() => {
  //   const times = new Set([]);
  //   for (let i = 0; i < count; i++) {
  //     times.add(i);
  //   }
  //   return Array.from(times);
  // }, [count]);

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
