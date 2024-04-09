import React from 'react'
import { Header } from '../components'
import {Inject, ColumnsDirective, GridComponent, Page, Search, Toolbar, PdfExport } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy'
import { ColumnDirective } from '@syncfusion/ej2-react-charts'


const Employees = () => {
  let grid;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (grid && 'Grid_pdfexport') {
      grid.pdfExport();
    }
  }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Page" title="Employees" />
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