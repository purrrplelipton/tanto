import { IconMenu2 } from '@tabler/icons-react';
import React from 'react';
import { v4 } from 'uuid';
import './header.css';

function Header() {
  const [isTop, setIsTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 32) return setIsTop(true);
      return setIsTop(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={isTop ? {} : { boxShadow: '0 4px 8px 0 hsla(0, 0%, 0%, 0.1)' }}
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
        <nav className="main-menu">
          <ul>
            {[
              { id: v4(), href: '#home', label: 'home' },
              { id: v4(), href: '#introduction', label: 'introduction' },
              { id: v4(), href: '#summary', label: 'summary' },
              { id: v4(), href: '#buying-guide', label: 'buying guide' },
              { id: v4(), href: '#results', label: 'results' },
              { id: v4(), href: '#conclusion', label: 'conclusion' },
            ].map((i) => (
              <li key={i.id}>
                <a href={i.href}>{i.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hamburger" type="button" aria-label="open nav">
          <IconMenu2 />
        </button>
      </div>
    </header>
  );
}
export default Header;
