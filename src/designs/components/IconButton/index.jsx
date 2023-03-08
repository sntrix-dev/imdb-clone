import { combineClassName } from "../../../services";
import "./styles.css";

const generateClassForSize = (size = "md") => {
  if (size === "sm") {
    return "size-sm";
  } else if (size === "md") {
    return "size-md";
  } else if (size === "full") {
    return "size-full";
  } else {
    return "size-lg";
  }
};

const IconButton = ({
  children,
  size = "md",
  roundedFull = false,
  noRoundness = true,
  ...props
}) => {
  const className = combineClassName(
    generateClassForSize(size),
    roundedFull ? "rounded-full" : noRoundness ? "" : "rounded-md",
    "icon-button"
  );
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default IconButton;
