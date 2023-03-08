import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context";

const validate = (data, children) => {
  return children;
};

export const AuthWrapper = ({ children }) => {
  let data = window?.localStorage?.getItem("x-auth");
  data = JSON.parse(data);
  if (data) {
    return validate(data, children);
  }
  return <Navigate replace to={"/login"} />;
};
