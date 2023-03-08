import { useEffect, useState } from "react";
import { getVideoDetails } from "../../services/apis";

const Trailer = ({ id, width, height }) => {
  const [details, setDetails] = useState();

  useEffect(() => {
    getVideoDetails(id)
      .then((res) => {
        const data = res.data.results;
        setDetails(data.filter((item) => item.type === "Trailer")[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return details ? (
    <iframe
      src={`https://www.youtube.com/embed/${details.key}?autoplay=1&mute=1`}
      frameBorder={0}
      width={width}
      height={height}
    />
  ) : (
    <></>
  );
};

export default Trailer;
