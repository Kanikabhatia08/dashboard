import React, { Suspense } from 'react';
import Loading from '../components/Loading';
import { ColumnsDirective, KanbanComponent } from '@syncfusion/ej2-react-kanban'
import { kanbanData, kanbanGrid } from '../data/dummy'
import { ColumnDirective } from '@syncfusion/ej2-react-charts'
const Header = React.lazy(() => import('../components/Header'));

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg  rounded-3xl">
    <Suspense fallback={<Loading/>}>
      <Header category="App" title="Kanban" />
    </Suspense>
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      className='rounded-3xl pt-2'
    >
      <ColumnsDirective>
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
  )
}

export default Kanban