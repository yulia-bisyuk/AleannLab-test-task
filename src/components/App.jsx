import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('./Layout/Layout'));
const JobBoard = lazy(() => import('../pages/JobBoard/JobBoard'));

export const App = () => {
  return (
    <Suspense fallback={null}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<JobBoard />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};
