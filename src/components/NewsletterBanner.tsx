'use client';

import React, { useState } from 'react';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';

const NewsletterBanner = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus('idle');

    try {
      await fetch('https://hooks.zapier.com/hooks/catch/17057276/u2tfhuy/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*',
        },
        body: JSON.stringify({
          email,
          source: 'newsletter_subscription',
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors, we can't read response, so if no error thrown, assume success
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#eaeae3] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <Card 
          variant="default" 
          className="!bg-neutral-900 border-none max-w-6xl mx-auto"
          size="lg"
        >
          <CardContent className="flex flex-col items-start justify-center text-left py-16 px-8 lg:px-16">
            
            {/* Text Content */}
            <div className="mb-8">
              <Heading level="h4" color="white" className="max-w-4xl">
                Get updates, trends and best practices for getting ahead with AI
              </Heading>
            </div>

            {/* Email Capture Form */}
            <div className="w-full max-w-lg">
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
                <div className="flex-1">
                                                       <Input
                    type="email"
                    placeholder="Enter your email"
                    variant="default"
                    inputSize="lg"
                    className="bg-white border-white text-neutral-900 placeholder:text-neutral-500"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  disabled={isSubmitting}
                  className="sm:whitespace-nowrap"
                >
                  {isSubmitting ? 'Submitting...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                </Button>
              </form>

              {status === 'error' && (
                <Text size="sm" color="accent" className="mt-2">
                  Something went wrong. Please try again.
                </Text>
              )}
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterBanner; 