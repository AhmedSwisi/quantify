import { redirect } from "next/dist/server/api-utils";
import yahooFinance from "yahoo-finance2";


export const convertCurrency = async (from: string, to:string, amount:number) => {
    console.log(process.env.CURRENCY_API_KEY)
    const options = {
        method:'GET',
    }
    
    
    try {
        const response = await fetch(`https://marketdata.tradermade.com/api/v1/convert?api_key=${process.env.CURRENCY_API_KEY}&from=${from}&to=${to}&amount=${amount}`,options)
        if(response.ok){
            const data = await response.json()
            console.log(data)
            return data
        }
        else if(!response.ok){
            const error = await response.json()
            console.log(error.message)
        }
        
    } catch (error) {
        console.error(error)
    }
}

export const getExchangeRates = async (base:string) => {
    const options = {
        method:"GET"
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/8116b056f8de4ec7c49c2b6a/latest/${base}`,options)
        if(response.ok){
            const data = await response.json()
            return data
        }
        else if(!response.ok){
            const error = await response.json()
            console.log(error.message)
        }
        
    } catch (error) {
        console.error(error)
    }
}

export const getChartData = async () => {
    const chart = await yahooFinance.chart('EGP=X',{period1: '2021-05-08', period2: '2021-06-08'})
    console.log(chart)
    return chart
}
 
export const liveConvert = async (from: string, to: string, amount: number) => {
    const options = {
        method: 'GET',
        headers:{
            'Accept':'application/json',
        }
    }
    try {
        const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`,options)
        if(response.ok){
            const data = await response.json()
            console.log(data)
            console.log(data[to])
            const value = data[to] * amount
            console.log(value)
            return value
        }
        else if(!response.ok){
            const error = await response.json()
            console.log(error.message)
        }
        
        
    } catch (error) {
        console.error(error)
    }
}