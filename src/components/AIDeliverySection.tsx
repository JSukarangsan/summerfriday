'use client';

import React from 'react';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function AIDeliverySection() {
  const phases = [
    {
      title: "Audit & Strategize",
      week: "Week 0–1",
      description: "Match with the right team, define KPIs, and securely share data to kick off prototyping."
    },
    {
      title: "Prototype",
      week: "Week 2",
      description: "Deliver a working agent in days, with fast feedback loops and initial tool integration."
    },
    {
      title: "Roadmap",
      week: "Week 3",
      description: "Build a flexible delivery plan based on business needs, team capacity, and integration constraints."
    },
    {
      title: "Sprints",
      week: "Weeks 4-6",
      description: "Co-build the agent, deliver weekly progress, and transfer knowledge to internal teams."
    },
    {
      title: "Ongoing Support",
      week: "Optional",
      description: "Provide MLOps support, model optimization, and scale capabilities as usage grows."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg 
          className="absolute bottom-0 left-0 w-full h-full" 
          viewBox="0 0 1200 400" 
          preserveAspectRatio="none"
        >
          <path
            d="M0,350 C300,320 600,200 900,120 C1050,70 1150,50 1200,40"
            stroke="#7de888"
            strokeWidth="3"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,380 C250,350 500,280 800,180 C950,130 1100,80 1200,60"
            stroke="#7de888"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 bg-gradient-to-r from-blue-500 to-blue-600">
            How we work
          </div>
          <Heading level="h2" align="center" className="mb-4">
            AI Delivery Process
          </Heading>
          <Text size="base" align="center" color="secondary" className="max-w-3xl mx-auto">
            From idea to embedded agent in weeks, not quarters.
          </Text>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="lg:hidden absolute left-6 top-6 bottom-0 w-0.5 bg-gray-200 last:hidden"></div>
                
                <div className="flex lg:justify-center mb-3 lg:mb-0">
                  <div className="w-12 h-12 bg-[#7de888] rounded-full flex items-center justify-center text-white font-bold text-sm relative z-20 shadow-lg lg:absolute lg:-top-6">
                    {index + 1}
                  </div>
                </div>

                <Card variant="elevated" size="md" className="lg:ml-0 ml-16 lg:mt-0 -mt-9 flex flex-col h-full">
                  <CardContent>
                    <div className="inline-block bg-neutral-100 text-neutral-700 px-2 py-1 rounded-full text-xs font-medium mb-2 w-fit">
                      {phase.week}
                    </div>
                    
                    <Heading level="h5" className="mb-2">
                      {phase.title}
                    </Heading>
                    
                    <Text size="sm" color="secondary" className="mt-auto">
                      {phase.description}
                    </Text>
                  </CardContent>
                </Card>

                {index < phases.length - 1 && (
                  <div className="lg:hidden absolute left-6 top-6 w-0.5 h-16 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <Button variant="primary" size="lg" href="/booking">
            Book a strategy session
          </Button>
        </div>
      </div>
    </section>
  );
}