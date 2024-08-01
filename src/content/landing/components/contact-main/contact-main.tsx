import { Paragraph, ParagraphSize } from '@src/components/ui/paragraph';
import { Heading, HeadingLevel } from '@src/components/ui/heading';

export const ContactMain = () => {
  return (
    <div className="lg:pt-14 md:pt-12">
      <Heading level={HeadingLevel.H2} className="text-technicolor-plum">
        Contact
      </Heading>
      <Paragraph className="text-technicolor-pavement max-w-2xl">
        <a
          className="decoration-dotted"
          href="mailto:lindsey.l.bradford@gmail.com"
        >
          lindsey.l.bradford@gmail.com
        </a>
      </Paragraph>
      <Paragraph className="text-technicolor-pavement max-w-2xl" isTranslucent>
        I’m actively seeking remote full-time Software Engineer, Senior Frontend
        Engineer, and Design System Engineer roles.
      </Paragraph>
      <Paragraph className="text-technicolor-pavement max-w-2xl" isTranslucent>
        I’m enthusiastic about opportunities where I can ship beautiful product
        experiences and systems built to scale. I’m eager to collaborate,
        mentor, and learn from other engineers and cross-functional partners.
      </Paragraph>
      <Paragraph className="text-technicolor-pavement max-w-2xl" isTranslucent>
        I live in Golden, CO with my partner and rescued cats. Like a true
        Coloradan I spend my free time rock climbing, gravel biking,
        snowboarding, and backpacking.
      </Paragraph>
    </div>
  );
};
