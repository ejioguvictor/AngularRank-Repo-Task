import React from "react";
import Footer from "../components/footer/Footer";
import LandingPage from "../components/landingPage";
import NavBar from "../components/navbar";

function Home() {
  return (
    <React.Fragment>
      <>
        <div className="container-fluid">
          <NavBar />
        </div>
        <LandingPage />
        <Footer />
      </>
    </React.Fragment>
  );
}

export default Home;
