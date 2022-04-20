import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
    const [athPrice, setAthPrice] = useState('')
    const [atlPrice, setAtlPrice] = useState('')
    const [athDate, setAthDate] = useState('')
    const [atlDate, setAtlDate] = useState('')



    // const getTodaysDate = () => {
    //     let today = new Date();
    //     let dd = String(today.getDate()).padStart(2, '0');
    //     let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    //     let yyyy = today.getFullYear();
    //     setYear(yyyy)
    //     today = `${dd}-${mm}-${yyyy}`;
    //     return today
    // }

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

                    if (Object.keys(res.data).includes('market_data')) {
                        coinInfo.push(res.data)
                    }
                    else {
                        return
                    }
                }).catch((err) => {
                    throw console.log('network')
                })

            }

            let year = today.getFullYear()
            for (let i = 0; i < coinInfo.length; i++) {
                coinInfo[i].year = year -= 1
            }
            setCoinData(coinInfo)
        }
        getCoinData(activeCoin, 10)




    }, [activeCoin])


    useEffect(() => {

        const coinRequest = (coin) => {
            axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`)
                .then((res) => {

                    let price = res.data.market_data.current_price.usd
                    let marketCap = formatter(res.data.market_data.market_cap.usd)
                    let volume = formatter(res.data.market_data.total_volume.usd)
                    let twitterFollows = formatter(res.data.community_data.twitter_followers)
                    let redditSubs = res.data.community_data.reddit_subscribers
                    let image = res.data.image.thumb
                    let athPrice = res.data.market_data.ath.usd
                    let atlPrice = res.data.market_data.atl.usd
                    let athDateInfo = new Date(res.data.market_data.ath_date.usd)
                    let athDate = athDateInfo.toDateString()
                    let atlDateInfo = new Date(res.data.market_data.atl_date.usd)
                    let atlDate = atlDateInfo.toDateString()

                    setPrice(price)
                    setMarketCap(marketCap)
                    setVolume(volume)
                    setTwitterFollowers(twitterFollows)
                    setRedditSubs(redditSubs)
                    setImage(image)
                    setAthDate(athDate)
                    setAtlPrice(atlPrice)
                    setAthPrice(athPrice)
                    setAtlDate(atlDate)
                })
        }

        coinRequest(activeCoin)
    }, [activeCoin])





    const renderCoin = coinData.map((coin, idx) => {

        return <div key={idx} className=' bg-gray-800 m-1 p-1 text-white rounded-lg w-28 sm:w-56 lg:64' >
            <p className=' text-xs font-bold sm:text-lg'>{coin.year}</p>
            <img src={coin.image.thumb} alt={coin.name} className='m-auto w-5 sm:w-6 ' />

            <div className='p-1 '>
                {
                    coin.market_data.current_price.usd < 1 ?
                        <>
                            <p className='text-xs  text-gray-400  sm:text-sm md:text-lg'>Price</p>
                            <p className=' text-sm  font-bold sm:text-lg md:text-3xl' >${coin.market_data.current_price.usd.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 8
                            })}</p> </> : <>
                            <p className='text-xs text-gray-400 sm:text-sm md:text-lg'>Price</p>
                            <p className=' text-sm  font-bold sm:text-lg md:text-3xl'>${coin.market_data.current_price.usd.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</p>
                        </>
                }
            </div>
            <div className=''>
                <p className='text-xs text-gray-400 sm:text-sm md:text-lg'>Market Cap </p>
                <p className='text-xs font-bold sm:text-lg  md:text-3xl'> ${formatter(coin.market_data.market_cap.usd)}</p>
            </div>

            <div className='p-1'>
                <p className='text-xs text-gray-400 sm:text-sm md:text-lg'> 24h volume </p>
                <p className='text-xs font-bold sm:text-lg  md:text-3xl'>${formatter(coin.market_data.total_volume.usd)} </p>
            </div>
            {
                coin.community_data.twitter_followers !== null ? <>
                    <div className=''>

                        <p className='text-xs text-gray-400 sm:text-sm md:text-lg'> <TwitterIcon /> Followers </p>
                        <p className='text-xs sm:text-lg  md:text-lg'>{formatter(coin.community_data.twitter_followers)}</p>
                    </div>
                </> : <> <div className=''>

                    <p className='text-xs text-gray-400 sm:text-sm md:text-lg'> <TwitterIcon /> Followers </p>
                    <p className='text-xs sm:text-lg  md:text-xl'> N/A</p>
                </div>
                </>
            }

            {
                coin.community_data.reddit_subscribers !== null ? <>
                    <div className=''>
                        <p className='text-xs text-gray-400 sm:text-sm md:text-lg'> <RedditIcon /> Subscribers </p>
                        <p className='text-xs sm:text-lg md:text-lg'> {formatter(coin.community_data.reddit_subscribers)}</p>
                    </div>
                </> : <>
                    <div className=''>
                        <p className='text-xs text-gray-400 sm:text-sm md:text-lg'> <RedditIcon /> Subscribers </p>
                        <p className='text-xs sm:text-lg md:text-lg'> N/A</p>
                    </div>
                </>
            }

        </div >
    })

    return (
        <>
            <div >
                <p className='text-white text-center m-1 sm:text-2xl '>{activeCoin.toUpperCase()}</p>

                <CoinInfo

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
                    image={image} />


            </div>
            <div className='w-12/12 m-auto flex'>
                <div className='flex justify-center text-center flex-wrap m-auto  md:min-w-2'>
                    {renderCoin}
                </div>
            </div>
        </>
    )
}
export default CoinDetail



