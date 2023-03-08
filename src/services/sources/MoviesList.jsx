import { useEffect, useState } from "react";
import { getMovies, searchMovie } from "../apis";

export function MoviesList({ renderItem, setTotalPage, query = "", page = 1 }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (query) {
      searchMovie(query, page)
        .then((res) => {
          setData(res.data.results);
          setTotalPage(res.data.total_pages);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      getMovies(page)
        .then((res) => {
          setData(res.data.results);
          setTotalPage(res.data.total_pages);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [query, page]);

  return renderItem(data);
}
