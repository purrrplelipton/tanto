import { kdpLogo, summary } from '@assets';
import React from 'react';
import './summary.css';

function Summary() {
  return (
    <section id="summary" className="summary">
      <h2>
        What Exactly is
        <br />
        Amazon KDP
      </h2>
      <img
        src={kdpLogo}
        alt="Self-publish eBooks and paperbacks with Amazon Kindle Direct Publishing for free"
        className="kdp-logo"
      />
      <p>
        The Amazon Kindle Direct Publishing, or Amazon KDP, is a straightforward
        business model offered by&nbsp;
        <a
          style={{ color: '#FF9900' }}
          href="http://amazon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon.com
        </a>
        . It serves as a dedicated platform for publishing a diverse range of
        content, including extensive and concise written works, as well as
        minimal or content-light books.
      </p>
      <p>
        This avenue empowers individuals to readily share their concise written
        pieces with Amazon&apos;s global readership, resulting in consistent
        royalties for every purchase or online perusal. Remarkably, the
        compensation isn&apos;t solely tied to purchases; compensation also
        accrues when content is read digitally. This distinctive feature
        distinguishes Amazon KDP from traditional models.
      </p>
      <p>
        Additionally, creators can freely release items such as notebooks,
        sketchbooks, logbooks, coloring books, puzzle books, and activity books.
        These offerings effortlessly garner attention from Amazon&apos;s vast
        base of over 300 million active customers worldwide, resulting in
        widespread patronage. The advantageous aspect extends to payments as
        well. Earnings are seamlessly directed into your bank account,
        irrespective of your geographic location. This global accessibility
        ensures that creators receive their due rewards from their Amazon KDP
        endeavors.
      </p>
      <a
        className="get-started"
        href="https://wa.me/+2348087823890"
        target="_blank"
        rel="noopener noreferrer"
      >
        Begin Your Earning Journey
      </a>
      <p>
        Book sales alone account for $280 billion of Amazon&apos;s worldwide
        revenue, Why not get your cut from it? Amazon KDP empowers you to
        independently publish ebooks, paperbacks, and hardcovers. It grants you
        direct entry to Amazon&apos;s book catalog, enabling you to craft a
        dedicated product page for your creation.
      </p>
      <p>
        This platform also extends the choice to widen your book&apos;s reach
        globally, enhancing its accessibility to a vast international
        readership. By using Kindle Direct Publishing, you retain complete
        ownership of your books, a departure from the norm in traditional
        publishing houses.
      </p>
      <figure>
        <img src={summary} alt="" />
        <figcaption>Join Today & Set Yourself Up for a Rich Future</figcaption>
      </figure>
    </section>
  );
}

export default Summary;
