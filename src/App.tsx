import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import "./App.scss";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Achievements /> */}
    </div>
  );
}

export default App;
