import { tantoWebp } from '@assets';
import React from 'react';
import './introduction.css';

function Introduction() {
  return (
    <section id="introduction" className="introduction">
      <div className="content">
        <h2>
          Hello!
          <br />
          I&apos;m <span>Tantoluwa Sogbesan</span>
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde sint
          debitis nam esse exercitationem pariatur!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint sit
          maxime reiciendis incidunt, libero quibusdam odio iste hic autem
          possimus eveniet repellat blanditiis fuga!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor
          quo, numquam consequatur consectetur tempora minus reprehenderit
          beatae? Eveniet.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad natus,
          quas magni ipsam facilis maxime sequi consequatur tempora esse
          adipisci praesentium dignissimos. Harum perferendis repudiandae saepe
          delectus sed. Cumque, tempore unde.
        </p>
      </div>
      <figure>
        <img
          src={tantoWebp}
          alt="a portrait of sogbesan tantoluwa"
          loading="eager"
          decoding="sync"
        />
        <figcaption>
          Sogbesan Tantoluwa
          <em>Affiliate Business Consultant</em>
        </figcaption>
      </figure>
    </section>
  );
}

export default Introduction;
