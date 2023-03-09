import { useEffect, useState } from "react";
import { getMovies, searchMovie } from "../apis";

export function MoviesList({
  renderItem,
  setTotalPage,
  query = "",
  page = 1,
  RenderElement,
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (query) {
      searchMovie(query, page)
        .then((res) => {
          setData(res.data.results);
          setTotalPage(res.data.total_pages);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      getMovies(page)
        .then((res) => {
          setData(res.data.results);
          setTotalPage(res.data.total_pages);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [query, page]);

  return renderItem(data, loading);
}
