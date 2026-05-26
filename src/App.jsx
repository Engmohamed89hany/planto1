import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import TopSelling from "./components/TopSelling/TopSelling";
import Gallery from "./components/Gallery/Gallery";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer.jsx/Footer";
const App = () => {
  return (
    <div className="min-h-[200vh]">
      <Header />
      {/* Main content goes here */}
      <Hero />
      <TopSelling />
      <Clients />
      <Footer/>
    </div>

  );
};

export default App;
