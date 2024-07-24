import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { Spinner } from '@src/components/ui/spinner';

type AppProviderProps = {
  children: React.ReactNode;
};

const SuspenseFallback = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner size="xl" />
    </div>
  );
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={SuspenseFallback()}>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <HelmetProvider>{children}</HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
