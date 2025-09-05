"use client";

import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.css";

const Clock: React.FC = (): React.ReactElement => {
  // State typed explicitly
  const [time, setTime] = useState<Date>(new Date(0, 0, 0, 0, 0, 0)); // Default 0:0:0
  const [isInitial, setIsInitial] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const actualTime = new Date();
      setTime(actualTime);

      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);

      const animationTimer = setTimeout(() => {
        setIsInitial(false);
      }, 1000);

      return () => {
        clearInterval(timer);
        clearTimeout(animationTimer);
      };
    }
  }, []);

  // Extract hours, minutes, seconds
  const seconds: number = time.getSeconds();
  const minutes: number = time.getMinutes();
  const hours: number = time.getHours();

  // Degree calculations
  const secondDegrees: number = seconds * 6;
  const minuteDegrees: number = minutes * 6 + seconds * 0.1;
  const hourDegrees: number =
    (hours % 12) * 30 + minutes * 0.5 + seconds * (0.5 / 60);

  return (
    <div
      className={`${styles.clockWrapper} flex items-center justify-center w-full h-full`}
    >
      <div
        className={`${styles.clockContainer} relative w-50 h-50 rounded-full`}
        style={{ minWidth: "320px", minHeight: "320px" }}
      >
        {/* Background Image Inside Clock Face */}
        <div
          className={`${styles.clockFaceBackground} absolute inset-4 rounded-full overflow-hidden z-0`}
          style={{
            backgroundImage: 'url("/static/profile.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Clock Face Overlay */}
        <div
          className={`${styles.clockFace} absolute inset-0 rounded-full flex items-center justify-center z-10`}
        >
          {/* Hour markers */}
          {Array.from({ length: 12 }, (_, index: number) => (
            <div
              key={index}
              className={`${styles.hourMarker} absolute w-1 h-3 bg-slate-300 origin-bottom`}
              style={{
                transform: `rotate(${index * 30}deg) translateY(-130px)`,
                left: "calc(50% - 2px)",
                bottom: "calc(50%)",
              }}
            />
          ))}

          {/* Clock hands */}
          <div
            className={`${styles.hourHand} ${
              isInitial ? styles.rotate : ""
            } absolute w-2 bg-slate-200 origin-bottom`}
            style={{
              height: "80px",
              transform: `rotate(${hourDegrees}deg)`,
              left: "calc(50% - 4px)",
              bottom: "calc(50%)",
            }}
          />
          <div
            className={`${styles.minuteHand} ${
              isInitial ? styles.rotate : ""
            } absolute w-1.5 bg-slate-300 origin-bottom`}
            style={{
              height: "100px",
              transform: `rotate(${minuteDegrees}deg)`,
              left: "calc(50% - 3px)",
              bottom: "calc(50%)",
            }}
          />
          <div
            className={`${styles.secondHand} ${
              isInitial ? styles.rotate : ""
            } absolute w-0.5 bg-teal-400 origin-bottom`}
            style={{
              height: "110px",
              transform: `rotate(${secondDegrees}deg)`,
              left: "calc(50% - 1px)",
              bottom: "calc(50%)",
            }}
          />

          {/* Center dot */}
          <div
            className="absolute w-3 h-3 bg-slate-200 rounded-full"
            style={{
              top: "calc(50% - 6px)",
              left: "calc(50% - 6px)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Clock;
