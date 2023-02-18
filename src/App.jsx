import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="main__container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
