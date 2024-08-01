import { Paragraph, ParagraphSize } from '@src/components/ui/paragraph';
import { Heading, HeadingLevel } from '@src/components/ui/heading';

export const IntroductionMain = () => {
  return (
    <div className="lg:pt-14 md:pt-12">
      <Heading level={HeadingLevel.H1}>
        <b>
          Hi, I’m Lindsey aka <br />
          <span className="text-technicolor-orange">UI/UX Projectionist.</span>
        </b>
      </Heading>
      <Paragraph className="text-technicolor-pavement max-w-2xl" isTranslucent>
        With 12+ years experience in Brand and Product, I’ve used my frontend
        expertise to craft beautiful, performant and highly-functional digital
        interfaces.
      </Paragraph>
      <Paragraph className="text-technicolor-pavement max-w-2xl" isTranslucent>
        I believe in leaving things better than I found them, making clarity
        before haste, and that our future is best made together.
      </Paragraph>
    </div>
  );
};
