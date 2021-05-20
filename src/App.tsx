import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, HiloSeries, Inject, DateTime,
Tooltip, Crosshair } from '@syncfusion/ej2-react-charts';
import './App.css';
import {chartData} from './data';
function App() {
  return (
    //Hilo Chart
   <ChartComponent title="AAPL Historical" 
   primaryXAxis={{valueType:"DateTime", minimum:new Date( '2016, 12, 31'), 
   maximum:new Date( '2017, 9, 30'), labelFormat:"yMMM", title: "Month",
  crosshairTooltip:{enable: true}}}
   primaryYAxis={{title:"Price"}}
   tooltip={{enable: true}}
   crosshair={{enable: true, lineType:"Vertical"}}>
     <Inject services={[HiloSeries, DateTime, Tooltip, Crosshair]}></Inject>
     <SeriesCollectionDirective>
       {/* To create Hilo Open Close series, import HiloOpenCloseSeries from the chart package and inject it into chart services. Then change the series type to HiloOpenClose*/}
       {/* import CandleSeries from chart package and inject it into chart series. Then change services type to Candle*/}
       <SeriesDirective type="Hilo" name="Apple INC." dataSource={chartData} 
       xName="date" high="high" low="low" open="open" close="close"
       ></SeriesDirective>
     </SeriesCollectionDirective>
   </ChartComponent>
  );
}

export default App;
