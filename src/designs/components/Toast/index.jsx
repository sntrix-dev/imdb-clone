import { useContext, useEffect, useMemo, useState } from "react";
import { ToastContext } from "../../../context";
// import { Queue } from "../../../services/array/Queue";
import "./styles.css";

const Toast = ({ id, severity, message, onClose }) => {
  let severityBg = "";
  if (severity === "success") {
    severityBg = "success-bg";
  } else if (severity === "error") {
    severityBg = "error-bg";
  } else if (severity === "warning") {
    severityBg = "warning-bg";
  } else if (severity === "info") {
    severityBg = "info-bg";
  }

  useEffect(() => {
    const toastId = setTimeout(() => onClose(id), 3000);
    return () => {
      if (toastId) {
        clearTimeout(toastId);
      }
    };
  }, []);

  return (
    <div className={`toast-wrapper `}>
      <div className={`severity-indicator ${severityBg}`} />
      <h4>{message}</h4>
    </div>
  );
};

const Toastify = () => {
  const [toasts, setToasts] = useState([]);
  const { notification } = useContext(ToastContext);

  console.log("noti", notification);

  const memosizedToasts = useMemo(() => {
    if (notification) {
      setToasts((prevState) => [
        ...prevState,
        {
          id: prevState.length + 1,
          ...notification,
        },
      ]);
    }
    return toasts;
  }, [notification]);

  console.log("memosizedToasts", memosizedToasts);

  return (
    <div className="toastify-wrapper">
      {toasts.filter(Boolean).map((toast, index) => (
        <Toast
          key={toast.message + index}
          severity={toast.severity}
          message={toast.message}
          onClose={(id) =>
            setToasts((prevState) => prevState.filter((item) => item.id !== id))
          }
          id={toast.id}
        />
      ))}
    </div>
  );
};

export default Toastify;
