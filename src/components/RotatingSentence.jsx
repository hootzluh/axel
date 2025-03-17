import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Artist.", "Animator.", "Designer."];

const RotatingSentence = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Change word every 2 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <p style={{ fontSize: '2em', fontWeight: 'bold', display: 'inline-block' }}>
      I'm a 3D{' '}
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '170px',  // Adjust width to fit your longest word
          height: '1.3em',  // Set height to prevent layout shifts
          verticalAlign: 'bottom',
          overflow: 'hidden',
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.span
            key={words[currentIndex]}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
            }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
};

export default RotatingSentence;
