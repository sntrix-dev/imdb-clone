import { Navigate } from "react-router-dom";

const validate = (data, children) => {
  return children;
};

export const AuthWrapper = ({ children }) => {
  let data = window?.localStorage?.getItem("x-auth");
  data = JSON.parse(data);
  if (data) {
    return validate(data, children);
  }
  return children;
};
