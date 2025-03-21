// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import RotatingSentence from './RotatingSentence';
import { motion } from "motion/react"

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const pathVariants2 = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      delay: 2.5,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero-content">


      <div className="hero-text">
        <h1 className="name">Hi! My name is Axel. </h1>
        <div className="signature-container">
          <svg width="600" height="300" viewBox="0 0 2110 1160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="sig" filter="url(#filter0_d_1_3)">
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M175.284 109C132.784 138.333 34.4209 223.602 22.4754 333.899C7.47536 472.399 4.28408 466
                22.4754 517.399C33.9372 549.784 71.9508 564.167 86.7841 566C118.284
                569.893 147.158 536.439 155.284 523C181.284 480 191.475 425.066 196.975 394.399C201.975 375.066
                212.375 324.599 213.975 277.399C215.975 218.399 206.147 196.399 196.975 133.399C190.144 86.4734 193.787
                345.399 227.475 482.399C229.975 492.566 238.375 512.199 259.975 517.399C286.975 523.899 297.475 499.899 299.975
                499.399C302.475 498.899 316.975 477.399 329.475 428.899C341.975 380.399 349.475 365.899 371.475 339.399C388.922 318.384
                418.945 330.352 432.131 339.166C432.365 339.323 432.601 339.435 432.864 339.539C440.739 342.662 458.46 365.768 469.475
                435.399C480.675 506.199 564.142 472.566 604.475 446.899C618.142 437.066 646.275 407.399 649.475 367.399C652.647 327.758
                625.307 314.307 610.865 312.447C610.601 312.413 610.355 312.416 610.092 312.46C595.542 314.918
                561.972 334.786 568.475 394.399C580.475 504.399 659.475 473.399 660.475 472.399C661.475 471.399 748.475
                436.399 779.475 377.399C810.475 318.399 823.475 232.399 819.475 176.399C815.475 120.399 782.475 23.3989
                765.475 13.3989C748.475 3.39893 729.668 27.4567 727.475 34.3989C721.475 53.3989 688.475 77.3989 719.475
                228.399C744.166 348.666 793.372 405.562 819.134 417.246C819.369 417.353 819.565 417.471 819.767 417.63C846.422
                438.647 929.783 472.084 1013.48 386.399"
                fill="none"
                stroke="blue"
                strokeLinejoin="round"
                strokeWidth="28"
                strokeLinecap="round"
              />
              <motion.path
                variants={pathVariants2}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 3, // Wait 3 seconds before starting
                  duration: 3,
                  ease: "easeInOut",
                }}
                d="M477.475 252.399L371.475 517.399"
                fill="none"
                stroke="blue"
                strokeLinejoin="round"
                strokeWidth="28"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
        <RotatingSentence />


      </div>
    </div>
  );
};

export default Hero;
