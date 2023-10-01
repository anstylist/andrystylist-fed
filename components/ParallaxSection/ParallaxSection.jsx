'use client'
import React, { useState, useEffect } from 'react';

const ParallaxSection = ({ children, scrollMultiplier, ...props }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.scrollY);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setScrollY(window.scrollY);
      });
    };
  }, []);

  const transform = `translateY(${scrollY * scrollMultiplier}px)`;

  return (
    <section
      style={{
        position: 'relative',
        transform,
      }}

      {...props}
    >
      {children}
    </section>
  );
};

export default ParallaxSection;
