import logo from "../../assets/images/logo.png";
import "./styles.css";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <img src={logo} width="100%" height="100%" alt="imdb" />
    </div>
  );
};

export default Logo;
