import feyi from '@assets/proofs/feyi.webp';
import nancy from '@assets/proofs/nancy.webp';
import React from 'react';
import './results.css';

function Results() {
  return (
    <section id="results" className="wrapper">
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
      <h2>Results</h2>
      <p>
        Welcome to our Results and Proof section! Here, we&apos;re all about
        real results and no-nonsense evidence. Curious to see the actual impact
        our recommendations can have? Dive into these success stories and get
        inspired to make smart choices for your journey.
      </p>
      <div>
        <figure>
          <img src={nancy} alt="Hullabaloo" />
          <figcaption>Nancy</figcaption>
        </figure>
        <figure>
          <img src={feyi} alt="Hullabaloo" />
          <figcaption>Feyi</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Results;
