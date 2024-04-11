import React, { Suspense } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import Loading from '../components/Loading';
const Header = React.lazy(() => import('../components/Header'));

const Calendar = () => {

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Suspense fallback={<Loading/>}>
        <Header category="App" title="Calendar" />
      </Suspense>
      <div className='rounded-3xl'>
      <ScheduleComponent
        height="650px"
        selectedDate={new Date(2021, 0, 10)}
        eventSettings={{ dataSource: scheduleData }}
        className='rounded-3xl'
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      
      </div>
      
    </div>
  );
};

export default Calendar;