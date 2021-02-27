import React from "react";
import Header from "../body/header/Header";
import Footer from "../body/footer/Footer";
import "./Profile.css";

const Settings = () => {
  return (
    <div className="color_bg">
      <Header />
      <main role="main">
        <section className="prof-panel">
            <h2>Settings</h2>
            <div className="prof-content">
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;
