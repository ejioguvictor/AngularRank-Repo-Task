import React from "react";
import UserProfile from "../components/contributorProfile/UserProfile";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar";

function UserProfilePage() {
  return (
    <>
      <div className="container-fluid">
        <NavBar />
      </div>
      <UserProfile />
      <Footer />
    </>
  );
}

export default UserProfilePage;
