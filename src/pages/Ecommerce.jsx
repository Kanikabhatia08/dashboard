import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go"
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import { Button } from '../components';
import {Stacked,SparkLine} from '../components';

const Ecommerce = () => {
  return (
    <div className='mt-5 '>
      <div className='flex flex-wrap  '>

      {/* Earnings */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full xl:w-80 p-8 pt-9 m-4 
          bg-hero-pattern bg-no-repeat bg-cover bg-center ">
        
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl">$63,448.78</p>
          </div>
          <button
            type="button"
            style={{ backgroundColor: "blue" }}
            className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4"
          >
            <BsCurrencyDollar />
          </button>
        </div>

        <div className='mt-6'>
          <Button 
            color="white"
            bgColor="blue"
            text="Download"
            borderRadius="10px"
            size="md"
          />
        </div>
      </div>

      {/* Earnings Map */}
      <div className='flex m-4 md:m-0 flex-wrap justify-center gap-4 items-center'>
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
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-4 p-4 rounded-2xl md:w-780  ">
          <div className='flex justify-between'>
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center text-gray-600 hover:drop-shadow-xl'>
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
                <SparkLine 
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className='mt-10'>
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>

            </div>
            {/* Stacked chart */}
            <div>
              <Stacked
                height="320px"
                width="360px"
              />
            </div>

          </div>

          
        </div>

      </div>

    </div>
    </div>
  )
}

export default Ecommerce