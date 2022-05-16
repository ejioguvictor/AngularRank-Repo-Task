import React from "react";
import "./App.css";
import Cards from "./components/cardUI/Cards";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ContributorRepo from "./components/repository/ContributorRepo";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />

          <Route
            exact
            path="/userprofile/:id"
            element={<UserProfilePage />}
          />
          <Route
            exact
            path="/repo/:id"
            element={
              <>
                <Navbar />
                <ContributorRepo />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path="/landingPage"
            element={
              <>
                <Navbar />
                <LandingPage />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/contributors"
            element={
              <>
                <Navbar />
                <Cards />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

