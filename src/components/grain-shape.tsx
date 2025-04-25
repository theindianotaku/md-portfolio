// src/components/grain-shapes.tsx
'use client';

import React, { useState, useEffect } from 'react';

type Shape = 'circle' | 'rectangle' | 'triangle';

interface GrainShapeProps {
  count?: number;
  shapes?: Shape[];
  className?: string;
  seed?: number;
}

// Simple deterministic random number generator with a fixed seed
function seededRandom(seed: number) {
  let value = seed;
  return function () {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export default function GrainShapes({
  count = 8,
  shapes = ['circle', 'rectangle', 'triangle'],
  className = '',
  seed = 12345, // Default seed for consistent randomness
}: GrainShapeProps) {
  // This ensures client-side only rendering to avoid hydration issues
  const [isClient, setIsClient] = useState(false);
  const [filterId] = useState(
    `grain-shapes-${Math.random().toString(36).substring(2, 9)}`,
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing during SSR
  }

  // Create a deterministic random generator
  const random = seededRandom(seed);
  const shapesArray = [];

  for (let i = 0; i < count; i++) {
    const shapeIndex = Math.floor(random() * shapes.length);
    const shapeType = shapes[shapeIndex];
    const x = random() * 100;
    const y = random() * 100;
    const size = 50 + random() * 150;
    const rotation = random() * 360;

    let shapeElement;
    const uniqueId = `${filterId}-${i}`;

    switch (shapeType) {
      case 'circle':
        shapeElement = (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2}
            className="accent-shape"
            filter={`url(#${uniqueId})`}
          />
        );
        break;
      case 'rectangle':
        shapeElement = (
          <rect
            width={size}
            height={size * 0.6}
            className="accent-shape"
            filter={`url(#${uniqueId})`}
          />
        );
        break;
      case 'triangle':
        const points = `${size / 2},0 ${size},${size} 0,${size}`;
        shapeElement = (
          <polygon
            points={points}
            className="accent-shape"
            filter={`url(#${uniqueId})`}
          />
        );
        break;
    }

    shapesArray.push(
      <div
        key={i}
        className="absolute"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        }}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <defs>
            <filter id={uniqueId}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="5"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
          {shapeElement}
        </svg>
      </div>,
    );
  }

  return (
    <>
      <style jsx global>{`
        .accent-shape {
          fill: var(--highlight-accent);
          opacity: 0.12;
        }

        .dark .accent-shape {
          opacity: 0.08;
        }
      `}</style>
      <div
        className={`fixed inset-0 overflow-hidden pointer-events-none -z-20 ${className}`}
      >
        {shapesArray}
      </div>
    </>
  );
}
