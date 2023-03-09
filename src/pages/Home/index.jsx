import { lazy, Suspense, useContext, useState } from "react";
import { Banner } from "../../components/home";
import { LoadingScreen } from "../../components/LoadingScreen";
import { Navbar } from "../../components/navigation";
import { SearchContext } from "../../context";
import { Menu, Pagination } from "../../designs/components";
import { MoviesList } from "../../services/sources";
import "./styles.css";

const MovieCard = lazy(() => import("../../components/home/movieCard/index"));

const BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [totalPage, setTotalPage] = useState(1);
  const [sort, setSort] = useState();
  const { query } = useContext(SearchContext);
  return (
    <main className="container">
      <Navbar showLogout showSearchBox />
      <Banner />
      <section className="home-section">
        <div className="title-section">
          <h2>{query ? "Search results for " + query : "Trending"}</h2>
          <Menu
            data={[
              {
                active: sort === "a-z",
                name: "Sort by A-Z",
                onClick: () => setSort("a-z"),
              },
              {
                active: sort === "z-a",
                name: "Sort by Z-A",
                onClick: () => setSort("z-a"),
              },
              {
                active: sort === "high-rated",
                name: "Sort by Top Rated",
                onClick: () => setSort("high-rated"),
              },
            ]}
          />
        </div>
        <div className="home-data-wrapper">
          <Pagination
            totalPage={totalPage}
            resetPage={query}
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
                    if (sort === "a-z") {
                      data = data.sort((a, b) => {
                        const titleA = a.title.toUpperCase().trim();
                        const titleB = b.title.toUpperCase().trim();
                        if (titleA < titleB) {
                          return -1;
                        } else if (titleA > titleB) {
                          return 1;
                        }
                        return 0;
                      });
                    } else if (sort === "z-a") {
                      data = data.sort((a, b) => {
                        const titleA = a.title.toUpperCase().trim();
                        const titleB = b.title.toUpperCase().trim();
                        if (titleA < titleB) {
                          return 1;
                        } else if (titleA > titleB) {
                          return -1;
                        }
                        return 0;
                      });
                    } else if (sort === "high-rated") {
                      data = data.sort(
                        (a, b) => b.vote_average - a.vote_average
                      );
                    }
                    return data.map((item) => {
                      return (
                        <MovieCard
                          key={item.id}
                          {...item}
                          baseUrl={BASE_URL}
                          apiKey={API_KEY}
                          currentPage={page}
                        />
                      );
                    });
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
