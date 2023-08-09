import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 } from 'uuid';
import { tantoWebp } from '../../assets';
import './home.css';

function Home() {
  return (
    <section id="home" className="landing-page">
      <div className="content">
        <h1 className="title">
          work on your terms
          {[<br key={v4()} />, 'and ']}
          <strong>make money</strong>
          &nbsp;online
        </h1>
        <p className="subtitle">
          Ready to enhance your earnings? Team up with us and receive up to 25%
          for each sale!
        </p>
        <a
          className="get-started"
          href={import.meta.env.VITE_AFFILIATE_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </div>
      <figure>
        <img src={tantoWebp} alt="a portrait of sogbesan tantoluwa" />
        <figcaption>
          Sogbesan Tantoluwa
          <em>Affiliate Business Consultant</em>
        </figcaption>
      </figure>
    </section>
  );
}

export default Home;
