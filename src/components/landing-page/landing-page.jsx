import React from 'react';
import { v4 } from 'uuid';
import { tantoWebp } from '../../assets';
import './landing-page.css';

function LandingPage() {
  return (
    <section id="home" className="landing-page">
      <figure>
        <img src={tantoWebp} alt="a portrait of sogbesan tantoluwa" />
        <figcaption>
          Sogbesan Tantoluwa - Affiliate Business Consultant
        </figcaption>
      </figure>
      <div>
        <h1>
          work on your terms
          {[<br key={v4()} />, 'and ']}
          <strong>make money</strong>
          &nbsp;online
        </h1>
        <p>
          Ready to enhance your earnings? Team up with us and receive up to 25%
          for each sale!
        </p>
        <button type="button">Buy Course</button>
      </div>
    </section>
  );
}

export default LandingPage;
