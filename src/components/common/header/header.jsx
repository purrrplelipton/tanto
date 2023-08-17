import { IconMenu2 } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import { v4 } from 'uuid';
import './header.css';

function Header({ setIsOpen }) {
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 18) return setIsTop(true);
      return setIsTop(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDrawer = () => setIsOpen(true);

  return (
    <header
      style={isTop ? {} : { boxShadow: '0 6px 10px 0 hsla(0, 0%, 0%, 0.2)' }}
      className="header"
    >
      <div className="left">
        <a className="logo" href="/" target="_self" rel="nofollow noopener">
          <span>Kindle</span>
          <span>Direct</span>
          <span>Publishing</span>
        </a>
      </div>
      <div className="right">
        <ul className="main-menu">
          {[
            { href: '#home', label: 'home' },
            { href: '#introduction', label: 'about me' },
            { href: '#summary', label: 'summary' },
            { href: '#how-it-works', label: 'how it works' },
            { href: '#results', label: 'results' },
          ].map((i) => (
            <li key={v4()}>
              <a href={i.href}>{i.label}</a>
            </li>
          ))}
        </ul>
        <button
          onClick={openDrawer}
          className="hamburger"
          type="button"
          aria-label="Open drawer"
        >
          <IconMenu2 />
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default Header;
