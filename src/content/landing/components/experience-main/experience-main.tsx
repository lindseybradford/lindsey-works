import { Paragraph, ParagraphVariant } from '@src/components/ui/paragraph';
import { Heading, HeadingLevel } from '@src/components/ui/heading';

export const ExperienceMain = () => {
  return (
    <div className="lg:pt-14 md:pt-12">
      <Heading level={HeadingLevel.H2} className="text-technicolor-blue">
        Experience
      </Heading>
      <Paragraph className="max-w-2xl">
        During my first 10 years in the field, I built visually stunning and
        performant web apps, websites, and design systems as agency owner and
        team member.
      </Paragraph>
      <Paragraph className="max-w-2xl">
        In 2021, I made the switch to Software Engineer.
      </Paragraph>
      <Paragraph className="max-w-2xl">
        @Bottle As founding frontend engineer and defacto designer, I shaped our
        Merchant Dashboard and Customer Checkout experiences working closely
        with leadership and our backend engineering team. I also built and
        maintained our internal Design System to ensure our interfaces were
        top-notch and cohesive.
      </Paragraph>
      <Paragraph className="max-w-2xl">
        @Mixpanel As part of our Growth team, I’m focused on creating
        interactive UIs that convert new users as well as leading our Design
        System that’s used across marketing and product surfaces to rapidly
        scale intuitive, performant experiences.
      </Paragraph>
    </div>
  );
};
