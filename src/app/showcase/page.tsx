import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import {
  EyebrowWithText,
  TitleAndSubtitle,
  TitleAndBody,
  EyebrowTitleBody,
  QuoteTestimonial,
  StatDisplay,
  CallToAction,
  FeatureHighlight
} from "@/components/patterns/TextPatterns";
import ImageTextLayout from "@/components/ImageTextLayout";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <Heading level="h1">Summer Friday Design System</Heading>
          <Text size="lg" color="secondary" align="center">
            Week 1 atomic components and text patterns
          </Text>
        </div>

        {/* Buttons Section */}
        <section>
          <div className="mb-8">
            <Heading level="h2">Buttons</Heading>
            <Text color="secondary">Various button variants and sizes</Text>
          </div>
          
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <Text weight="semibold" className="mb-4">Primary Variant</Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" size="xl">Extra Large</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <Text weight="semibold" className="mb-4">Secondary Variant</Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary" size="md">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
                <Button variant="secondary" size="xl">Extra Large</Button>
              </div>
            </div>

            {/* Other Variants */}
            <div>
              <Text weight="semibold" className="mb-4">Other Variants</Text>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost">Ghost</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="link">Link Button</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section>
          <div className="mb-8">
            <Heading level="h2">Typography</Heading>
            <Text color="secondary">Heading hierarchy and text variants</Text>
          </div>
          
          <div className="space-y-8">
            {/* Headings */}
            <div>
              <Text weight="semibold" className="mb-4">Headings (Sombra Font)</Text>
              <div className="space-y-4">
                <Heading level="h1">Heading 1 - Hero Headlines</Heading>
                <Heading level="h2">Heading 2 - Section Titles</Heading>
                <Heading level="h3">Heading 3 - Subsection Titles</Heading>
                <Heading level="h4">Heading 4 - Section Subtitles</Heading>
                                  <Heading level="h5">Heading 5 - Card Titles</Heading>
                <Heading level="h6">Heading 6 - Small Titles</Heading>
              </div>
            </div>

            {/* Text Sizes */}
            <div>
              <Text weight="semibold" className="mb-4">Text Sizes (Inter Font)</Text>
              <div className="space-y-2">
                <Text size="2xl">2XL Text - Large descriptions</Text>
                <Text size="xl">XL Text - Emphasized content</Text>
                <Text size="lg">Large Text - Important content</Text>
                <Text size="base">Base Text - Body content</Text>
                <Text size="sm">Small Text - Secondary content</Text>
                <Text size="xs">XS Text - Captions and notes</Text>
              </div>
            </div>

            {/* Text Colors */}
            <div>
              <Text weight="semibold" className="mb-4">Text Colors</Text>
              <div className="space-y-2">
                <Text color="primary">Primary text color</Text>
                <Text color="secondary">Secondary text color</Text>
                <Text color="muted">Muted text color</Text>
                <Text color="accent">Accent text color</Text>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section>
          <div className="mb-8">
            <Heading level="h2">Cards</Heading>
            <Text color="secondary">Various card styles and compositions</Text>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="default" size="md">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Basic card with subtle shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="sm" color="secondary">
                  This is the default card variant with standard styling and hover effects.
                </Text>
              </CardContent>
              <CardFooter>
                <Button size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated" size="md">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Card with stronger shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="sm" color="secondary">
                  Elevated variant creates more visual hierarchy with enhanced shadows.
                </Text>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" size="sm">Explore</Button>
              </CardFooter>
            </Card>

            <Card variant="outlined" size="md">
              <CardHeader>
                <CardTitle>Outlined Card</CardTitle>
                <CardDescription>Card with border emphasis</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="sm" color="secondary">
                  Outlined variant uses borders instead of shadows for definition.
                </Text>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">View</Button>
              </CardFooter>
            </Card>

            <Card variant="default" size="lg" interactive>
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Clickable card with hover effects</CardDescription>
              </CardHeader>
              <CardContent>
                <Text size="sm" color="secondary">
                  This card has interactive states and can be clicked.
                </Text>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Inputs Section */}
        <section>
          <div className="mb-8">
            <Heading level="h2">Inputs</Heading>
            <Text color="secondary">Form input variants and states</Text>
          </div>
          
          <div className="max-w-2xl space-y-8">
            {/* Input Variants */}
            <div>
              <Text weight="semibold" className="mb-4">Input Variants</Text>
              <div className="space-y-4">
                <Input placeholder="Default input variant" variant="default" />
                <Input placeholder="Filled input variant" variant="filled" />
                <Input placeholder="Ghost input variant" variant="ghost" />
              </div>
            </div>

            {/* Input Sizes */}
            <div>
              <Text weight="semibold" className="mb-4">Input Sizes</Text>
              <div className="space-y-4">
                <Input placeholder="Small input" inputSize="sm" />
                <Input placeholder="Medium input (default)" inputSize="md" />
                <Input placeholder="Large input" inputSize="lg" />
              </div>
            </div>

            {/* Input States */}
            <div>
              <Text weight="semibold" className="mb-4">Input States</Text>
              <div className="space-y-4">
                <Input placeholder="Default state" />
                <Input placeholder="Error state" state="error" />
                <Input placeholder="Success state" state="success" />
                <Input placeholder="Disabled state" disabled />
              </div>
            </div>
          </div>
        </section>

        {/* Text Patterns Section */}
        <section>
          <div className="mb-8">
            <Heading level="h2">Text Combination Patterns</Heading>
            <Text color="secondary">Common text layouts and compositions</Text>
          </div>
          
          <div className="space-y-16">
            <div>
              <Text weight="semibold" className="mb-6">Eyebrow + Text Block</Text>
              <Card size="lg">
                <CardContent>
                  <EyebrowWithText />
                </CardContent>
              </Card>
            </div>

            <div>
              <Text weight="semibold" className="mb-6">Title + Subtitle</Text>
              <Card size="lg">
                <CardContent>
                  <TitleAndSubtitle />
                </CardContent>
              </Card>
            </div>

            <div>
              <Text weight="semibold" className="mb-6">Title + Body Copy</Text>
              <Card size="lg">
                <CardContent>
                  <TitleAndBody />
                </CardContent>
              </Card>
            </div>

            <div>
              <Text weight="semibold" className="mb-6">Eyebrow + Title + Body</Text>
              <Card size="lg">
                <CardContent>
                  <EyebrowTitleBody />
                </CardContent>
              </Card>
            </div>

            <div>
              <Text weight="semibold" className="mb-6">Quote Testimonial</Text>
              <Card size="lg">
                <CardContent>
                  <QuoteTestimonial />
                </CardContent>
              </Card>
            </div>

            <div>
              <Text weight="semibold" className="mb-6">Stat Display</Text>
              <Card size="lg">
                <CardContent>
                  <StatDisplay />
                </CardContent>
              </Card>
            </div>

            <div>
              <Text weight="semibold" className="mb-6">Call to Action</Text>
              <Card size="lg">
                <CardContent>
                  <CallToAction />
                </CardContent>
              </Card>
            </div>

            <div>
              <Text weight="semibold" className="mb-6">Feature Highlight</Text>
              <Card size="lg">
                <CardContent>
                  <FeatureHighlight />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Text Layout Section */}
        <section>
          <div className="mb-8">
            <Heading level="h2">Image Text Layout</Heading>
            <Text color="secondary">Flexible image and text layout component with multiple variants</Text>
          </div>
          
          <div className="space-y-12">
            {/* Image Left Example */}
            <div>
              <Text weight="semibold" className="mb-6">Image Left Layout</Text>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                                    <ImageTextLayout
                      layout="image-left"
                      backgroundColor="white"
                      spacing="compact"
                      imageSrc="/summerfriday-logo.png"
                      imageAlt="Summer Friday Logo"
                  title="Transform Your Product Development"
                  bodyText="Our AI-first approach helps product teams move from experimentation to systematic implementation. We provide the frameworks, tools, and expertise needed to turn AI from expensive experiments into measurable business advantages."
                  ctaText="Learn More"
                  ctaHref="#"
                  ctaVariant="primary"
                  className="border-0"
                />
              </div>
            </div>

            {/* Image Right Example */}
            <div>
              <Text weight="semibold" className="mb-6">Image Right Layout</Text>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                                    <ImageTextLayout
                      layout="image-right"
                      backgroundColor="neutral"
                      spacing="compact"
                      imageSrc="/summerfriday-logo.png"
                      imageAlt="Summer Friday Logo"
                  title="Strategic AI Implementation"
                  bodyText="Move beyond random ChatGPT usage to systematic AI operations. Our proven methodologies help teams implement AI-ready design systems, establish governance frameworks, and measure meaningful outcomes."
                  ctaText="Get Started"
                  ctaHref="#"
                  ctaVariant="secondary"
                  className="border-0"
                />
              </div>
            </div>

            {/* Configuration Options */}
            <div>
              <Text weight="semibold" className="mb-4">Available Props</Text>
              <Card>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <Text weight="semibold" size="sm">Layout Variants:</Text>
                      <Text size="sm" color="secondary">• `layout="image-left"` (default) • `layout="image-right"`</Text>
                    </div>
                    <div>
                      <Text weight="semibold" size="sm">Spacing Options:</Text>
                      <Text size="sm" color="secondary">• `spacing="compact"` • `spacing="default"` • `spacing="large"`</Text>
                    </div>
                    <div>
                      <Text weight="semibold" size="sm">Background Colors:</Text>
                      <Text size="sm" color="secondary">• `backgroundColor="white"` • `backgroundColor="neutral"` • `backgroundColor="blue"`</Text>
                    </div>
                    <div>
                      <Text weight="semibold" size="sm">CTA Variants:</Text>
                      <Text size="sm" color="secondary">• `ctaVariant="primary"` • `ctaVariant="secondary"` • `ctaVariant="outline"`</Text>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-16 border-t border-neutral-200">
          <Text color="muted">
            Summer Friday Design System - Week 1 Components
          </Text>
        </div>
      </div>
    </div>
  );
}