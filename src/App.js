import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import About from "./components/about";
import { Services, Skills } from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
