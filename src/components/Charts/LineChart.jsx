import { ChartComponent, DateTime, Legend, LineSeries, Tooltip, Inject, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts'
import React from 'react'
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {

  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={ currentMode === 'Dark' ? { background: "#33373E" } : { background: "#fff"} }
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default LineChart;