'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const Clock = () => {
  const [time, setTime] = useState(new Date()); // Initial value for time
  const [imageLoaded, setImageLoaded] = useState(false); // State to track if the image is loaded

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const formattedTime = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Convert time to angles for clock hands
  const getClockHandAngles = (time) => {
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondDegrees = seconds * 6;
    const minuteDegrees = minutes * 6 + seconds * 0.1;
    const hourDegrees = (hours % 12) * 30 + minutes * 0.5 + seconds * (0.5 / 60);

    return { secondDegrees, minuteDegrees, hourDegrees };
  };

  const { secondDegrees, minuteDegrees, hourDegrees } = getClockHandAngles(time);

  return (
    <div className={`${styles.clockWrapper} flex items-center justify-center w-full h-full`}>
      <div className={`${styles.clockContainer} relative w-80 h-80 rounded-full`} style={{ minWidth: '320px', minHeight: '320px' }}>
        
        {/* Background Image Inside Clock Face */}
        <div className={`${styles.clockFaceBackground} absolute inset-4 rounded-full overflow-hidden z-0`}>
          <Image 
            src="/static/profile.png"
            alt="Clock Background"
            fill
            quality={90}
            className="absolute inset-0 object-cover"
            onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the image is fully loaded
          />
        </div>

        {/* Clock Face Overlay */}
        <div className={`${styles.clockFace} absolute inset-0 rounded-full flex items-center justify-center z-10`}>
          {/* Hour markers */}
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className={`${styles.hourMarker} absolute w-1 h-3 bg-slate-300 origin-bottom`}
              style={{
                transform: `rotate(${index * 30}deg) translateY(-130px)`,
                left: 'calc(50% - 2px)',
                bottom: 'calc(50%)',
              }}
            />
          ))}

          {/* Clock hands */}
          <div
            className={`${styles.hourHand} absolute w-2 bg-slate-200 origin-bottom`}
            style={{
              height: '80px',
              transform: `rotate(${hourDegrees}deg)`,
              left: 'calc(50% - 4px)',
              bottom: 'calc(50%)',
            }}
          />
          <div
            className={`${styles.minuteHand} absolute w-1.5 bg-slate-300 origin-bottom`}
            style={{
              height: '100px',
              transform: `rotate(${minuteDegrees}deg)`,
              left: 'calc(50% - 3px)',
              bottom: 'calc(50%)',
            }}
          />
          <div
            className={`${styles.secondHand} absolute w-0.5 bg-teal-400 origin-bottom`}
            style={{
              height: '110px',
              transform: `rotate(${secondDegrees}deg)`,
              left: 'calc(50% - 1px)',
              bottom: 'calc(50%)',
            }}
          />

          {/* Center dot */}
          <div 
            className="absolute w-3 h-3 bg-slate-200 rounded-full"
            style={{
              top: 'calc(50% - 6px)',
              left: 'calc(50% - 6px)',
            }}
          />
        </div>

        {/* Show the image only if it's loaded */}
        {imageLoaded && (
          <div className={`${styles.clockFaceBackground} absolute inset-4 rounded-full overflow-hidden z-0`}>
            <Image 
              src="/static/profile.png"
              alt="Clock Background"
              fill
              quality={90}
              className="absolute inset-0 object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Clock;
