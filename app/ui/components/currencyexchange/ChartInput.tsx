
import React from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectLabel, SelectGroup, SelectItem } from '@/components/ui/select'
import { Input } from '@/components/ui/input'

const ChartInput = () => {
  return (
    <div className="flex flex-row">
        <Select defaultValue="USD" >
            <SelectTrigger  className="border-black w-20 rounded-r-none focus:shadow-none focus:ring-0  focus:outline-0 focus:border-2 focus:ring-offset-0   ">
                <SelectValue placeholder="Select a currency" />
            </SelectTrigger>
            <SelectContent position="popper" align="start" className="flex flex-col items-center m-0 justify-start">
                <SelectGroup >
                <SelectLabel>Currencies</SelectLabel>
                <SelectItem value='HI'>HI</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        <Input pattern="^\d+(?:\.\d{1,2})?$" step={".01"} type="number" className="border-black border-l-0 w-40  rounded-l-none  focus-visible:ring-0 focus-visible:border-2  focus-visible:shadow-transparent focus-visible:ring-offset-0 focus:border-2"></Input>
      </div>
  )
}

export default ChartInput