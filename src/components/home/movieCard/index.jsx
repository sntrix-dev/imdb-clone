import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { IconButton } from "../../../designs/components";
import Rating from "../../Rating";
import "./styles.css";

const MovieCard = ({
  backdrop_path,
  title,
  vote_average,
  video,
  id,
  baseUrl,
  apiKey,
  currentPage,
}) => {
  const navigate = useNavigate();
  const imageUrl = `${baseUrl}${backdrop_path}?api_key=${apiKey}`;

  return (
    <div
      className="movie-card"
      onClick={() =>
        navigate(`/movie/${id}`, {
          state: {
            page: currentPage,
          },
        })
      }
    >
      <div className="movie-image-wrapper">
        <img src={imageUrl} alt="" width="100%" />
      </div>
      <div className="movie-details">
        <div className="movie-details-info">
          <h3 className="movie-title max-text-line-1">{title}</h3>
          <div className="movie-rating-section">
            <div className="movie-rating">
              <Rating count={Math.floor(vote_average / 2)} />
            </div>
            <label className="movie-rating-count">
              {(vote_average / 2).toFixed(1)} / 5
            </label>
          </div>
        </div>
        <IconButton size="size-lg" roundedFull>
          <FontAwesomeIcon icon={faPlay} />
        </IconButton>
      </div>
    </div>
  );
};

export default MovieCard;
