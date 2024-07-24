import { createBrowserRouter } from 'react-router-dom';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { LandingRoute } = await import('./landing');
        return { Component: LandingRoute };
      },
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./404');
        return { Component: NotFoundRoute };
      },
    },
  ]);
};
