import axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react'
import CoinInfo from './CoinInfo'

const CoinDetail = ({ activeCoin }) => {






    const [coinData, setCoinData] = useState([])

    const [year, setYear] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [marketCap, setMarketCap] = useState('')
    const [volume, setVolume] = useState('')
    const [twitterFollowers, setTwitterFollowers] = useState('')
    const [redditSubs, setRedditSubs] = useState('')
    const [totalSupply, setTotalSupply] = useState('')
    const [circulatingSupply, setCirculatingSupply] = useState('')
    const [athPrice, setAthPrice] = useState('')
    const [atlPrice, setAtlPrice] = useState('')
    const [athDate, setAthDate] = useState('')
    const [atlDate, setAtlDate] = useState('')
    const [rank, setRank] = useState('')
    const [symbol, setSymbol] = useState('')



    const getTodaysDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        setYear(yyyy)
        today = `${dd}-${mm}-${yyyy}`;
        return today
    }

    // useMemo prevent getTodaysDate function from running again everytime this component is re-rendered
    // this is to imporove efficiency, Typically it takes a dependency in the array but because we dont
    // pass any parameters inside this function it doesn't really ever change, if the return of the function  
    // were to change constantly then we would require a dependency as a form to run again when it recognizes 
    // the return value is different. 
    const getDate = useMemo(() => getTodaysDate(), [])


    useEffect(() => {
        const getCoinData = async (coin, years) => {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            const coinInfo = []

            for (let i = 0; i < years; i++) {
                yyyy -= 1
                await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/history?date=${dd}-${mm}-${yyyy}`).then((res) => {
                    if (Object.keys(res.data).includes('market_data')) {
                        coinInfo.push(res.data)
                        return
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }
            setCoinData(coinInfo)
        }
        getCoinData(activeCoin, 8)

    }, [activeCoin])

    useEffect(() => {

        const coinRequest = (coin) => {
            axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
                .then((res) => {
                    let symbol = res.data.symbol
                    let price = res.data.market_data.current_price.usd
                    let marketCap = res.data.market_data.market_cap.usd
                    let volume = res.data.market_data.total_volume.usd
                    let twitterFollows = res.data.community_data.twitter_followers
                    let redditSubs = res.data.community_data.reddit_subscribers
                    let image = res.data.image.small
                    let circulatingSupply = res.data.market_data.circulating_supply
                    let athPrice = res.data.market_data.ath.usd
                    let atlPrice = res.data.market_data.atl.usd
                    let athDate = res.data.market_data.ath_date.usd
                    let atlDate = res.data.market_data.atl_date.usd
                    let totalSupply = res.data.market_data.total_supply
                    let rank = res.data.market_data.market_cap_rank
                    setPrice(price)
                    setCirculatingSupply(circulatingSupply)
                    setTotalSupply(totalSupply)
                    setCirculatingSupply(circulatingSupply)
                    setMarketCap(marketCap)
                    setVolume(volume)
                    setTwitterFollowers(twitterFollows)
                    setRedditSubs(redditSubs)
                    setImage(image)
                    setAthDate(athDate)
                    setAtlPrice(atlPrice)
                    setAthPrice(athPrice)
                    setTotalSupply(totalSupply)
                    setRank(rank)
                    setSymbol(symbol)
                    setAtlDate(atlDate)
                })
        }

        coinRequest(activeCoin)
    }, [activeCoin])



    const renderCoin = coinData.map((coin, idx) => {
        return <div key={idx} className=' bg-gray-800 m-2 p-3 text-white rounded-lg w-64' >
            <img src={coin.image.thumb} className='m-auto ' />

            {
                coin.market_data.current_price.usd < 1 ?
                    <>
                        <p className='mt-2'>Price</p>
                        <p className='text-3xl font-bold ' >${coin.market_data.current_price.usd.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 8
                        })}</p> </> : <>
                        <p className='mt-2'>Price</p>
                        <p className='text-4xl font-bold '>${coin.market_data.current_price.usd.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                    </>
            }

            <p className='mt-2'> Market Cap </p>
            <p className='text-2xl font-bold'> ${coin.market_data.market_cap.usd.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</p>

            <p className='mt-2'> 24-hour trading volume </p>
            <p className='text-2xl font-bold'>${coin.market_data.total_volume.usd.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}

            </p>
            {coin.community_data.twitter_followers !== null ? <>
                <p className='mt-2'>Twitter Followers </p>
                <p className='text-3xl font-bold	'>{coin.community_data.twitter_followers.toLocaleString()}</p></> :
                <>
                    <p className='hidden'>Twitter Followers </p>
                    <p className='hidden'> N/A</p>
                </>
            }
            {
                coin.community_data.reddit_subscribers !== null ? <>
                    <p className='mt-2'>Reddit Subscribers </p>
                    <p className='text-3xl font-bold'> {coin.community_data.reddit_subscribers.toLocaleString()}</p></> : <>
                    <p className='hidden'>Reddit Subscribers </p>
                    <p className='hidden'> N/A</p>
                </>
            }

        </div >
    })

    return (
        <>
            <div className=''>
                <p className='text-white text-4xl text-center m-2'>{activeCoin.toUpperCase()}</p>

                <CoinInfo
                    totalSupply={totalSupply}
                    circulatingSupply={circulatingSupply}
                    rank={rank}
                    athPrice={athPrice}
                    athDate={athDate}
                    atlDate={atlDate}
                    atlPrice={atlPrice}
                    year={year} price={price}
                    marketCap={marketCap}
                    volume={volume}
                    twitterFollowers={twitterFollowers}
                    redditSubs={redditSubs}
                    symbol={symbol}
                    image={image} />


            </div>
            <div className='w-8/12  m-auto flex'>
                <div className='flex justify-center text-center flex-wrap m-auto hover:justify-between"'>
                    {renderCoin}
                </div>
            </div>
        </>
    )
}
export default CoinDetail



