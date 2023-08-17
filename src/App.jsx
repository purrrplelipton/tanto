import React from 'react';
import { Footer, Header, Main } from './components';
import { Drawer } from './components/common';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Footer />
    </>
  );
}

export default App;
