"use client"

// app/components/SkeletonMan.js
import styles from './SkeletonMan.module.css';
import { useState, useEffect } from 'react';

export default function ManSketch() {
  const [eyes, setEyes] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Normalize eye movement to stay inside the eye sockets
      const xMovement = ((clientX / screenWidth) - 0.5) * 8; // -4 to 4
      const yMovement = ((clientY / screenHeight) - 0.5) * 8; // -4 to 4

      setEyes({ x: xMovement, y: yMovement });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.container}>
      <svg
        viewBox="0 0 300 500"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.manSvg}
      >
        {/* Head */}
        <ellipse cx="150" cy="100" rx="50" ry="60" fill="none" stroke="#fff" strokeWidth="2" />

        {/* Eyes */}
        <circle cx="135" cy="90" r="6" fill="#fff" />
        <circle cx="165" cy="90" r="6" fill="#fff" />
        <circle
          cx={135 + eyes.x}
          cy={90 + eyes.y}
          r="3"
          fill="#fff"
        />
        <circle
          cx={165 + eyes.x}
          cy={90 + eyes.y}
          r="3"
          fill="#fff"
        />

        {/* Nose */}
        <path d="M150 95 Q145 110 150 115" fill="none" stroke="#fff" strokeWidth="2" />

        {/* Mouth */}
        <path d="M135 130 Q150 140 165 130" fill="none" stroke="#fff" strokeWidth="2" />

        {/* Neck */}
        <line x1="140" y1="160" x2="140" y2="200" stroke="#fff" strokeWidth="2" />
        <line x1="160" y1="160" x2="160" y2="200" stroke="#fff" strokeWidth="2" />

        {/* Shoulders */}
        <line x1="100" y1="200" x2="200" y2="200" stroke="#fff" strokeWidth="2" />

        {/* Chest */}
        <path
          d="M110 200 Q150 250 190 200"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />

        {/* Arms */}
        <path
          d="M100 200 Q80 240 100 280"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <path
          d="M200 200 Q220 240 200 280"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />

        {/* Ribcage */}
        <path d="M120 240 Q150 270 180 240" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M125 260 Q150 290 175 260" fill="none" stroke="#fff" strokeWidth="2" />

        {/* Spine */}
        <line x1="150" y1="200" x2="150" y2="320" stroke="#fff" strokeWidth="2" />

        {/* Pelvis */}
        <path
          d="M130 320 Q150 350 170 320"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
