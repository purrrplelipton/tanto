import React from 'react';
import { v4 } from 'uuid';
import './footer.css';

function Footer() {
  return (
    <footer id="footer" className="page-footer">
      <div className="custom-shape-divider-top-1691837205">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill" />
        </svg>
      </div>
      <div className="footer-content">
        <div className="left">
          <a
            className="logo"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Kindle</span>
            <span>Direct</span>
            <span>Publishing</span>
          </a>
          <p className="tagline">
            Copyright
            <sup>&copy;</sup> 2023 Amazon
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
      </div>
    </footer>
  );
}

export default Footer;
