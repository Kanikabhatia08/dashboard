import React, { Suspense } from 'react'
import {Inject, ColumnsDirective, GridComponent, Page, Search, Toolbar, PdfExport } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy'
import { ColumnDirective } from '@syncfusion/ej2-react-charts'
import Loading from '../components/Loading'

const Header = React.lazy(() => import('../components/Header'));

const Employees = () => {
  let grid;
  const toolbarClick = (args) => {
    if (grid && 'Grid_pdfexport') {
      grid.pdfExport();
    }
  }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Suspense fallback={<Loading/>}>
        <Header category="Page" title="Employees" />
      </Suspense>

      
      <div className='p-3 bg-white rounded-3xl'>
        <GridComponent 
          dataSource={employeesData}
          allowPaging
          allowSorting
          toolbar={['Search','PdfExport']}
          width='auto'
          allowPdfExport={true}
          toolbarClick={toolbarClick} ref={g => grid = g}
        >
          <ColumnsDirective>
            {
              employeesGrid.map((item,index) =>(
                <ColumnDirective key={index} {...item} />
              ))
            }
          </ColumnsDirective>
          <Inject services={[Search, Page, Toolbar,PdfExport  ]} />
        </GridComponent>
      </div>

    </div>
  )
}

export default Employees