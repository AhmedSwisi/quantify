'use client'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { Separator } from "@/components/ui/separator"
import currencyMap from "@/app/utils/currencies"
import { Component } from "lucide-react"
import { getExchangeRates } from "@/app/apis/currencyapi"


const LiveConvertInput = () => {

  
  const currencyCodes = Object.values(currencyMap)
  
  function removeDuplicates(arr: Array<string>) {
    return arr.filter((item: string,
        index: number) => arr.indexOf(item) === index);
}

const firstInputRef = useRef(null)

const [rates, setRates] = useState<any>()
const [currencyOne, setCurrencyOne] = useState("USD")
const [currencyTwo, setCurrencyTwo] = useState("EGP")
const [currencyValueOne, setCurrencyValueOne] = useState<string>('')
const [currencyValueTwo, setCurrencyValueTwo] = useState<string>('')

useEffect(() => {
  const fetchData = async () =>{
    setRates(await getExchangeRates(currencyOne))
  }
  // fetchData()
}, [currencyOne])

const onFirstSelectValueChange = async (e:string) => {
  setCurrencyOne(e)
  const newRates = await getExchangeRates(e)
  if (newRates) {
    console.log(newRates)
    setRates(newRates)
    const value = parseInt(currencyValueOne)
    console.log(rates, "rates here")
    const convertedValue = value * newRates.conversion_rates[currencyTwo]
    console.log(convertedValue, "converted")
    setCurrencyValueTwo(convertedValue.toString())
  
  console.log(currencyOne)
}}

const onSecondSelectValueChange = (e:string) => {
  setCurrencyTwo(e)
  console.log(currencyTwo)
  const value = parseInt(currencyValueTwo)
  const convertedValue = value / rates.conversion_rates[e] 
  console.log(convertedValue)
  setCurrencyValueOne(convertedValue.toString())
}

const onFirstInputValueChange = (e:ChangeEvent<HTMLInputElement>) => {
  setCurrencyValueOne(e.target.value)
  const value = parseInt(e.target.value)
  if (rates !== undefined){
    const convertedValue = value * rates.conversion_rates[currencyTwo]
    console.log(convertedValue)
    setCurrencyValueTwo(convertedValue.toString())
  }
}

const onSecondInputValueChange = (e:ChangeEvent<HTMLInputElement>) => {
  setCurrencyValueTwo(e.target.value)
  const value = parseInt(e.target.value)
  if (rates !== undefined){
    const convertedValue = value / rates.conversion_rates[currencyTwo] 
    console.log(convertedValue)
    setCurrencyValueOne(convertedValue.toString())
  }
}

const codes = removeDuplicates(currencyCodes)

  return (
    <div className='flex flex-row items-center pt-5 gap-4'>
      <div className="flex flex-row">
        <Select onValueChange={onFirstSelectValueChange} defaultValue="USD" >
            <SelectTrigger  className="border-black w-20 rounded-r-none focus:shadow-none focus:ring-0  focus:outline-0 focus:border-2 focus:ring-offset-0   ">
                <SelectValue placeholder="Select a currency" />
            </SelectTrigger>
            <SelectContent position="popper" align="start" className="flex flex-col items-center m-0 justify-start">
                <SelectGroup >
                <SelectLabel>Currencies</SelectLabel>
                {codes.map((code, key) => (<SelectItem value={code} key={key}>{code}</SelectItem>))}
                </SelectGroup>
            </SelectContent>
        </Select>
        <Input pattern="^\d+(?:\.\d{1,2})?$" step={".01"} ref={firstInputRef} value={currencyValueOne} type="number" onChange={onFirstInputValueChange} className="border-black border-l-0 w-40  rounded-l-none  focus-visible:ring-0 focus-visible:border-2  focus-visible:shadow-transparent focus-visible:ring-offset-0 focus:border-2"></Input>
      </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="#561BCC" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
        <div className="flex flex-row-reverse">
        <Select onValueChange={onSecondSelectValueChange} defaultValue="EGP">
            <SelectTrigger className="border-black w-20 rounded-l-none focus:shadow-none focus:ring-0  focus:outline-0 focus:border-2 focus:ring-offset-0   ">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>Currencies</SelectLabel>
                {codes.map((code, key) => (<SelectItem value={code} key={key}>{code}</SelectItem>))}
                </SelectGroup>
            </SelectContent>
        </Select>
        <Input step=".01" pattern="^\d+(?:\.\d{1,2})?$" value={currencyValueTwo} type="number" onChange={onSecondInputValueChange} className="border-black border-r-0 w-40  rounded-r-none  focus-visible:ring-0 focus-visible:border-2  focus-visible:shadow-transparent focus-visible:ring-offset-0 focus:border-2"></Input>
      </div>
    </div>
  )
}

export default LiveConvertInput