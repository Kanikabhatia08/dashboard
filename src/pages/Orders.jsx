import React from 'react'
import { Header } from '../components'
import {Inject, ColumnsDirective, ContextMenu, Edit, ExcelExport, Filter, GridComponent, Page, PdfExport, Resize, Sort } from '@syncfusion/ej2-react-grids'
import { ordersData, ordersGrid } from '../data/dummy'
import { ColumnDirective } from '@syncfusion/ej2-react-charts'


const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Page" title="Orders" />
      <div className='p-3 bg-white rounded-3xl'>
        <GridComponent 
          id='gridcomp' 
          dataSource={ordersData}
          allowPaging
          allowSorting
        >
          <ColumnsDirective>
            {
              ordersGrid.map((item,index) =>(
                <ColumnDirective key={index} {...item} />
              ))
            }
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
        </GridComponent>
      </div>
    </div>
  )
}

export default Orders