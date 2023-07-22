import React from 'react';
import './Main.css';

import Footer from '../widgets/Footer/Footer';

import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../widgets/Header/Header';

function Main({ loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="landing">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
