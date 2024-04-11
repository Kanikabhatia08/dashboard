import React, { Suspense } from 'react';

import { pieChartData } from '../../data/dummy';
import { Pie as PieChart } from '../../components';
import Loading from '../../components/Loading';
const Header = React.lazy(() => import('../../components/Header'));

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Suspense fallback={<Loading/>}>
      <Header category="Pie" title="Project Cost Breakdown" />
    </Suspense>
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;