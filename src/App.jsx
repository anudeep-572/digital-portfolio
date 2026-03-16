import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Works } from './components/Works';
import { Training } from './components/Training';
import { Skills } from './components/Skills';

import { Certificates } from './components/Certificates';
import { Creative } from './components/Creative';
import { Contact } from './components/Contact';
import { FloatingCV } from './components/FloatingCV';

function App() {
  return (
    <ReactLenis root>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Works />
          <Training />
          <Skills />

          <Certificates />
          <Creative />
          <Contact />
        </main>
        <FloatingCV />
      </div>
    </ReactLenis>
  );
}

export default App;
