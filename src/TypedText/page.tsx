'use client';

import { useEffect, useState } from 'react';

const roles = ['Front-End Developer With Full-Stack Foundation.', 'Web Developer.', 'React Developer.', 'Bug Solver', 'Next.js Developer'];

export default function TypedText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    let timeoutDuration = isDeleting ? 50 : 100;
    const shouldPause = !isDeleting && charIndex === currentRole.length;

    if (shouldPause) {
      timeoutDuration = 2000;
    }

    const timer = setTimeout(() => {
      if (shouldPause) {
        setIsDeleting(true);
      } else if (isDeleting) {
        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="text-xl text-[#a78bfa] mb-4 min-h-8 after:content-['|'] after:animate-[pulse_1s_infinite]">
      {text}
    </div>
  );
}