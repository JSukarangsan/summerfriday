import React from 'react';

interface EyebrowProps {
  text: string;
  className?: string;
}

export default function Eyebrow({ text, className = "" }: EyebrowProps) {
  return (
    <div className={`text-sm font-medium text-gray-600 uppercase tracking-wide mb-2 ${className}`}>
      {text}
    </div>
  );
}