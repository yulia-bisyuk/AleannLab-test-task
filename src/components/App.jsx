import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('./Layout/Layout'));
const JobBoard = lazy(() => import('../pages/JobBoard/JobBoard'));
const JobDetails = lazy(() => import('../pages/JobDetails/JobDetails'));
export const JobDetailsContext = React.createContext();

export const App = () => {
  return (
    <Suspense fallback={null}>
      <JobDetailsContext.Provider value={{ title: '', posted: '' }}>
        <Layout>
          <Routes>
            <Route exact path="/" element={<JobBoard />} />
            <Route path="details" element={<JobDetails />} />
          </Routes>
        </Layout>
      </JobDetailsContext.Provider>
    </Suspense>
  );
};
