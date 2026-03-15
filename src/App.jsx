import React, { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Creative } from './components/Creative';
import { Contact } from './components/Contact';

function App() {
  return (
    <ReactLenis root>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Works />
          <Skills />
          <Education />
          <Certificates />
          <Creative />
          <Contact />
        </main>
      </div>
    </ReactLenis>
  );
}

export default App;
