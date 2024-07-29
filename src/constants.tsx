import { tv } from 'tailwind-variants';

export enum Theme {
  Technicolor = 'technicolor',
  Dark = 'dark',
}

export const Layout = tv({
  slots: {
    container: 'mx-auto max-w-screen-2xl',
    sectionSideMargins: 'lg:px-24 md:px-16 px-8',
  },
});
