import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Navbar } from "../../components/navigation";
import { Button, TextField } from "../../designs/components";
import { login, requestToken } from "../../services/apis";
import "./styles.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  // {type: 'common', message: ''}
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const notify = () =>
    toast("Logged in successfully", {
      type: "success",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError();
    if (credentials.username) {
      if (credentials.password) {
        requestToken()
          .then((res) => {
            const request_token = res.data.request_token;
            if (request_token) {
              login({
                ...credentials,
                request_token,
              })
                .then((loginRes) => {
                  setLoading(false);
                  const data = loginRes.data;
                  window.localStorage.setItem("x-auth", JSON.stringify(data));
                  navigate("/");
                  notify();
                })
                .catch((loginErr) => {
                  if (
                    loginErr.response.status === 400 ||
                    loginErr.response.status === 401
                  ) {
                    setError({
                      type: "common",
                      message: "Invalid Username or Password",
                    });
                  } else {
                    setError({
                      type: "common",
                      message: "Something went wrong. Try again later!",
                    });
                  }
                  setLoading(false);
                });
            }
          })
          .catch((err) => {
            setError({
              type: "common",
              message: "Try Again!",
            });
          });
      } else {
        setError({
          type: "password",
          message: "Password is required",
        });
        setLoading(false);
      }
    } else {
      setError({
        type: "username",
        message: "User name is required",
      });
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <Navbar />
      <section className="login-section">
        <form className="card" onSubmit={handleSubmit}>
          <div className="title">
            <h3>Sign In</h3>
            <p>Sign in to your Self Service Portal</p>
          </div>
          <div className="body">
            <TextField
              placeholder="Username"
              type="text"
              onChange={(e) =>
                setCredentials((prevState) => ({
                  ...prevState,
                  username: e.target.value,
                }))
              }
              severity={error && error.type == "username" ? "error" : ""}
              helperText={
                error && error.type == "username" ? error.message : ""
              }
            />
            <TextField
              placeholder="Password"
              type="password"
              onChange={(e) =>
                setCredentials((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              severity={error && error.type == "password" ? "error" : ""}
              helperText={
                error && error.type == "password" ? error.message : ""
              }
            />
          </div>
          <p className="error-msg">
            {error && error.type === "common" && error.message}
          </p>
          <Button disabled={loading} fullWidth type="submit">
            {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : "Log In"}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default Login;
