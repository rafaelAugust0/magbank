import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from "./components/Institutional";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.scss";

import posts from './data/posts';

const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <CreditCard />
      <CardList posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>
      <Institutional />
      <FAQ />
      <Footer />
    </div>
  );

export default App;
