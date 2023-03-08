import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`modal-container ${open ? "modal-open" : "modal-close"}`}
    >
      {open && (
        <div onClick={(e) => e.stopPropagation()} className="modal-wrapper">
          {children}
          <button onClick={onClose} className="modal-close-button">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
