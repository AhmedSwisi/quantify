export {}

declare global {
    interface ChartData {
        data:ChartOptionsWithReturnArrau
    }
    interface ChartQuote {
        quotes: Array
    }
    interface QuoteData{
        date: Date,
        high:number,
        volume:number,
        open:number,
        low:number,
        close:number,
        adjclose:number
    }
    interface QuoteArray{
        [index:number]: QuoteData
    }
}