import React, { Suspense } from 'react';
import Loading from '../../components/Loading';
const Header = React.lazy(() => import('../../components/Header'));
const LineChart = React.lazy(() => import('../../components/Charts/LineChart'));

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Suspense fallback={<Loading/>}>
        <Header category="Chart" title="Inflation Rate" />
      </Suspense>
      <div className='w-full'>
      <Suspense fallback={<Loading/>}>
        <LineChart />
      </Suspense>
      </div>
    </div>
  )
}

export default Line