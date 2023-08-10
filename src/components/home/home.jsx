import { annieSprattUnsplash } from '@assets';
import React from 'react';
import './home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="content">
        <h1 className="title">
          Turn Your <span>Words</span>
          <br />
          into <span>Wealth</span>
          <br />
          with Amazon KDP
        </h1>
        <p className="subtitle">
          Ready to enhance your earnings?
          <br />
          Upload Books on Amazon, No Writing Skills Required!
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
        <img
          src={annieSprattUnsplash}
          alt="flat lay photography of woman sitting on brown wooden parquet flooring surrounded by books"
          loading="eager"
          decoding="sync"
        />
        <figcaption>Discover Amazon KDP Success</figcaption>
      </figure>
    </section>
  );
}

export default Home;
