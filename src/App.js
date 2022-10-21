import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import "./App.scss";

const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <CreditCard />
    </div>
  );

export default App;
