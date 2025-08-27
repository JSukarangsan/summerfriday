'use client';

import React from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { Card, CardContent } from '@/components/ui/Card';

const WorkflowSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
                {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Heading level="h2" align="center" className="mb-4">
            AI Strategy and solutions that amplify your team
          </Heading>
          <Text size="base" align="center" color="secondary" className="max-w-4xl mx-auto">
            We help companies turn AI from hype into usable strategy — and then build the systems that make it real.
</Text>
        </div>
        
        {/* Image Above Fortune500s Text */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="w-full max-w-lg rounded-lg overflow-hidden bg-white">
            <div className="flex items-center justify-center p-2">
              <Image
                src="/image-14.png"
                alt="AI Strategy Implementation"
                width={500}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* First Row - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Text Content */}
          <div className="flex flex-col gap-12">
            {/* Header Section */}
            <div className="flex flex-col gap-6">
              <Heading level="h4" color="primary">
                Leverage proven practices from Fortune500s and progressive startups
              </Heading>
              <Text size="base" color="secondary">
                Over 75% of AI projects fail because they focus on tools instead of systems. Flashy demos instead of outcomes. We help you turn pilots into measurable progress.
              </Text>
            </div>

            {/* Bullet Points Section */}
            <div className="flex flex-col gap-3">
              <hr className="border-t border-neutral-200 w-full" />
              <Text size="base" color="secondary">
                Teams that operationalize AI move 30–50% faster.
              </Text>
              <hr className="border-t border-neutral-200 w-full" />
              <Text size="base" color="secondary">
                Every hour saved creates capacity for higher-value work.
              </Text>
              <hr className="border-t border-neutral-200 w-full" />
              <Text size="base" color="secondary">
                Systems designed to scale become long-term competitive advantage.
              </Text>
            </div>
          </div>

          {/* Right side - Team Image */}
          <div className="flex justify-center items-center">
            <div className="w-full h-96 rounded-lg overflow-hidden bg-white">
              <div className="flex items-center justify-center h-full p-2">
                <Image
                  src="/headshots1.png"
                  alt="Professional team collaboration"
                  width={600}
                  height={400}
                  className="max-w-full max-h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* AI Logos Image */}
          <div className="w-full lg:order-1">
            <Card variant="default" size="lg" className="w-full h-96 shadow-lg">
              <CardContent className="flex items-center justify-center h-full p-2">
                <Image
                  src="/context_logos.png"
                  alt="AI Tools and Platforms - Context logos including leading AI services and platforms"
                  width={600}
                  height={400}
                  className="max-w-full max-h-full object-contain"
                  priority
                />
              </CardContent>
            </Card>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-12 lg:order-2">
            {/* Header Section */}
            <div className="flex flex-col gap-6">
              <Heading level="h4" color="primary">
                Built using <em>your</em> data
              </Heading>
              <Text size="base" color="secondary">
                We identify high-leverage areas to introduce automation, such as AI that reduce manual effort and unlock faster cycles, without breaking your process.
              </Text>
            </div>

            {/* Bullet Points Section */}
            <div className="flex flex-col gap-3">
              <hr className="border-t border-neutral-200 w-full" />
              <Text size="base" color="secondary">
                Modular systems designed for real-time performance and rapid iteration
              </Text>
              
              <hr className="border-t border-neutral-200 w-full" />
              <Text size="base" color="secondary">
                Secure, governed, and built to match your team's workflows
              </Text>
              
              <hr className="border-t border-neutral-200 w-full" />
              <Text size="base" color="secondary">
                Compatible with your cloud, data, and productivity platforms
              </Text>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;