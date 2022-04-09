import React from 'react'

const CoinDetail = ({ activeCoin }) => {

    // const getTodaysDate = (year) => {
    //     let today = new Date();
    //     let dd = String(today.getDate()).padStart(2, '0');
    //     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //     let yyyy = today.getFullYear();
    //     today = `${dd}-${mm}-${yyyy}`;
    //     return today
    // }

    // useEffect(() => {
    //     const coinRequest = (coin, date) => {
    //         axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}`)
    //             .then((res) => {

    //                 let name = res.data.name
    //                 let price = res.data.market_data.current_price.usd
    //                 let marketCap = res.data.market_data.market_cap.usd
    //                 let volume = res.data.market_data.total_volume.usd
    //                 let dateSearch = date
    //                 console.log(name, price, marketCap, volume, dateSearch)
    //             })

    //     }

    //     coinRequest('bitcoin', getTodaysDate())
    // }, [])


    return (
        <div className='text-white'>{activeCoin}</div>
    )
}

export default CoinDetail