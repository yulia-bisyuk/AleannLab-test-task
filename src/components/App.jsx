import { lazy, Suspense } from 'react';
const Layout = lazy(() => import('./Layout/Layout'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Layout></Layout>
    </Suspense>
  );
};
