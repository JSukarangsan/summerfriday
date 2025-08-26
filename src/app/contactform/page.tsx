'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { useCasesData } from '@/data/usecases';

function ContactForm() {
  const searchParams = useSearchParams();
  const useCaseId = searchParams.get('usecase');
  
  // Find the use case data based on the ID
  const useCase = useCasesData.useCases.find(uc => uc.id === useCaseId);
  
  // Default content if no use case is found
  const defaultContent = {
    title: "Get your custom case study",
    bodyCopy: "Discover how businesses like yours transform their workflows with AI. Share your details below to receive our comprehensive case study showing real implementations and proven results."
  };
  
  const content = useCase?.contactForm || defaultContent;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    title: '',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setErrorMessage('');

    const submissionData = {
      ...formData,
      useCaseId: useCaseId || 'general',
      useCaseTitle: useCase?.title || 'General Inquiry',
      submittedAt: new Date().toLocaleString(),
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
          firstName: '', lastName: '', email: '', 
          company: '', title: '', projectDetails: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to submit form: ${response.status}`);
      }
    } catch (error) {
      setSubmissionStatus('error');
      setErrorMessage(`There was an issue submitting your form: ${(error as Error).message}. Please try again or contact us directly.`);
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[276px] h-[276px] transform translate-x-[100px] -translate-y-[52px] rotate-[290deg] hidden lg:block opacity-30">
        <svg viewBox="0 0 276 276" className="w-full h-full">
          <circle cx="138" cy="138" r="120" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.3"/>
          <circle cx="138" cy="138" r="80" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.2"/>
          <circle cx="138" cy="138" r="40" fill="#60a5fa" opacity="0.1"/>
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] transform translate-x-[50px] translate-y-[150px] rotate-[139deg] hidden lg:block opacity-25">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path d="M150,50 Q250,150 150,250 Q50,150 150,50" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.4"/>
          <circle cx="150" cy="150" r="100" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.2"/>
          <circle cx="150" cy="150" r="30" fill="#60a5fa" opacity="0.15"/>
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-[218px] h-[218px] transform -translate-x-[30px] translate-y-[100px] rotate-[45deg] hidden lg:block opacity-20">
        <svg viewBox="0 0 218 218" className="w-full h-full">
          <polygon points="109,20 180,109 109,198 38,109" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.3"/>
          <circle cx="109" cy="109" r="60" fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.2"/>
          <circle cx="109" cy="109" r="25" fill="#60a5fa" opacity="0.1"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Text Block */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <Heading level="h1">
                {content.title}
              </Heading>
              <Text size="base" color="primary">
                {content.bodyCopy}
              </Text>
            </div>
          </div>

          {/* Right Contact Form */}
          <Card variant="default" className="shadow-lg">
            <CardContent className="p-6 md:p-8">
              {/* Success Message */}
              {submissionStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <Text size="sm" weight="medium" className="text-green-800">
                        Thank you! Your submission has been received. We'll send you the case study shortly.
                      </Text>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submissionStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <Text size="sm" weight="medium" className="text-red-800">
                        {errorMessage}
                      </Text>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2">
                      <Text size="sm" weight="medium" color="primary">
                        First Name *
                      </Text>
                    </label>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      variant="default"
                      inputSize="md"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block mb-2">
                      <Text size="sm" weight="medium" color="primary">
                        Last Name *
                      </Text>
                    </label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      variant="default"
                      inputSize="md"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block mb-2">
                    <Text size="sm" weight="medium" color="primary">
                      Email Address *
                    </Text>
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    variant="default"
                    inputSize="md"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Company and Title Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block mb-2">
                      <Text size="sm" weight="medium" color="primary">
                        Company *
                      </Text>
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      variant="default"
                      inputSize="md"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="title" className="block mb-2">
                      <Text size="sm" weight="medium" color="primary">
                        Job Title *
                      </Text>
                    </label>
                    <Input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      variant="default"
                      inputSize="md"
                      placeholder="Enter your job title"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="block mb-2">
                    <Text size="sm" weight="medium" color="primary">
                      Tell me about your project details *
                    </Text>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors disabled:bg-neutral-50 disabled:cursor-not-allowed font-inter"
                    placeholder="Describe your project, current challenges, goals, and what you're hoping to achieve with AI..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Get the case study'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default function ContactFormPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#eaeae3]">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
} 