'use client';

import React from 'react';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';

interface UseCaseCardProps {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  subheading: string;
  bullets: string[];
  className?: string;
  isVisible?: boolean;
  animationDelay?: number;
}

export default function UseCaseCard({
  id,
  title,
  image,
  imageAlt,
  subheading,
  bullets,
  className = "",
  isVisible = true,
  animationDelay = 0
}: UseCaseCardProps) {
  return (
    <Card
      variant="default"
      size="md"
      interactive
      className={`
        transition-all duration-700 ease-out flex flex-col
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
        } 
        ${className}
      `}
      style={{ 
        transitionDelay: isVisible ? `${animationDelay}ms` : '0ms'
      }}
    >
      <CardContent className="flex-1">
        {/* Image */}
        <div className="w-full h-20 md:h-40 mb-6 rounded-lg overflow-hidden bg-neutral-100">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        {/* Title */}
        <Heading level="h5" className="mb-4">
          {title}
        </Heading>
        
        {/* Subheading */}
        <Text size="sm" color="secondary" className="mb-4">
          {subheading}
        </Text>
        
        {/* Bullet Points */}
        <ul className="space-y-2 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <Text size="sm" color="secondary">
                {bullet}
              </Text>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          variant="primary" 
          size="sm" 
          href={`/contactform?usecase=${id}`}
          className="w-full"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}