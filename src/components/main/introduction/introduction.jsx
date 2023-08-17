import { tantolorun } from '@assets';
import React from 'react';
import './introduction.css';

function Introduction() {
  return (
    <section id="introduction" className="introduction">
      <div className="section-divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" />
        </svg>
      </div>
      <h2>
        Hello!
        <br />
        I&apos;m <span>Sogbesan Tantolorun</span>
      </h2>
      <p>
        I was a relatively average Nigerian student frustrated with the
        occasional ASSU strike
      </p>
      <p>
        All I wanted was to be able to afford things without solely depending on
        my allowance which wasn&apos;t worth much
      </p>
      <p>
        Around the same time, the whole &lsquo;make money online&lsquo; trend
        started to gain traction. Needless to say, I fell victim to a lot of
        ponzi schemes all in the name of wanting to be financially free. I got
        scammed out of the little I use to get by
      </p>
      <figure>
        <img
          src={tantolorun}
          alt="a portrait of sogbesan tantolorun"
          loading="lazy"
          decoding="async"
        />
        <figcaption>
          Sogbesan Tantolorun
          <em>Affiliate Business Consultant</em>
        </figcaption>
      </figure>
      <p>
        Until a friend introduced me to Amazon KDP, that came in clutch as I had
        a complete nervous breakdown
      </p>
      <p>
        Call it what you want, I made up my mind to familiarize myself with
        publishing and earning through Amazon KDP
      </p>
      <p>
        Initially, all I thought Amazon KDP was good for was supplementing ones
        income, not more than ₦20k per month. But, news got to me that people
        pay rent/mortgage, buy cars, etc with Kindle Direct Publishing alone, I
        was hooked
      </p>
    </section>
  );
}

export default Introduction;
