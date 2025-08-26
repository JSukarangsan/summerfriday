"use client";

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function AiFirstProductDesignPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const guideImages = [
    '/guide/principles1.png',
    '/guide/design-systems.png',
    '/guide/ai-ready-ds.png',
    '/guide/use-cases.png',
    '/guide/agents-diagram.png',
    '/guide/process.png',
    '/guide/capes.png',
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const amount = Math.max(300, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  // Load Tally embed script once for the iframe below
  useEffect(() => {
    const d = document;
    const w = 'https://tally.so/widgets/embed.js';
    const v = () => {
      // @ts-ignore - global from Tally
      if (typeof Tally !== 'undefined') {
        // @ts-ignore
        Tally.loadEmbeds();
      } else {
        d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((el) => {
          const iframe = el as HTMLIFrameElement & { dataset: { tallySrc?: string } };
          if (iframe.dataset.tallySrc && !iframe.src) iframe.src = iframe.dataset.tallySrc;
        });
      }
    };
    // @ts-ignore
    if (typeof Tally !== 'undefined') v();
    else if (d.querySelector(`script[src="${w}"]`) == null) {
      const s = d.createElement('script');
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    } else {
      v();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setFormState('success');
    } catch (err) {
      setFormState('error');
    }
  };

  return (
    <>
      <Head>
        <title>Free AI-First Product Design Guide - Complete Strategic Framework | Summer Friday</title>
        <meta name="description" content="Download the complete guide to AI-First Product Design. Learn how leading product teams transform from AI experiments to systematic AI operations. 40-page strategic framework with templates, processes, and real examples." />
        <meta name="keywords" content="AI-First Product Design, product design guide, AI strategy framework, product team transformation, AI operations, design systems, product management, AI implementation" />
        <meta property="og:title" content="Free AI-First Product Design Guide - Complete Strategic Framework" />
        <meta property="og:description" content="Download the complete 40-page guide to AI-First Product Design. Transform your product team from AI experiments to systematic operations." />
        <meta property="og:url" content="https://summerfriday.co/ai-first-product-design" />
        <meta property="og:image" content="/guide/ai-first-cover.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:alt" content="AI-First Product Design Guide Cover" />
        <link rel="canonical" href="https://summerfriday.co/ai-first-product-design" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-white">
        <div className="absolute inset-0 -z-10 opacity-60" aria-hidden>
          <div className="w-full h-full" style={{ background: 'radial-gradient(60% 80% at 50% -10%, rgba(0,0,0,0.06), rgba(255,255,255,0))' }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Heading level="h1" className="mb-5">
              The Complete Guide to <span className="bg-gradient-to-r from-neutral-900 to-neutral-500 bg-clip-text text-transparent">AI‑First Product Design</span>:
              <br className="hidden md:block"/> From Chaos to Competitive Advantage
            </Heading>
            <Text size="lg" color="secondary" className="max-w-2xl mb-8">
              The strategic framework product leaders use to transform their teams from AI experimenters to AI-first innovators. Stop wasting time on random ChatGPT prompts and disconnected AI tools. This comprehensive guide reveals how leading product organizations are building AI operations, redesigning team structures, and implementing the processes that turn AI from expensive experiments into measurable business advantage.
            </Text>
            <Button variant="primary" size="lg" href="#download">
              Get the Free Guide
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <Card variant="default" className="p-4 md:p-6">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border-2 border-dashed border-neutral-300 p-4">
                    <Text size="base" weight="semibold" color="primary" className="mb-2">Traditional Workflow</Text>
                    <ul className="text-sm text-neutral-600 space-y-2 list-disc pl-5">
                      <li>Manual research & documentation</li>
                      <li>Sequential handoffs</li>
                      <li>Design→dev drift</li>
                      <li>Ad‑hoc AI experiments</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <Text size="base" weight="semibold" className="text-green-700 mb-2">AI‑First Workflow</Text>
                    <ul className="text-sm text-neutral-700 space-y-2 list-disc pl-5">
                      <li>Research synthesis in minutes</li>
                      <li>Prototype UI without dev cycles</li>
                      <li>AI‑ready design systems</li>
                      <li>Governed, measurable outcomes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Inside carousel */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Heading level="h2" className="mb-6">What's Inside:</Heading>
          <div className="relative">
            {/* Scroll buttons */}
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollCarousel('left')}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900 text-white rounded-full w-9 h-9 items-center justify-center shadow-md hover:opacity-90"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollCarousel('right')}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-900 text-white rounded-full w-9 h-9 items-center justify-center shadow-md hover:opacity-90"
            >
              ›
            </button>
            <div ref={carouselRef} id="guide-carousel" className="overflow-x-auto">
              <div className="flex gap-4 snap-x snap-mandatory pr-10">
                {guideImages.map((src, idx) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Guide screenshot ${idx + 1}`}
                    className="snap-start shrink-0 w-64 sm:w-80 h-48 sm:h-56 rounded-2xl object-cover bg-neutral-50 border border-neutral-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Agitation */}
      <section className="py-16 md:py-20 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <Heading level="h2" className="mb-4">Most Product Teams Are Stuck in AI Experimentation Mode</Heading>
          <Text size="base" color="secondary" className="max-w-3xl mb-10">
            While competitors build systematic AI advantages, your team is still figuring out which prompts work.
          </Text>

          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="default" className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 text-neutral-700 mb-3">
                  <span className="h-8 w-8 rounded-xl bg-neutral-900/5 grid place-items-center">
                    <img src="/globe.svg" alt="icon" className="h-4 w-4"/>
                  </span>
                  <Text size="base" weight="semibold">Scattered AI Usage</Text>
                </div>
                <Text size="sm" color="secondary">
                  Random ChatGPT usage without a strategy = 30% gains instead of 300%.
                </Text>
              </CardContent>
            </Card>
            <Card variant="default" className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 text-neutral-700 mb-3">
                  <span className="h-8 w-8 rounded-xl bg-neutral-900/5 grid place-items-center">
                    <img src="/window.svg" alt="icon" className="h-4 w-4"/>
                  </span>
                  <Text size="base" weight="semibold">Tool Chaos</Text>
                </div>
                <Text size="sm" color="secondary">
                  Multiple tools create workflow confusion instead of productivity.
                </Text>
              </CardContent>
            </Card>
            <Card variant="default" className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 text-neutral-700 mb-3">
                  <span className="h-8 w-8 rounded-xl bg-neutral-900/5 grid place-items-center">
                    <img src="/file.svg" alt="icon" className="h-4 w-4"/>
                  </span>
                  <Text size="base" weight="semibold">No Clear ROI</Text>
                </div>
                <Text size="sm" color="secondary">
                  Hard to measure, harder to justify investment to leadership.
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="py-16 md:py-20 border-t bg-[#eaeae3]" id="benefits">
        <div className="mx-auto max-w-7xl px-6">
          <Heading level="h2" className="mb-10">What If Your Product Team Could…</Heading>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="default" className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-8 w-8 rounded-xl bg-black text-white grid place-items-center">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
                    </svg>
                  </span>
                  <Text size="base" weight="semibold">2–4× Faster Cycles</Text>
                </div>
                <Text size="sm" color="secondary">
                  Use AI‑ready design systems and prototype‑and‑prune to move from idea to implementation fast.
                </Text>
              </CardContent>
            </Card>
            <Card variant="default" className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-8 w-8 rounded-xl bg-black text-white grid place-items-center">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
                    </svg>
                  </span>
                  <Text size="base" weight="semibold">Eliminate Admin Overhead</Text>
                </div>
                <Text size="sm" color="secondary">
                  Let PMs focus on strategy, designers on creativity, and engineers on architecture.
                </Text>
              </CardContent>
            </Card>
            <Card variant="default" className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-8 w-8 rounded-xl bg-black text-white grid place-items-center">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>
                    </svg>
                  </span>
                  <Text size="base" weight="semibold">Sustainable AI Ops</Text>
                </div>
                <Text size="sm" color="secondary">
                  Define roles, governance, and measurement for durable, compounding gains.
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <Heading level="h2" className="mb-8">This Guide Is Perfect If You're…</Heading>
          <ul className="grid md:grid-cols-2 gap-3 text-neutral-800 text-base list-disc pl-5">
            <li><strong>Product managers</strong> ready to evolve beyond backlog coordination</li>
            <li><strong>Design leaders</strong> building AI‑ready design systems and workflows</li>
            <li><strong>Engineering managers</strong> implementing AI‑enabled development processes</li>
            <li><strong>Product leaders</strong> responsible for AI transformation strategy</li>
            <li><strong>Teams</strong> moving from experimentation to AI‑first operations</li>
          </ul>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-20 border-t bg-[#eaeae3]" id="learn">
        <div className="mx-auto max-w-7xl px-6">
          <Heading level="h2" className="mb-10">Inside This 40‑Page Strategic Guide</Heading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="default" className="p-6 h-full">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 text-neutral-700 mb-3">
                  <img src="/file.svg" alt="icon" className="h-5 w-5" />
                  <Text size="base" weight="semibold">5 AI‑First Design Principles</Text>
                </div>
                <Text size="sm" color="secondary">
                  The principles that separate leaders from followers.
                </Text>
              </CardContent>
            </Card>
            <Card variant="default" className="p-6 h-full">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 text-neutral-700 mb-3">
                  <img src="/globe.svg" alt="icon" className="h-5 w-5" />
                  <Text size="base" weight="semibold">Context + Memory + Tools</Text>
                </div>
                <Text size="sm" color="secondary">
                  A framework to spot the highest‑impact AI opportunities.
                </Text>
              </CardContent>
            </Card>
            <Card variant="default" className="p-6 h-full">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 text-neutral-700 mb-3">
                  <img src="/window.svg" alt="icon" className="h-5 w-5" />
                  <Text size="base" weight="semibold">AI‑Ready Design Systems</Text>
                </div>
                <Text size="sm" color="secondary">
                  How to enable 2-4x velocity gains with AI-ready design systems
                </Text>
              </CardContent>
            </Card>
            <Card variant="default" className="p-6 h-full">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 text-neutral-700 mb-3">
                  <img src="/file.svg" alt="icon" className="h-5 w-5" />
                  <Text size="base" weight="semibold">The CRAFT Method</Text>
                </div>
                <Text size="sm" color="secondary">
                  A practical approach to manage AI transformation across teams.
                </Text>
              </CardContent>
            </Card>
            <Card variant="default" className="p-6 h-full">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 text-neutral-700 mb-3">
                  <img src="/globe.svg" alt="icon" className="h-5 w-5" />
                  <Text size="base" weight="semibold">New Team Structures & Roles</Text>
                </div>
                <Text size="sm" color="secondary">
                  AI Ops job definitions, RACI, and example org charts.
                </Text>
              </CardContent>
            </Card>
            <Card variant="default" className="p-6 h-full">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 text-neutral-700 mb-3">
                  <img src="/window.svg" alt="icon" className="h-5 w-5" />
                  <Text size="base" weight="semibold">PM Evolution Guide</Text>
                </div>
                <Text size="sm" color="secondary">
                  Toolkit, use cases, and skills to lead AI‑first delivery.
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof (logos + stat) */}
      <section className="py-16 md:py-20 border-t" id="proof">
        <div className="mx-auto max-w-7xl px-6">
          <Heading level="h2" align="center" className="mb-8">Clients We've Worked With</Heading>
          {/* Marquee */}
          <div className="overflow-hidden">
            <div className="flex items-center gap-16 marquee-animate" style={{ whiteSpace: 'nowrap' }}>
              {[
                '/clientlogos/Google Logo (2).png',
                '/clientlogos/PUMA Logo.png',
                '/clientlogos/Nike_Logo_1.png',
                '/clientlogos/United Airlines Logo.png',
                '/clientlogos/Compass Real Estate Logo.png',
                '/clientlogos/Cosmopolitan Logo PNG.png',
                '/clientlogos/Pfizer Logo.png',
                '/clientlogos/Eventbrite Logo.png',
                '/clientlogos/Girl Scouts Logo.png',
                '/clientlogos/Bigeye Logo.png',
              ].map((src, idx) => (
                <img
                  key={`${src}-${idx}`}
                  src={src}
                  alt="client logo"
                  className="h-6 sm:h-7 md:h-8 max-w-[120px] w-auto object-contain grayscale brightness-90 opacity-80"
                />
              ))}
              {/* Duplicate for seamless loop */}
              {[
                '/clientlogos/Google Logo (2).png',
                '/clientlogos/PUMA Logo.png',
                '/clientlogos/Nike_Logo_1.png',
                '/clientlogos/United Airlines Logo.png',
                '/clientlogos/Compass Real Estate Logo.png',
                '/clientlogos/Cosmopolitan Logo PNG.png',
                '/clientlogos/Pfizer Logo.png',
                '/clientlogos/Eventbrite Logo.png',
                '/clientlogos/Girl Scouts Logo.png',
                '/clientlogos/Bigeye Logo.png',
              ].map((src, idx) => (
                <img
                  key={`${src}-dup-${idx}`}
                  src={src}
                  alt="client logo"
                  className="h-6 sm:h-7 md:h-8 max-w-[120px] w-auto object-contain grayscale brightness-90 opacity-80"
                />
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Card variant="default" className="p-6 grid place-items-center gap-3 max-w-sm">
              <CardContent className="p-0 text-center">
                <div className="text-3xl font-bold">2–4×</div>
                <Text size="sm" color="secondary" align="center">
                  Teams using these methods report faster development cycles
                </Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA + Form */}
      <section className="py-16 md:py-20 border-t" id="download">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <Heading level="h2" className="mb-3">Get Your Free AI‑First Product Design Guide</Heading>
              <Text size="base" color="secondary" className="mb-6">
                Download now and start transforming your product development process today.
              </Text>
              <ul className="space-y-3 text-sm text-neutral-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>Immediate download link sent to your inbox</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>Bonus: AI‑ready Product Team checklist</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">✓</span>
                  <span>No spam. Unsubscribe anytime</span>
                </li>
              </ul>
            </div>

            <Card variant="default" className="shadow-sm">
              <CardContent className="p-0 md:p-6">
                <iframe
                  data-tally-src="https://tally.so/embed/wQQQkX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="430"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                  title="AI-First Guide Form"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
} 