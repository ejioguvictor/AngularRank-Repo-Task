import React from "react";
import Cards from "./components/cardUI/Cards";
// import MemberCard from "./components/card/card";
// import CardUI from "./components/cardUI/CardUI";
import NavBar from "./components/navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container-fluid">
      {/* <NavBar />
      <Cards /> */}
      {/* <MemberCard /> */}
      <Home />
    </div>
  );
}

export default App;
