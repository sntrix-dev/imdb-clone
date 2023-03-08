import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import "./styles.css";

const Pagination = ({ totalPage, renderItem }) => {
  const [page, setPage] = useState(1);

  const memosizedSequence = useMemo(() => {
    const sequence = new Set([]);
    let initial = page;
    if (page - 2 > 0) {
      initial -= 2;
    } else if (page - 1 > 0) {
      initial -= 1;
    }
    let final = page;
    if (page === totalPage || totalPage < 5) {
      final = totalPage;
    } else if (page + 2 <= totalPage) {
      final += 2;
    } else if (page + 1 <= totalPage) {
      final += 1;
    } else {
      final = totalPage;
    }
    for (let i = initial; i <= final; i++) {
      sequence.add(i);
    }
    return Array.from(sequence);
  }, [page, totalPage]);

  const setPrevPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const setNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const setCustomPage = (p) => {
    setPage(p);
  };

  // console.log(memosizedSequence);

  return (
    <>
      {renderItem(page)}
      <div className="pagination-wrapper">
        <button
          className="arrow-icon"
          disabled={page <= 1}
          onClick={setPrevPage}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="pagination-num-wrapper">
          {page - 2 > 1 && (
            <>
              <button onClick={() => setCustomPage(1)}>1</button>
              <span>...</span>
            </>
          )}
          {memosizedSequence.map((seq, index) => (
            <button
              key={index}
              onClick={() => setCustomPage(seq)}
              className={`${seq === page ? "active" : ""}`}
            >
              {seq}
            </button>
          ))}
          {page + 2 < totalPage && (
            <>
              <span>...</span>
              <button onClick={() => setCustomPage(totalPage)}>
                {totalPage}
              </button>
            </>
          )}
        </div>
        <button
          className="arrow-icon"
          disabled={page >= totalPage}
          onClick={setNextPage}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </>
  );
};

export default Pagination;
