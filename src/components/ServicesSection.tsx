'use client';

import React from 'react';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function ServicesSection() {
  return (
    <div className="bg-neutral-50 w-full">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] py-12 md:py-[100px]">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 w-full gap-6 lg:gap-0">
          {/* Title */}
          <div className="max-w-[736px]">
            <Heading level="h2" className="uppercase">
              We help you build better digital products, together
            </Heading>
          </div>
          
          {/* Learn More Button */}
          <div className="flex-shrink-0">
            <Button variant="primary" size="md">
              Learn More
            </Button>
          </div>
        </div>

        {/* Cards Row */}
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          {/* Card 1: Work Smarter, Ship Faster */}
          <Card variant="default" className="flex-1 bg-neutral-900 text-white min-h-[400px] lg:h-[468px]">
            <CardContent className="flex flex-col gap-6 h-full">
              {/* Icon */}
              <div className="w-[58px] h-[58px]">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <span className="text-neutral-900 text-2xl">🧱</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-3">
                <Heading level="h5" color="primary" className="text-white">
                  Work Smarter, Ship Faster
                </Heading>
                <Text size="sm" className="text-neutral-200">
                  Streamline your workflows, reduce rework, and speed up delivery by aligning your teams around modern, repeatable practices.
                </Text>
              </div>
            </CardContent>
          </Card>

          {/* Card 2: Leverage your Design System */}
          <Card variant="default" className="flex-1 bg-neutral-900 text-white min-h-[400px] lg:min-h-[468px]">
            <CardContent className="flex flex-col gap-6 h-full">
              {/* Icon */}
              <div className="w-[58px] h-[58px]">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <span className="text-neutral-900 text-2xl">💻</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-3">
                <Heading level="h5" color="primary" className="text-white">
                  Leverage your Design System
                </Heading>
                <Text size="sm" className="text-neutral-200">
                  We evolve your system architecture, tokens, and documentation so teams can build faster, and actually want to use it. Turn your design system into a true force multiplier by moving from fragmented assets to a cohesive, scalable platform.
                </Text>
              </div>
            </CardContent>
          </Card>

          {/* Card 3: Up-level your Team */}
          <Card variant="default" className="flex-1 bg-neutral-900 text-white min-h-[400px] lg:h-[468px]">
            <CardContent className="flex flex-col gap-6 h-full">
              {/* Icon */}
              <div className="w-[58px] h-[58px]">
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                  <span className="text-neutral-900 text-2xl">🤝</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-3">
                <Heading level="h5" color="primary" className="text-white">
                  Up-level your Team
                </Heading>
                <Text size="sm" className="text-neutral-200">
                  We coach and collaborate directly with your team to improve skills, confidence, and velocity—without creating new dependencies
                </Text>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}