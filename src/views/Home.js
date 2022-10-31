import React from "react";
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButton';
import Institutional from "../components/Institutional";
import FAQ from "../components/FAQ";

import posts from '../data/posts';

const Home = ({handleClick}) => (

    <>
        <Hero />
        <CreditCard />
        <CardList posts={posts} />
        <CenteredButton onClick={handleClick}>
            Abra sua conta
        </CenteredButton>
        <Institutional  />
        <FAQ />
    </>
)

export default Home;
