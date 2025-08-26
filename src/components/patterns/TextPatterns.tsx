import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

// Eyebrow component (like the original)
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-3 bg-gradient-to-r from-blue-500 to-blue-600">
    {children}
  </div>
);

// Text combination patterns
export const EyebrowWithText = () => (
  <div className="space-y-4">
    <Eyebrow>Case Study</Eyebrow>
    <Text size="lg" color="secondary">
      A fast-moving ecommerce company came to us after months of disconnected AI experiments that weren't delivering results. We helped them achieve 2× faster product cycles and 27% revenue growth.
    </Text>
  </div>
);

export const TitleAndSubtitle = () => (
  <div className="space-y-3">
    <Heading level="h2">Transform Your AI Strategy</Heading>
    <Heading level="h4" color="secondary">From scattered experiments to systematic results</Heading>
  </div>
);

export const TitleAndBody = () => (
  <div className="space-y-6">
    <Heading level="h3">The Real Problem with AI Transformation</Heading>
    <Text size="lg" color="secondary">
      Teams gather in conference rooms, laptops open, nodding along to the latest AI strategy presentation. But when it comes time to implement? Silence. Hesitation. That familiar friction that kills momentum before it starts.
    </Text>
  </div>
);

export const EyebrowTitleBody = () => (
  <div className="space-y-6">
    <Eyebrow>How it works</Eyebrow>
    <Heading level="h2">The Navigator™ Process</Heading>
    <Text size="lg" color="secondary">
      A focused, pre-researched workshop to identify where AI can deliver real results inside your team. We'll map your workflows, assess readiness, and surface high-impact opportunities.
    </Text>
  </div>
);

export const QuoteTestimonial = () => (
  <div className="space-y-4">
    <Text size="xl" weight="medium" color="primary">
              "Summer Friday helped us move from random ChatGPT usage to a systematic AI operation that saves hundreds of design hours every month."
    </Text>
    <div>
      <Text size="sm" weight="semibold" color="primary">Sarah Chen</Text>
      <Text size="sm" color="muted">Head of Product, TechFlow</Text>
    </div>
  </div>
);

export const StatDisplay = () => (
  <div className="text-center space-y-2">
    <div className="text-5xl font-bold text-blue-500 font-sombra">2-4×</div>
    <Text size="sm" color="secondary">Teams report faster development cycles</Text>
  </div>
);

export const CallToAction = () => (
  <div className="text-center space-y-4">
    <Heading level="h3">Ready to transform your AI approach?</Heading>
    <Text color="secondary">
      From reactive experiments to intentional strategy
    </Text>
  </div>
);

export const FeatureHighlight = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <Text weight="semibold">Automated product copy creation across 5,000 SKUs</Text>
    </div>
    <Text size="sm" color="secondary" className="ml-5">
      Reduced manual copywriting effort by 85% while maintaining brand consistency
    </Text>
  </div>
);