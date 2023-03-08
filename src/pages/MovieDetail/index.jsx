import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../components/navigation";
import { getMovieDetails } from "../../services/apis";
import "./styles.css";

const MovieDetail = () => {
  const [data, setData] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) {
      getMovieDetails(id)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <main className="container">
      <Navbar showLogout />
      {data && (
        <section className="movie-detail-section">
          <div className="bg-image-wrapper">
            <img
              src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${data.backdrop_path}`}
              alt=""
              height="100%"
              className="desktop"
            />
            <img
              src={`${process.env.REACT_APP_IMAGE_BASE_URL}/${data.backdrop_path}`}
              alt=""
              width="100%"
              className="mobile"
            />
            <div className="movie-details-bg" />
          </div>
          <div className="normal-bg" />
          <div className="movie-info-container-desktop hide-scrollbar">
            <button onClick={() => navigate("/")} className="back-button">
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </button>
            <h1 className="title">{data.title}</h1>
            <div className="rating">
              <span>Rating: </span>
              <span>
                <span>{(data.vote_average / 2).toFixed(1)} / 5</span>
              </span>
            </div>
            <p className="description">{data.overview}</p>
            <div className="details">
              <h3 className="heading">Release Date:</h3>
              <h3 className="value">{data.release_date.split("-")[0]}</h3>
              <h3 className="heading">Orginal Language:</h3>
              <h3 className="value">
                {data.spoken_languages
                  .map((language) => language.english_name)
                  .join(",")}
              </h3>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default MovieDetail;
