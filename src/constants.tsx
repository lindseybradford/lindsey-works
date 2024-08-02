import { tv } from 'tailwind-variants';

export enum Theme {
  Technicolor = 'technicolor',
  Dark = 'dark',
}

// Docs: https://www.tailwind-variants.org/docs/slots
export const Layout = tv({
  slots: {
    container: 'mx-auto max-w-screen-2xl',
    sectionSideMargins: 'lg:px-24 md:px-16 px-8',
    sectionTopBarAtSm:
      'border-t-2 border-solid border-white pt-8 md:border-none lg:border-none md:pt-0 lg:pt-0',
    textTransition: 'transition-colors ease-in-out duration-200',
    textLink:
      'inline-block decoration-dotted decoration-current underline underline-offset-4 decoration-1 transition-all ease-in-out duration-200 hover:underline-offset-8 active:translate-y-1',
    textLinkPressed:
      'transition-transform duration-200 ease-in-out active:translate-y-1',
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
