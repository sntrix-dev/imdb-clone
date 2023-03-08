import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, Login, MovieDetail } from "./pages";
import { AuthWrapper } from "./services/auth/validator";
import SearchContextProvider from "./context";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <SearchContextProvider>
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
    </SearchContextProvider>
  );
};

export default App;
