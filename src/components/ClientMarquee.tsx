'use client';

import React from 'react';
import Image from 'next/image';

export default function ClientMarquee() {
  const clients = [
    { name: 'Oracle', logo: '/clientlogos/Oracle Logo.png', width: 128, height: 64 },
    { name: 'Goldman Sachs', logo: '/clientlogos/Goldman Sachs Logo.png', width: 100, height: 50 }, // Smaller
    { name: 'Citi Bank', logo: '/clientlogos/Citi Bank Logo (1).png', width: 140, height: 70 }, // Bigger
    { name: 'Google', logo: '/clientlogos/Google Logo (2).png', width: 128, height: 64 },
    { name: 'Samsung', logo: '/clientlogos/Samsung Logo.png', width: 128, height: 64 },
    { name: 'McKinsey', logo: '/clientlogos/McKinsey Company Logo.png', width: 128, height: 64 },
    { name: 'EmblemHealth', logo: '/clientlogos/EmblemHealth Logo.png', width: 140, height: 70 }, // Bigger
    { name: 'Dove', logo: '/clientlogos/Dove Logo Brand Assets.png', width: 128, height: 64 },
  ];

  // Duplicate the array for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-neutral-50 overflow-hidden">
      <div className="relative">
        {/* Slow scrolling marquee */}
        <div className="flex marquee-animate">
          {duplicatedClients.map((client, index) => (
            <div 
              key={`${client.name}-${index}`} 
              className="flex-shrink-0 mx-8 lg:mx-12"
            >
              <div className="w-32 h-16 flex items-center justify-center grayscale opacity-60 hover:opacity-80 hover:grayscale-0 transition-all duration-500">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={client.width}
                  height={client.height}
                  className="max-w-full max-h-full object-contain filter"
                  priority={index < clients.length}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}