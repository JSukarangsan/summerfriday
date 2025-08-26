'use client';

import React from 'react';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const AssessmentSection = () => {
  return (
    <section className="bg-[#eaeae3] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Header */}
            <div>
              <Heading level="h2" className="mb-6">
                Not sure where to start? Take our diagnostic assessment
              </Heading>
            </div>

            {/* What You'll Get Section */}
            <div className="space-y-6">
              <Heading level="h5" className="mb-4">
                What you'll get:
              </Heading>
              
              <div className="space-y-4">
                <div className="border-t border-neutral-300 pt-4">
                  <Text size="base" color="secondary">
                    An objective numerical score for your use of AI, benchmarked against an AI maturity curve
                  </Text>
                </div>
                
                <div className="border-t border-neutral-300 pt-4">
                  <Text size="base" color="secondary">
                    A list of detailed recommendations and opportunities for AI to improve performance, tailored to your company and teams
                  </Text>
                </div>
                
                <div className="border-t border-neutral-300 pt-4">
                  <Text size="base" color="secondary">
                    A 3-month prioritized roadmap to take action on AI adoption and improvements, in Gantt chart form
                  </Text>
                </div>
                
                <div className="border-t border-neutral-300 pt-4">
                  <Text size="base" color="secondary">
                    Two consulting calls: a diagnostic kickoff meeting and a recommendations review
                  </Text>
                </div>
              </div>
            </div>

            {/* Get Started Button */}
            <div>
              <Button variant="primary" size="md" href="/booking">
                Get Started
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <Card variant="default" size="lg" className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/assessment.png" 
                  alt="AI Diagnostic Assessment Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AssessmentSection; 