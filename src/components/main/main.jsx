import React from 'react';
import Home from './home';
import HowItWorks from './how-it-works';
import Introduction from './introduction';
import './main.css';
import Results from './results';
import Summary from './summary';

function Main() {
  return (
    <main>
      <Home />
      <Introduction />
      <Summary />
      <HowItWorks />
      <Results />
    </main>
  );
}

export default Main;
