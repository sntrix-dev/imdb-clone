import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect, useState } from "react";
import "./styles.css";

const MenuItem = ({ children, onClick, active }) => {
  return (
    <button className={`menu-item ${active ? "active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

const Menu = ({ data }) => {
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    if (window && open) {
      window.addEventListener("click", (e) => {
        if (
          e.target.className === "title-section" ||
          e.target.className === "home-data-wrapper" ||
          e.target.className === "banner-image"
        ) {
          setOpen(false);
        }
      });

      return () => {
        window.removeEventListener("click", () => null);
      };
    }
  });

  return (
    <div className="menu">
      <button
        className="menu-icon-button"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </button>
      <div className={`menu-wrapper ${open ? "menu-open" : "menu-close"}`}>
        {open && (
          <>
            {data.map((item, index) => (
              <MenuItem
                active={item.active}
                onClick={() => {
                  item.onClick();
                  setOpen(false);
                }}
                key={index}
              >
                {item.name}
              </MenuItem>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;
