import React from 'react';
import { v4 } from 'uuid';
import './footer.css';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="left">
        <a className="logo" href="/" target="_blank" rel="noopener noreferrer">
          Tantoluwa
        </a>
        <p className="tagline">
          Copyright
          <sup>&copy;</sup> 2023 Tantoluwa &amp; Co.
        </p>
      </div>
      <ul className="right">
        {[
          {
            id: v4(),
            href: '/terms-and-conditions',
            label: 'terms & conditions',
          },
          {
            id: v4(),
            href: '/privacy-policy',
            label: 'privacy policy',
          },
          {
            id: v4(),
            href: '/gdpr',
            label: 'gdpr',
          },
        ].map((i) => (
          <li key={i.id}>
            <a href={i.href} target="_blank" rel="noopener noreferrer">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
