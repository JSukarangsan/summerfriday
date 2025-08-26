import React from 'react';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function DifferenceSection() {
  const comparisonData = [
    {
      vendors: "Focus on models or tools",
      summerFriday: "Focus on teams and outcomes"
    },
    {
      vendors: "Sell dashboards or copilots",
      summerFriday: "Deliver integrated, working systems"
    },
    {
      vendors: "Lock you into long, 6 month+ engagements",
      summerFriday: "Can deliver progress incrementally, often within weeks."
    },
    {
      vendors: "Require client-side implementation",
      summerFriday: "We build, guide, and coach your team end-to-end"
    },
    {
      vendors: "Leave you with POCs",
      summerFriday: "Leave you with adopted, governed workflows"
    },
    {
      vendors: "Generalist AI builders",
      summerFriday: "Deep domain fluency across product, design, eng, ops"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 bg-gradient-to-r from-blue-500 to-blue-600">
            The Summer Friday Difference
          </div>
          <Heading level="h2" align="center" className="mb-4">
            Not your typical AI Partner
          </Heading>
          <Text size="base" align="center" color="secondary" className="max-w-4xl mx-auto">
            We're not just another AI vendor. We're a team of experts who understand how modern teams work and what it takes to succeed with AI.
          </Text>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden">
          {/* Left Column - Most AI Vendors */}
          <Card variant="outlined" className="rounded-r-none border-r-0">
            <CardHeader className="bg-neutral-50">
              <Heading level="h5">
                Most AI Vendors
              </Heading>
            </CardHeader>
            <CardContent className="divide-y divide-neutral-200">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600">✕</span>
                  </div>
                  <Text size="sm" color="secondary">
                    {item.vendors}
                  </Text>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Right Column - Summer Friday */}
          <Card variant="outlined" className="rounded-l-none">
            <CardHeader className="bg-neutral-50">
              <Heading level="h5">
                Summer Friday
              </Heading>
            </CardHeader>
            <CardContent className="divide-y divide-neutral-200">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600">✓</span>
                  </div>
                  <Text size="sm" color="secondary">
                    {item.summerFriday}
                  </Text>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}