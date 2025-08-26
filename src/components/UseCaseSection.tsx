'use client';

import React, { useState } from 'react';
import AnimatedUseCaseGrid from './AnimatedUseCaseGrid';
import { useCasesData } from '@/data/usecases';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

export default function UseCaseSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredUseCases = selectedCategory === 'all' 
    ? useCasesData.useCases 
    : useCasesData.useCases.filter(useCase => useCase.category === selectedCategory);

  return (
    <section id="use-cases" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 bg-gradient-to-r from-blue-500 to-blue-600">
            What we build
          </div>
          <Heading level="h2" align="center" className="mb-4">
            Common AI Solutions by Function
          </Heading>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant="primary"
            size="sm"
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? 'opacity-100' : 'opacity-70'}
          >
            All Use Cases
          </Button>
          {useCasesData.categories.map((category) => (
            <Button
              key={category.id}
              variant="primary"
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? 'opacity-100' : 'opacity-70'}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Use Cases Grid */}
        <AnimatedUseCaseGrid 
          useCases={filteredUseCases}
          className="max-w-6xl mx-auto"
        />

      </div>
    </section>
  );
}