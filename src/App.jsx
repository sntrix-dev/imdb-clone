import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ToastContextProvider from "./context";
// import Toastify from "./designs/components/Toast";
import { Home, Login, MovieDetail } from "./pages";
import { AuthWrapper } from "./services/auth/validator";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ToastContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <AuthWrapper>
                <Home />
              </AuthWrapper>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <AuthWrapper>
                <MovieDetail />
              </AuthWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <Toastify /> */}
      <ToastContainer autoClose={3000} />
    </ToastContextProvider>
  );
};

export default App;
