import { tv } from 'tailwind-variants';
import { cn } from '@src/utils/cn';

export enum Theme {
  Technicolor = 'technicolor',
  Dark = 'dark',
}

export enum MediaAnimation {
  None = 'none',
  Fade = 'fade',
}

export enum RoundedCorner {
  None = 'rounded-none',
  Rounded3xl = 'rounded-xl lg:rounded-3xl',
  RoundedXl = 'rounded-xl',
}

export type ImageProps = {
  src: string;
  height: string;
  width: string;
  alt: string;
  className?: string;
  classNameInner?: string;
  roundedCorner?: RoundedCorner;
  animationOnLoad?: MediaAnimation;
};

const ColorsTransition = 'transition-colors ease-in-out duration-200';

// Docs: https://www.tailwind-variants.org/docs/slots
export const ContentSectionLayout = tv({
  slots: {
    container: 'mx-auto max-w-screen-2xl',
    sectionSideMargins: 'lg:px-24 md:px-16 px-8',
    sectionTopBarAtSm:
      'border-t-2 border-solid border-white pt-8 md:border-none lg:border-none md:pt-0 lg:pt-0',
    textTransition: cn(ColorsTransition),
    textLink:
      'inline-block decoration-dotted decoration-current underline underline-offset-4 decoration-1 transition-all ease-in-out duration-200 hover:underline-offset-8 active:translate-y-1',
    textLinkPressed:
      'transition-transform duration-200 ease-in-out active:translate-y-1',
    button: cn(
      ColorsTransition,
      'bg-white text-black hover:bg-black hover:text-white rounded-xl px-4 py-3 text-base font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
    ),
  },
});

export const GridLayout = tv({
  slots: {
    parentGrid: 'grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10',
    parentGridRelaxed: 'grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-[4.5rem]',
    halfColumn: 'col-span-2 md:col-span-3 lg:col-span-6',
    nestedGrid: 'grid gap-8 lg:gap-10',
    quarterColumn: 'col-span-2 md:col-span-3',
  },
});

export const URL = {
  mixpanel: 'https://mixpanel.com',
  bottle: 'https://bottle.com',
  viget: 'https://viget.com',
  canonical: 'https://lindsey.work',
  twitterProfile: 'https://twitter.com/lindseybradford',
  linkedInProfile: 'https://www.linkedin.com/in/lindsey-bradford-36541479',
};

export const SEO = {
  siteName: 'lindsey.work',
  title: 'Lindsey Bradford | Senior Software Engineer',
  description:
    'With 12+ years experience in Brand and Product, I’ve used my frontend expertise to craft beautiful, performant and highly-functional digital interfaces.',
  ogType: 'profile',
  firstLastName: 'Lindsey Bradford',
  twitterHandle: '@lindseybradford',
  jobTitle: 'Senior Software Engineer',
  currentEmployer: 'Mixpanel',
};
