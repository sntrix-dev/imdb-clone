import { lazy, Suspense, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Banner } from "../../components/home";
import { LoadingScreen } from "../../components/LoadingScreen";
import { Navbar } from "../../components/navigation";
import { SearchContext } from "../../context";
import { Pagination } from "../../designs/components";
import { MoviesList } from "../../services/sources";
import "./styles.css";

const MovieCard = lazy(() => import("../../components/home/movieCard/index"));

const BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [totalPage, setTotalPage] = useState(1);
  // const [searchparams] = useSearchParams();
  const { query } = useContext(SearchContext);
  return (
    <main className="container">
      <Navbar showLogout showSearchBox />
      <Banner />
      <section className="home-section">
        {!query && <h2>Trending</h2>}
        <div className="home-data-wrapper">
          <Pagination
            totalPage={totalPage}
            renderItem={(page) => (
              <Suspense fallback={<></>}>
                <MoviesList
                  query={query}
                  page={page}
                  setTotalPage={setTotalPage}
                  renderItem={(data, loading) => {
                    if (loading) {
                      return <LoadingScreen />;
                    }
                    return data.map((item) => (
                      <MovieCard
                        key={item.id}
                        {...item}
                        baseUrl={BASE_URL}
                        apiKey={API_KEY}
                      />
                    ));
                  }}
                />
              </Suspense>
            )}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
