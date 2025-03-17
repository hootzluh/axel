// src/App.jsx
import React, { useEffect, useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const onWheel = (e) => {
      // Prevent vertical scroll and translate deltaY into horizontal scroll
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };
    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div ref={containerRef} className="horizontal-container">
      <section className="section hero">
        <Hero />
      </section>
      <section className="section about">
        <About />
      </section>
      <section className="section projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
