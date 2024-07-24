import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';

import { AppProvider } from './app-provider';
import { createRouter } from './routes';

const AppRouter = () => {
  const router = useMemo(() => {
    return createRouter();
  }, []);
  return <RouterProvider router={router} />;
};

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
