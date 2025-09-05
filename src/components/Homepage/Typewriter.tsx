'use client';

import React, { useState, useEffect } from 'react';

const Typewriter: React.FC = () => {
  const roles: string[] = ["UI/UX Designer", "Software Developer", "SEO Strategist"];
  const [displayText, setDisplayText] = useState<string>("");
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole: string = roles[roleIndex];

      if (!isDeleting) {
        // Typing mode
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(150); // Normal typing speed
        } else {
          // Pause at the end before deleting
          setIsDeleting(true);
          setTypingSpeed(1000); // Pause time
        }
      } else {
        // Deleting mode
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTypingSpeed(75); // Faster when deleting
        } else {
          // Move to next role
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <div>
      <div>
        {displayText}
        <span className="inline-block w-[2px] h-3 bg-purple-500/70 ml-1 animate-pulse"></span>
      </div>
    </div>
  );
};

export default Typewriter;
