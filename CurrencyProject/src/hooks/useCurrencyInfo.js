import {useEffect, useState} from 'react';

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})
    useEffect(() => {
        // Fetch currency data from the API based on the selected currency
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        // Extract the currency object from the response and update state
        .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])
console.log(data)
    return data 
}

export default useCurrencyInfo;

