'use client';

import { useEffect, useState } from 'react';

const roles = ['Front-End Developer With Full-Stack Foundation.', 'React Developer.', 'Next.js Developer.', 'Bug solver.', 'Web Developer.'];

export default function TypedText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const typeEffect = () => {
      if (isDeleting) {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(
      typeEffect,
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="text-xl text-[#a78bfa] mb-4 min-h-8 after:content-['|'] after:animate-[pulse_1s_infinite]">
      {text}
    </div>
  );
}