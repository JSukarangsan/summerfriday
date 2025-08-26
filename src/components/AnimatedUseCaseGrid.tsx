'use client';

import React, { useEffect, useRef, useState } from 'react';
import UseCaseCard from './UseCaseCard';

interface UseCase {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  subheading: string;
  bullets: string[];
  category: string;
}

interface AnimatedUseCaseGridProps {
  useCases: UseCase[];
  className?: string;
}

export default function AnimatedUseCaseGrid({ 
  useCases, 
  className = "" 
}: AnimatedUseCaseGridProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    setIsVisible(false);
    setHasAnimated(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [useCases.length, useCases.map(uc => uc.id).join(',')]);

  return (
    <div 
      ref={gridRef}
      className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ${className}`}
    >
      {useCases.map((useCase, index) => (
        <UseCaseCard
          key={useCase.id}
          id={useCase.id}
          title={useCase.title}
          image={useCase.image}
          imageAlt={useCase.imageAlt}
          subheading={useCase.subheading}
          bullets={useCase.bullets}
          isVisible={isVisible}
          animationDelay={index * 150}
        />
      ))}
    </div>
  );
}