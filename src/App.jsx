import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context";
import { Home, Login, MovieDetail } from "./pages";
import { AuthWrapper } from "./services/auth/validator";

const App = () => {
  return (
    <AuthContextProvider>
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
    </AuthContextProvider>
  );
};

export default App;
