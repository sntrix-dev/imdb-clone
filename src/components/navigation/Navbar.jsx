import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContext } from "../../context";
import Logo from "../logo";
import SearchBox from "../searchbox";
import "./styles.css";

const Navbar = ({ showLogout = false, showSearchBox = false }) => {
  const navigate = useNavigate();
  const notify = () =>
    toast("Logged out", {
      type: "success",
    });
  // const { notify } = useContext(ToastContext);
  const logout = () => {
    window.localStorage.removeItem("x-auth");
    navigate("/login");
    notify();
  };

  return (
    <header>
      <div>
        <Logo />
        <nav>
          {showSearchBox && (
            <div className="nav-search-desktop">
              <SearchBox />
            </div>
          )}
          {showLogout && (
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          )}
        </nav>
      </div>
      {showSearchBox && (
        <div className="nav-search-mobile">
          <SearchBox />
        </div>
      )}
    </header>
  );
};

export default Navbar;
