import React, { Suspense } from 'react';
import { Stacked as StackedChart } from '../../components';
import Loading from '../../components/Loading';
const Header = React.lazy(() => import('../../components/Header'));

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Suspense fallback={<Loading/>}>
      <Header category="Stacked" title="Revenue Breakdown" />
    </Suspense>
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;