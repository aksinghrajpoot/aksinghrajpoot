'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const Clock = () => {
   const [time, setTime] = useState(new Date());

   useEffect(() => {
     const timer = setInterval(() => {
       const date = new Date();
       const formattedTime = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
       setTime(formattedTime); // Update the time in IST every second
     }, 1000);

     return () => clearInterval(timer); // Cleanup on component unmount
   }, []);

   const seconds = time.getSeconds();
   const minutes = time.getMinutes();
   const hours = time.getHours() % 12;

   const secondDegrees = seconds * 6;
   const minuteDegrees = minutes * 6 + seconds * 0.1;
   const hourDegrees = hours * 30 + minutes * 0.5;

  return (
    <div className={`${styles.clockWrapper} flex items-center justify-center w-full h-full`}>
      <div className={`${styles.clockContainer} relative w-80 h-80 rounded-full`}>
        {/* Background Image Inside Clock Face */}
        <div className={`${styles.clockFaceBackground} absolute inset-4 rounded-full overflow-hidden z-0`}>
          <Image 
            src="/static/profile.png" // Replace with your image path
            alt="Clock Background"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="absolute inset-0"
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
      </div>
    </div>
  );
};

export default Clock;
