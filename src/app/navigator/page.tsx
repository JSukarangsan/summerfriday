'use client';

import React, { useEffect, useState } from 'react';
import type { Metadata } from "next";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

// Countdown component
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    const timeLeft = {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
  );
}

export default function NavigatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Heading level="h1" align="center" className="mb-6">
            Finally get clarity on <em>your</em> AI strategy
          </Heading>

          <Text size="xl" align="center" color="secondary" className="max-w-4xl mx-auto mb-10">
            AI is reshaping how teams work—but knowing where to start is often the hardest part. The real challenge isn't the technology itself, it's identifying the right problems to solve. <strong>Navigator™</strong> helps you cut through the noise, align around real opportunities, and move forward with clarity and confidence.
          </Text>

          <a
            href="#details"
            className="mt-8 inline-flex flex-col items-center text-neutral-800 text-xl font-medium hover:opacity-70 transition-opacity"
          >
            Learn More
            <svg
              className="mt-2 w-8 h-8 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* What You Get Section */}
      <section id="details" className="py-16 lg:py-24 bg-[#eaeae3]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Big Copy */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-6 bg-gradient-to-r from-blue-500 to-blue-600">
              What is Navigator™?
            </div>
            <Text size="xl" color="primary" className="font-medium leading-snug">
              A focused, pre-researched workshop to identify where AI can deliver real results inside your team. We'll map your workflows, assess readiness, and surface high-impact AI automation or augmentation opportunities tailored to your team's tools, data, and goals.
            </Text>
          </div>

          {/* Right Details */}
          <div>
            <Text size="xl" color="primary" className="font-medium leading-snug mb-6">What you get</Text>
            <ul className="list-none pl-0 space-y-5">
              {[
                '2-hour workshop to uncover AI ROI',
                'Clear opportunity map & investment rationale',
                'Chart the path for implementation',
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-neutral-900 text-2xl mr-4 leading-none">→</span>
                  <Text size="base" color="primary" className="leading-relaxed">{item}</Text>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="primary" size="lg" href="/booking">
            Book a Navigator Session
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 bg-gradient-to-r from-blue-500 to-blue-600">
              How it works
            </div>
            <Heading level="h2" align="center" className="mb-4">
              The Navigator<sup className="ml-0.5 text-sm align-super">TM</sup> Process
            </Heading>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop horizontal line */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-neutral-200"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
              {[
                {
                  title: 'Understand your priorities',
                  description: 'We start with alignment on your goals, current tools & data, and where your team is feeling the most friction.'
                },
                {
                  title: 'Workflow mapping',
                  description: 'Together, we map the key steps in your workflow—looking for places where AI can automate, accelerate, or augment the work.'
                },
                {
                  title: 'Use case assessment',
                  description: 'We apply proven use cases to your real-world context—prioritizing and surfacing opportunities where AI can make a measurable impact.'
                },
                {
                  title: 'Action brief',
                  description: 'You walk away with a brief on: top opportunities, a metric-driven business rationale, and path to implementation.'
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  {/* Mobile vertical line */}
                  <div className="lg:hidden absolute left-6 top-6 bottom-0 w-0.5 bg-neutral-200 last:hidden"></div>

                  {/* Step number dot */}
                  <div className="flex lg:justify-center mb-3 lg:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-20 shadow-lg lg:absolute lg:-top-6">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <Card variant="default" className="lg:pt-8 lg:px-6 lg:pb-6 hover:shadow-xl transition-shadow duration-300 lg:ml-0 ml-16 lg:mt-0 -mt-9 flex flex-col h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Heading level="h5" className="mb-2 leading-tight">
                        {step.title}
                      </Heading>
                      <Text size="sm" color="secondary" className="leading-snug mt-auto">
                        {step.description}
                      </Text>
                    </CardContent>
                  </Card>

                  {/* mobile connector line */}
                  {index < 3 && (
                    <div className="lg:hidden absolute left-6 top-6 w-0.5 h-16 bg-neutral-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Data Section */}
      <section className="py-16 lg:py-24 bg-[#eaeae3]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <Heading level="h2" align="center" className="mb-6">
            Your Tools, Your Data
          </Heading>
          <Text size="base" color="primary" className="leading-relaxed max-w-3xl mx-auto mb-12">
            During the session, we assess how your current stack—content systems, design assets, research docs, marketing data and other organizational context—can be connected and enhanced by AI.
          </Text>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {[
              'Figma Logo Icon.png',
              'Notion Logo.png',
              'Airtable Logo (1).png',
              'GitHub Logo.png',
              'UserTesting Logo.png',
              'Loom Logo Brand Assets.png',
              'Google Logo (1).png',
              'Coda Logo Brand Assets.png',
              'Atlassian Logo.png',
              'Storybook Logo Brand Assets.png',
            ].map((file) => (
              <div key={file} className="flex flex-col items-center">
                <img
                  src={`/tool_logos/${encodeURIComponent(file)}`}
                  alt={file}
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Opportunity Framework Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div>
            <Heading level="h2" className="mb-6">
              Not all AI use cases are created equal
            </Heading>
            <Text size="base" color="primary" className="leading-relaxed">
              We use a simple but powerful framework to help your team quickly evaluate where AI can actually drive results.<br className="hidden sm:block"/>
              You'll spot quick wins, high-value bets, and what's not worth pursuing—before wasting time on the wrong things.
            </Text>
          </div>

          {/* Image Column */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">
            <img
              src="/2x2.png"
              alt="AI Opportunity 2×2 Framework quadrant"
              className="w-full max-w-lg lg:max-w-xl mx-auto lg:mx-0"
            />
            <Text size="sm" color="secondary" className="mt-4 max-w-lg lg:max-w-xl">
              This becomes a shared language for prioritizing AI work across product, marketing, and ops.
            </Text>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 lg:py-24 bg-[#eaeae3]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-6 bg-gradient-to-r from-blue-500 to-blue-600">
              Case Study
            </div>
            <Heading level="h2" className="mb-6">
              From disconnected experiments to 2× faster product cycles
            </Heading>
            <Text size="base" color="primary" className="leading-relaxed mb-6">
              A fast-moving ecommerce company came to us after months of disconnected AI experiments that weren't delivering results.
            </Text>

            <ul className="list-none pl-0 space-y-3 mb-6">
              {[
                'Automated product copy creation across 5,000 SKUs',
                'Enabled on-canvas prompting integrated with their design system',
                'Reduced quality-assurance effort by 40%',
                'Saved hundreds of design and development hours'
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <Text size="base" color="primary" className="leading-relaxed">{item}</Text>
                </li>
              ))}
            </ul>

            <Text size="base" color="primary" weight="semibold">
              Result: <span className="text-red-500 font-bold">+27% revenue growth</span> and dramatically faster speed to market.
            </Text>
          </div>

          {/* Case Study Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/case%20study%20img.png"
              alt="Case study outcome graphic"
              className="w-full max-w-xl h-auto rounded-lg shadow-md object-contain"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-[#eaeae3]">
        <div className="max-w-lg mx-auto px-4">
          <Card variant="default" className="shadow-xl relative overflow-visible">
            <CardContent className="p-10 text-center">
              {/* Accent ribbon */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600">
                  Limited Offer
                </div>
              </div>

              <Heading level="h2" align="center" className="mb-4 mt-4">
                Book a Navigator<sup className="ml-0.5 text-sm align-super">TM</sup> Session
              </Heading>
              <Text size="base" color="primary" className="leading-relaxed mb-8">
                A focused 2-hour working session to identify where AI can save time, increase velocity, or reduce manual effort inside your team—without disrupting your existing tools or process.
              </Text>

              {/* Pricing */}
              <div className="mb-6 flex flex-col items-center">
                <span className="text-lg text-red-500 line-through">$5000</span>
                <span className="text-4xl font-extrabold text-neutral-900">$3000</span>
              </div>

              {/* Countdown */}
              <div className="mb-8">
                <Text size="sm" color="secondary">
                  Intro pricing ends in <CountdownTimer targetDate={new Date('2025-08-01T00:00:00Z')} />
                </Text>
              </div>

              {/* CTA Button */}
              <Button variant="primary" size="lg" href="/booking" className="mb-8">
                Book My Session
              </Button>

              {/* Deliverables list */}
              <ul className="list-none pl-0 space-y-3 text-left">
                {[
                  '2-hour live strategy workshop with your team',
                  'Mapped workflows + annotated AI opportunity areas',
                  'Prioritized list of high-ROI use cases',
                  'Internal brief to build alignment with execs',
                  'Concrete next steps for piloting or implementation',
                  'Optional follow-up support and tooling guidance',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <Text size="sm" color="primary" className="leading-snug">{item}</Text>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <Heading level="h4" align="center" className="mb-12">FAQ</Heading>

          <div className="space-y-4">
            {[
              {
                q: 'What if we have sensitive data or security constraints?',
                a: 'No problem. We have worked with teams under SOC 2, HIPAA, and strict IT policies. We do not need access to your systems—just enough context to model your workflows. We can anonymize inputs or run the session using sample data if needed.'
              },
              {
                q: 'Who from our team should be involved?',
                a: 'We recommend including 2-4 people who deeply understand the day-to-day workflow — typically a PM or team lead, someone from design or marketing ops, and optionally an engineering or analytics stakeholder.'
              },
              {
                q: 'We are not sure what to look for—will you guide us?',
                a: 'Yes. That is the whole point. We bring a curated set of proven AI use cases and walk your team through them based on your tools, goals, and pain points. You do not need to prep anything—just come ready to think critically about how you work.'
              },
              {
                q: 'What do we walk away with?',
                a: 'You will get a short list of high-impact AI use cases specific to your team, plus a summary brief you can share internally to build support. Many teams use this to kick off a pilot or secure budget for a full rollout.'
              },
              {
                q: 'We already have AI tools. Will this still help?',
                a: 'Yes. This is not about buying new tools — it is about making the most of what you already have. We help connect the dots between your team, your systems, and what AI can actually do inside your organization.'
              },
              {
                q: 'What makes you qualified to know what to look for?',
                a: 'We are not just strategy consultants—we are AI practitioners and builders. Our team has helped Fortune 500s, fast-moving startups and SMBs implement AI inside product, marketing, and operations teams. We know what actually works—not just what sounds good in a slide deck.'
              },
              {
                q: 'What types of solutions will you identify?',
                a: 'All kinds—from lightweight automations to embedded agents to content pipelines. It depends on your goals, tools, and team capacity. Some examples: AI-assisted UX research synthesis, On-brand content repurposing, Campaign brief generators, Design system-aware UI prototyping, Internal knowledge agents. You can see more examples here: View common use cases'
              },
              {
                q: 'Can you integrate into our stack?',
                a: 'Yes. We are tool-agnostic and experienced with a wide range of AI frameworks and delivery stacks. Whether you are using off-the-shelf tools or custom infrastructure, we adapt. We have worked with: LangChain, LlamaIndex, Pinecone, Vercel, OpenAI, Claude, Mistral, Gemini, Supabase, Airtable, Segment, Retool, Figma, Notion, Slack, Webflow, And even more low-code + no-code tools via Zapier, Make, or custom APIs. The goal is to meet you where you are and help you move fast with what you have got.'
              }
            ].map((item, idx) => (
              <details key={idx} className="group border border-neutral-200 rounded-lg p-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <Text size="base" weight="medium" color="primary">{item.q}</Text>
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <div className="mt-3">
                  <Text size="base" color="secondary" className="whitespace-pre-line">{item.a}</Text>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 