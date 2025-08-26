'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Heading from '@/components/ui/Heading';
import Text from '@/components/ui/Text';
import Button from '@/components/ui/Button';

const imageTextLayoutVariants = cva(
  "grid items-center gap-8 lg:gap-12",
  {
    variants: {
      layout: {
        "image-left": "lg:grid-cols-2",
        "image-right": "lg:grid-cols-2"
      },
      spacing: {
        default: "py-16 lg:py-20",
        compact: "py-12 lg:py-16",
        large: "py-20 lg:py-24"
      }
    },
    defaultVariants: {
      layout: "image-left",
      spacing: "default"
    }
  }
);

const imageContainerVariants = cva(
  "relative",
  {
    variants: {
      layout: {
        "image-left": "order-1 lg:order-1",
        "image-right": "order-1 lg:order-2"
      }
    }
  }
);

const contentContainerVariants = cva(
  "space-y-6",
  {
    variants: {
      layout: {
        "image-left": "order-2 lg:order-2",
        "image-right": "order-2 lg:order-1"
      }
    }
  }
);

export interface ImageTextLayoutProps extends VariantProps<typeof imageTextLayoutVariants> {
  // Image props
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  
  // Content props
  title: string;
  bodyText: string;
  ctaText?: string;
  ctaHref?: string;
  ctaVariant?: 'primary' | 'secondary' | 'outline';
  ctaDisabled?: boolean;
  comingSoonText?: string;
  
  // Layout props
  className?: string;
  containerClassName?: string;
  
  // Background
  backgroundColor?: 'white' | 'neutral' | 'blue';
}

export default function ImageTextLayout({
  // Image props
  imageSrc,
  imageAlt,
  imageClassName,
  
  // Content props
  title,
  bodyText,
  ctaText = "Learn More",
  ctaHref,
  ctaVariant = "primary",
  ctaDisabled = false,
  comingSoonText,
  
  // Layout props
  layout = "image-left",
  spacing = "default",
  className,
  containerClassName,
  
  // Background
  backgroundColor = "white"
}: ImageTextLayoutProps) {
  
  const backgroundClasses = {
    white: "bg-white",
    neutral: "bg-[#eaeae3]", 
    blue: "bg-blue-50"
  };

  return (
    <section className={cn(backgroundClasses[backgroundColor], spacing === 'default' ? 'py-16 lg:py-20' : spacing === 'compact' ? 'py-12 lg:py-16' : 'py-20 lg:py-24', className)}>
      <div className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", containerClassName)}>
        <div className={cn(imageTextLayoutVariants({ layout }))}>
          
          {/* Image Container */}
          <div className={cn(imageContainerVariants({ layout }))}>
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={imageSrc}
                alt={imageAlt}
                className={cn(
                  "w-full h-auto object-cover",
                  imageClassName
                )}
              />
            </div>
          </div>

          {/* Content Container */}
          <div className={cn(contentContainerVariants({ layout }))}>
            <div className="space-y-6">
              <Heading level="h3" className="mb-4">
                {title}
              </Heading>
              
              <Text size="base" color="secondary" className="leading-relaxed">
                {bodyText}
              </Text>
              
              {ctaText && (
                <div className="pt-2">
                  {comingSoonText && (
                    <Text size="sm" color="secondary" className="mb-2 font-medium">
                      {comingSoonText}
                    </Text>
                  )}
                  <Button 
                    variant={ctaVariant}
                    size="md"
                    href={ctaDisabled ? undefined : ctaHref}
                    className={ctaDisabled ? "opacity-50 cursor-not-allowed" : ""}
                    onClick={ctaDisabled ? (e) => e.preventDefault() : undefined}
                  >
                    {ctaText}
                  </Button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 