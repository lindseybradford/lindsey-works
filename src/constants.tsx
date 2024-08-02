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
    textTransition: 'transition-colors ease-in-out duration-200',
    textLink:
      'decoration-dotted decoration-current underline underline-offset-4 decoration-1 transition-all ease-in-out duration-200 hover:underline-offset-8',
  },
});

export const URL = {
  mixpanel: 'https://mixpanel.com',
  bottle: 'https://bottle.com',
  viget: 'https://viget.com',
};
