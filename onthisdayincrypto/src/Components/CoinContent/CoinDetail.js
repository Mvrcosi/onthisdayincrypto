import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CoinDetail = ({ activeCoin }) => {


    // const [year, setYear] = useState('')
    // const [price, setPrice] = useState('')
    // const [marketCap, setMarketCap] = useState('')
    // const [volume, setVolume] = useState('')
    // const [twitterFollowers, setTwitterFollowers] = useState('')
    // const [redditSubs, setRedditSubs] = useState('')

    // const getTodaysDate = () => {
    //     let today = new Date();
    //     let dd = String(today.getDate()).padStart(2, '0');
    //     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //     let yyyy = today.getFullYear() - 7;
    //     setYear(yyyy)
    //     today = `${dd}-${mm}-${yyyy}`;
    //     return today
    // }


    const [coinData, setCoinData] = useState([])






    useEffect(() => {
        const getCoinData = async (coin, years) => {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            const coinStuff = []

            for (let i = 0; i < years; i++) {
                yyyy -= 1
                await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/history?date=${dd}-${mm}-${yyyy}`).then((res) => {
                    coinStuff.push(res.data)
                }).catch((err) => {
                    console.log(err)
                })
            }
            setCoinData(coinStuff)
        }
        getCoinData(activeCoin, 3)

    }, [activeCoin])

    let year1;
    let year2;
    let year3;
    [year1, year2, year3] = coinData

    console.log(year1)
    console.log(year2)
    console.log(year3)

    // useEffect(() => {

    //     const coinRequest = (coin, date) => {
    //         axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/history?date=${date}`)
    //             .then((res) => {
    //                 console.log(res.data.market_data.current_price.usd)
    //                 let price = res.data.market_data.current_price.usd
    //                 let marketCap = res.data.market_data.market_cap.usd
    //                 let volume = res.data.market_data.total_volume.usd
    //                 let twitterFollows = res.data.community_data.twitter_followers
    //                 let redditSubs = res.data.community_data.reddit_subscribers
    //                 let dateSearch = date
    //                 setPrice(price)
    //                 setMarketCap(marketCap)
    //                 setVolume(volume)
    //                 setTwitterFollowers(twitterFollows)
    //                 setRedditSubs(redditSubs)
    //             })
    //     }

    //     coinRequest(activeCoin, getTodaysDate())
    // }, [activeCoin])




    // const renderCoinInfo = coinData.map((coin) => {
    //     console.log(coin)
    //     return <div>
    //         <div>
    //             <p>${coin.market_data.current_price.usd}</p>
    //         </div>
    //     </div>
    // })

    return (
        <>
            <p className='text-white text-4xl text-center'>{activeCoin.toUpperCase()}</p>
            <div className='w-9/12  m-auto flex'>
                <div className='flex bg-slate-50 rounded-lg items-center justify-center w-full flex-col'>
                    {/* {renderCoinInfo} */}
                    {/* <CoinInfo year={year} price={price} marketCap={marketCap} volume={volume} twitterFollowers={twitterFollowers} redditSubs={redditSubs} /> */}
                </div>
            </div>
        </>
    )
}
export default CoinDetail