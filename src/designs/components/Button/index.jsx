import { combineClassName } from "../../../services";
import "./styles.css";

const Button = ({ children, fullWidth, ...props }) => {
  const buttonClassName = combineClassName(
    fullWidth ? "width-full" : "",
    "button"
  );

  return (
    <button {...props} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;
