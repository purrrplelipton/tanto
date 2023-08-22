import balls from '@assets/proofs/balls.webp';
import feyi from '@assets/proofs/feyi.webp';
import my from '@assets/proofs/my.webp';
import nancy from '@assets/proofs/nancy.webp';
import suck from '@assets/proofs/suck.webp';
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
      <h2
        style={{
          textAlign: 'center',
          fontSize: '1.875em',
          lineHeight: '1.3',
          margin: '0.5em 0',
        }}
      >
        Results
      </h2>
      <p style={{ fontSize: '1.25em', marginBottom: '1em' }}>
        Welcome to our Results and Proof section! Here, we&apos;re all about
        real results and no-nonsense evidence. Curious to see the actual impact
        our recommendations can have? Dive into these success stories and get
        inspired to make smart choices for your journey.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1em',
        }}
      >
        <img
          style={{ borderRadius: 6 }}
          onClick={({ target }) => {
            document.addEventListener('click', (evt) => {
              if (evt.target !== target) {
                target.style = 'border-radius: 6px;';
              }
            });
            target.style =
              'position: fixed;inset: 0;max-width: 62.5%;margin: auto;';
            document.body.style = 'height: 100vh;overflow:hidden;';
          }}
          src={feyi}
          alt="Hullabaloo"
        />
        <img
          style={{ borderRadius: 6 }}
          onClick={({ target }) => {
            document.addEventListener('click', (evt) => {
              if (evt.target !== target) {
                target.style = 'border-radius: 6px;';
              }
            });
            target.style =
              'position: fixed;inset: 0;max-width: 62.5%;margin: auto;';
            document.body.style = 'height: 100vh;overflow:hidden;';
          }}
          src={suck}
          alt="Hullabaloo"
        />
        <img
          style={{ borderRadius: 6 }}
          onClick={({ target }) => {
            document.addEventListener('click', (evt) => {
              if (evt.target !== target) {
                target.style = 'border-radius: 6px;';
              }
            });
            target.style =
              'position: fixed;inset: 0;max-width: 62.5%;margin: auto;';
            document.body.style = 'height: 100vh;overflow:hidden;';
          }}
          src={nancy}
          alt="Hullabaloo"
        />
        <img
          style={{ borderRadius: 6 }}
          onClick={({ target }) => {
            document.addEventListener('click', (evt) => {
              if (evt.target !== target) {
                target.style = 'border-radius: 6px;';
              }
            });
            target.style =
              'position: fixed;inset: 0;max-width: 62.5%;margin: auto;';
            document.body.style = 'height: 100vh;overflow:hidden;';
          }}
          src={my}
          alt="Hullabaloo"
        />
        <img
          style={{ borderRadius: 6 }}
          onClick={({ target }) => {
            document.addEventListener('click', (evt) => {
              if (evt.target !== target) {
                target.style = 'border-radius: 6px;';
              }
            });
            target.style =
              'position: fixed;inset: 0;max-width: 62.5%;margin: auto;';
            document.body.style = 'height: 100vh;overflow:hidden;';
          }}
          src={balls}
          alt="Hullabaloo"
        />
      </div>
    </section>
  );
}

export default Results;
