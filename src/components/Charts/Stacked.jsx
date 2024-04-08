import React from 'react'
import { Category, Inject, ChartComponent, Legend, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'


const Stacked = ({width, height}) => {
  return (

    <ChartComponent
      width={width}
      height={height}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    </ChartComponent>
  )
}

export default Stacked