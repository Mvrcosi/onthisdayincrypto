import axios from 'axios'
import React, { useEffect, useState, useMemo } from 'react'
import CoinInfo from './CoinInfo'
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';

const CoinDetail = ({ activeCoin }) => {




    const formatter = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
        return n
    }


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

    const coinInfo = []

    useEffect(() => {


        const getCoinData = async (coin, years) => {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();

            for (let i = 0; i < years; i++) {
                yyyy -= 1
                await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}/history?date=${dd}-${mm}-${yyyy}`).then((res) => {
                    console.log(i)
                    if (Object.keys(res.data).includes('market_data')) {
                        coinInfo.push(res.data)
                    }
                }).catch((err) => {
                    console.log(err)
                })
            }

            let year = today.getFullYear()
            for (let i = 0; i < coinInfo.length; i++) {
                coinInfo[i].year = year -= 1
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
                    let marketCap = formatter(res.data.market_data.market_cap.usd)
                    let volume = formatter(res.data.market_data.total_volume.usd)
                    let twitterFollows = formatter(res.data.community_data.twitter_followers)
                    let redditSubs = res.data.community_data.reddit_subscribers
                    let image = res.data.image.small
                    let circulatingSupply = res.data.market_data.circulating_supply
                    let athPrice = res.data.market_data.ath.usd
                    let atlPrice = res.data.market_data.atl.usd
                    let athDateInfo = new Date(res.data.market_data.ath_date.usd)
                    let athDate = athDateInfo.toDateString()
                    let atlDateInfo = new Date(res.data.market_data.atl_date.usd)
                    let atlDate = atlDateInfo.toDateString()
                    let totalSupply = res.data.market_data.total_supply
                    let rank = res.data.market_data.market_cap_rank

                    setPrice(price)
                    setCirculatingSupply(circulatingSupply.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    }))

                    totalSupply !== null ?
                        setTotalSupply(totalSupply.toLocaleString('en-US', {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0
                        })) : setTotalSupply(totalSupply)
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
                    setSymbol(symbol.toUpperCase())
                    setAtlDate(atlDate)
                })
        }

        coinRequest(activeCoin)
    }, [activeCoin])





    const renderCoin = coinData.map((coin, idx) => {

        return <div key={idx} className=' bg-gray-800 m-1 p-2 text-white rounded-lg w-64' >
            <p className='text-gray-400 text-2xl font-bold'>{coin.year}</p>
            <img src={coin.image.thumb} className='m-auto  ' />

            <div>
                {
                    coin.market_data.current_price.usd < 1 ?
                        <>
                            <p className='mt-2'>Price</p>
                            <p className=' text-3xl font-bold ' >${coin.market_data.current_price.usd.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 8
                            })}</p> </> : <>
                            <p className=''>Price</p>
                            <p className=' text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</p>
                        </>
                }
            </div>
            <div className=''>
                <p className='text-gray-400'> Market Cap </p>
                <p className='text-2xl font-bold  '> ${formatter(coin.market_data.market_cap.usd)}</p>
            </div>

            <div className=''>
                <p className='text-gray-400'> 24-hour trading volume </p>
                <p className='text-2xl font-bold '>${formatter(coin.market_data.total_volume.usd)} </p>
            </div>
            {
                coin.community_data.twitter_followers && <>
                    <div className=''>

                        <p className='text-gray-400'> <TwitterIcon /> Followers </p>
                        <p className=' font-bold '>{formatter(coin.community_data.twitter_followers)}</p>
                    </div>
                </>

            }

            {
                coin.community_data.reddit_subscribers && <>
                    <div className=''>
                        <p className='text-gray-400'> <RedditIcon /> Subscribers </p>
                        <p className=' font-bold'> {formatter(coin.community_data.reddit_subscribers)}</p>
                    </div>
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
                    formatter={formatter}
                    twitterFollowers={twitterFollowers}
                    redditSubs={redditSubs}
                    symbol={symbol}
                    image={image} />


            </div>
            <div className='w-12/12 m-auto flex'>
                <div className='flex justify-center text-center flex-wrap m-auto hover:justify-between"'>
                    {renderCoin}
                </div>
            </div>
        </>
    )
}
export default CoinDetail



