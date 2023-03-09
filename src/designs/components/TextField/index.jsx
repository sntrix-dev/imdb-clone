import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { combineClassName } from "../../../services";
import "./styles.css";

const TextField = ({ severity = "error", helperText = "", ...props }) => {
  const [showText, setShowText] = useState(false);
  const wrapperClassName = combineClassName("wrapper");
  const InputClassName = combineClassName("text-field-input");
  return (
    <div className={wrapperClassName}>
      <input
        {...props}
        type={
          props.type === "password"
            ? showText
              ? "text"
              : "password"
            : props.type
        }
        className={InputClassName}
      />
      {props.type === "password" && (
        <button
          className="password-eye-button"
          type="button"
          onClick={() => setShowText((prevState) => !prevState)}
        >
          <FontAwesomeIcon icon={showText ? faEyeSlash : faEye} />
        </button>
      )}
      {helperText && (
        <p
          style={{
            color: severity === "error" ? "#ff0000" : "",
            fontSize: "12px",
          }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default TextField;
