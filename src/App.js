// import React from "react";
// import MemberCard from "./components/card/card";
// import CardUI from "./components/cardUI/CardUI";
// import NavBar from "./components/navbar";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="container-fluid">
//       {/* <NavBar />
//       <Cards /> */}
//       {/* <MemberCard /> */}
//       <Home />
//     </div>
//   );
// }

// export default App;



import React from "react";
import "./App.css";
import Cards from "./components/cardUI/Cards";
import Navbar from "./components/navbar";
// import Layout from "./components/Layout";
// import Contributors from "./components/Contributors";
// import Repository from "./components/Repository";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";

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
            path="/userprofile"
            element={<UserProfilePage />}
          />
          <Route
            exact
            path="/repo/:id"
            element={
              <>
                <Navbar />
                {/* <Repository /> */}
                <Footer />
              </>
            }
          />

          {/* <Route
            exact
            path="/userprofile"
            element={
              <>
                <Navbar />
                <Cards />
                <Footer />
              </>
            }
          /> */}
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;

