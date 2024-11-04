import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import { Theme } from '@src/constants';
import { ThemeContext } from '@src/context/theme-provider';
import { Spinner } from '@src/components/ui/spinner';
import { ErrorFallback } from '@src/components/layouts/error-fallback';

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
  const [theme, setTheme] = useState(Theme.Dark);

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
          </ThemeContext.Provider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
