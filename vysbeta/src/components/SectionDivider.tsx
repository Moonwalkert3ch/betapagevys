import React, { useState, useEffect } from 'react';
import type { CSSProperties } from 'react';

interface SectionDividerProps {
  text?: string;
  fontSize?: string;
  color?: string;
  style?: CSSProperties;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  text = 'Section Title',
  fontSize = '2rem',
  color = '#4B0082',
  style = {},
}) => {
  const [borderColor, setBorderColor] = useState('#A1C9FF');

  useEffect(() => {
    const colors = ['#A1C9FF', '#4B0082'];
    let index = 0;

    const interval = setInterval(() => {
      setBorderColor(colors[index % colors.length]);
      index++;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2
      style={{
        fontSize,
        fontWeight: 'bold',
        marginBottom: '1rem',
        color,
        borderTop: `2px solid ${borderColor}`,
        paddingTop: '0.5rem',
        textAlign: 'center',
        transition: 'border-color 0.3s ease-in-out',
        ...style,
      }}
    >
      {text}
    </h2>
  );
};

export default SectionDivider;
