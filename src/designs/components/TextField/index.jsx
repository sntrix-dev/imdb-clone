import { combineClassName } from "../../../services";
import "./styles.css";

const TextField = ({ severity = "error", helperText = "", ...props }) => {
  const wrapperClassName = combineClassName("wrapper");
  const InputClassName = combineClassName("text-field-input");
  return (
    <div className={wrapperClassName}>
      <input {...props} className={InputClassName} />
      {helperText && (
        <p
          style={{
            color: severity == "error" ? "#ff0000" : "",
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
