import React, { Suspense} from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go"
import Loading from '../components/Loading';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Stacked = React.lazy(() => import('../components/Charts/Stacked'));
const SparkLine = React.lazy(() => import('../components/Charts/SparkLine'));
const Button = React.lazy(() => import('../components/Button'));
const Pie = React.lazy(() => import('../components/Charts/Pie'));

const Ecommerce = () => {

  const {currentColor, activeMenu} = useStateContext();

  return (
    <div className='mt-5 '>
      <div className='flex flex-wrap justify-center '>

      {/* Earnings */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full xl:w-72 p-8 m-4  
          bg-hero-pattern bg-no-repeat bg-cover bg-center ">
        
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl">$63,448.78</p>
          </div>
          <button
            type="button"
            style={{ backgroundColor: currentColor }}
            className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
          >
            <BsCurrencyDollar />
          </button>
        </div>

        <div className='mt-6'>
          <Suspense fallback={<Loading/>}>
            <Button 
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </Suspense>
          
        </div>
      </div>

      {/* Earnings Map */}
      <div className='flex m-4 md:m-0 flex-wrap justify-center gap-5 items-center'>
        { 
          earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-48 p-4 pt-9 rounded-2xl'
            >
              <button type='button' style={{color: item.iconColor, backgroundColor: item.iconBg}}
                className='text-2xl bg-opacity-10 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>

            </div>
          ))
        }
      </div>
      

      {/* Revenue Updates */}
      <div className={`flex ml-4 ${activeMenu ? 'gap-8': ' ml-[55px]'} f flex-wrap justify-center `}>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg my-3 p-4  rounded-2xl md:w-780  ">
          <div className='flex justify-between'>
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Expense</span>
              </p>

              <p className='flex items-center text-green-400 hover:drop-shadow-xl'>
                <span><GoDotFill /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          <div className='mt-10 flex gap-10 flex-wrap justify-center'>

            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-2xl font-semibold'>$63,448.78</span>
                  <span className='p-1.5 ml-1 hover:drop-shadow-xl cursor-pointer rounded-full text-xs text-white bg-green-500'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-2xl font-semibold'>$48,448.78</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>

              <div className=''>
                <Suspense fallback={<Loading/>}>
                  <SparkLine 
                    currentColor={currentColor}
                    id="line-sparkline"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </Suspense>
                
              </div>
              <div className='mt-10'>
              <Suspense fallback={<div><Loading/></div>}>
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </Suspense>
              </div>

            </div>
            {/* Stacked chart */}
            <div>
              <Suspense fallback={<Loading/>}>
                <Stacked
                  height="320px"
                  width="360px"
                />
              </Suspense>
              
            </div>
          </div>
        </div>
      
      

      {/* sparkLine and pie chart */}
      <div className='flex xl:flex-wrap lg:w-[28%]  justify-center '>
          <div
            className=" rounded-2xl p-3 m-4 "
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-4">$63,448.78</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="pt-9">
            <Suspense fallback={<Loading/>}>
              <SparkLine currentColor="white" id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="300" color="rgb(242, 252, 253)" />
            </Suspense>
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl px-8 mb-4 flex justify-center items-center gap-4">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
            <Suspense fallback={<Loading/>}>
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </Suspense>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Ecommerce