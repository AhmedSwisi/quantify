import React from 'react'
import HistoryChart from './HistoryChart'
import { getChartData } from '@/app/apis/currencyapi'
import { liveConvert } from '@/app/apis/currencyapi'
import { Input } from '@/components/ui/input'
import LiveConvertInput from './LiveConvertInput'
import ChartInput from './ChartInput'


const HistoryChartWrapper = async () => {
    const data = await getChartData()
    console.log(data)
  return (
    <div className='flex flex-col ml-4 gap-6'>
        <LiveConvertInput />
        <ChartInput />
        <HistoryChart meta={data.meta} quotes={data.quotes} />
    </div>
  )
}

export default HistoryChartWrapper