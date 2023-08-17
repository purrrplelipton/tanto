import { IconX } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import './drawer.css';

function Drawer({ isOpen, setIsOpen }) {
  const closeDrawer = () => setIsOpen(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style = `
        height: 100vh !important;
        overflow: hidden !important;
      `;
    } else {
      document.body.removeAttribute('style');
    }
  }, [isOpen]);

  React.useEffect(() => {
    const navLinks = document.querySelectorAll('#mobile-drawer li a');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => setIsOpen(false));
    });
  }, []);

  return (
    <>
      {isOpen && (
        <i
          className="backdrop"
          role="presentation"
          tabIndex={-1}
          onClick={closeDrawer}
        />
      )}
      <ul
        id="mobile-drawer"
        className={`drawer ${isOpen ? 'visible' : 'hidden'}`}
      >
        <li>
          <button onClick={closeDrawer} type="button" aria-label="Close menu">
            <IconX />
          </button>
        </li>
        <li>
          <a href="#home">Home</a>
          <a href="#introduction">Introduction</a>
          <a href="#summary">Summary</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#results">Results</a>
        </li>
      </ul>
    </>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Drawer;
