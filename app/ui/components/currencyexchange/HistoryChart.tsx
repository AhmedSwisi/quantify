'use client'
import React, {Suspense, useEffect, useState} from 'react'
import { Line } from 'react-chartjs-2'
import {Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler, ScriptableContext, TimeScale, elements} from 'chart.js'; 
import type { ChartResultArray } from '../../../../node_modules/yahoo-finance2/dist/esm/src/modules/chart.d.ts';

Chart.register(Filler)
Chart.register(TimeScale)
Chart.register(CategoryScale);
Chart.register(LinearScale)
Chart.register(PointElement)
Chart.register(LineElement)


const HistoryChart:React.FC<ChartResultArray> = (props:ChartResultArray) => {
  
    const chartData ={
      labels:props.quotes.map((quote) => quote.date.toLocaleDateString()),
      datasets:[{
        color:"#FFF",
        label:"Rate",
        data: props.quotes.map((quote) => quote.high),
        borderColor:"rgba(101, 33, 237, 1)",
        pointColor: "rgba(101, 33, 237, 1)",
        pointStrokeColor:"rgba(101, 33, 237, 1)",
        pointHighlightFill:"rgba(101, 33, 237, 1)",
        pointBackgroundColor:"rgba(101, 33, 237, 1)",
        pointHoverBackgroundColor:"rgba(101, 33, 237, 1)",
        pointBorderColor:"rgba(101, 33, 237, 1)",
        
        
        backgroundColor: (context: ScriptableContext<"line">) => {

          if (!context.chart.chartArea){
            return;
          }
          const {ctx, data, chartArea: {top, bottom}} = context.chart;
          const gradient = ctx.createLinearGradient(0,top,0,bottom)
          gradient.addColorStop(0,"rgba(123, 57, 255, 1)")
          gradient.addColorStop(1,"rgba(123, 57, 255, 0)")
          return gradient
        },
        borderWidth: 2,
        
        
        fill:true
      }]
    }


    // const data = props.quotes.map(({volume,open,low,close,adjclose, ...data}) => data )
    // console.log(data, "here is the graph data")
    // console.log(props, "props")
    
  return (
    <div style={{width:500}} className='h-96'>
        <Line role='graph' data={chartData}
        options={{
          plugins:{
            filler:{
              propagate:true
            },
          },
          maintainAspectRatio:false,
          
          scales:{
            x:{
              afterBuildTicks:(axis) => {
                let originalTicks = axis.ticks;
                if (originalTicks.length > 2) {
                  axis.ticks = [originalTicks[0], originalTicks[originalTicks.length - 1]];
              }
            },
              title:{
                color:"#000",
                display:true,
                font:{
                  size:24,
                  
                },
                text:"Date"
              },
              display: true,
              ticks:{
                color:"#000"
              },
              grid:{
                display:false
              }
            },
            y: {
              ticks:{
                color:"#000"
              },
              title:{
                display:true,
                text:"Value",
                color:"#000",
                font:{
                  size:24


                }
              },
              
              grid:{
                display:false
              }
            }
          }

        }}></Line>
    </div>
  )
}

export default HistoryChart