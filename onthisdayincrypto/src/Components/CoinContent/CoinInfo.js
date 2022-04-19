import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
const CoinInfo = ({ formatter, rank, athPrice, athDate, circulatingSupply, totalSupply, atlPrice, atlDate, price, marketCap, volume, twitterFollowers, redditSubs, image, symbol }) => {



    return (
        <div className="flex items-center bg-gray-800 m-auto p-3 text-white rounded-lg w-4/12  "  >

            <div className='flex flex-col text-center w-1/3 '>

                <div className='border-t border-b m-1 rounded-lg '>
                    <p> All-time high </p>
                    <p className='font-bold text-xl'>${athPrice.toLocaleString()}</p>
                    <p>{athDate}</p>

                </div>
                <div className='border-t border-b m-1 rounded-lg '>
                    <p>All-time low</p>
                    <p className='font-bold text-xl'>${atlPrice.toLocaleString()}  </p>
                    <p>{atlDate.toLocaleString()}</p>

                </div>
                <div className=' border-t border-b  m-1 rounded-lg'>
                    <p> Circulating Supply</p>
                    {
                        circulatingSupply && <p className='l'><span className='font-bold '> {circulatingSupply} </span>{symbol} </p>
                    }
                </div>

                {
                    totalSupply && <div className='m-1 border-t border-b rounded-lg '>
                        <p>Total Supply</p>
                        <p className=''> <span className='font-bold '>{totalSupply.toLocaleString()}</span> {symbol}</p>
                    </div>

                }

            </div>
            <div className='text-center w-1/3'>
                <p className=' font-bold'>#{rank}</p>
                <p className=''>Today</p>
                <img className='m-auto' src={image} />
                {
                    price < 1 ? <>
                        <p>Price</p>
                        <p className=' text-2xl font-bold '>${price.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 8
                        })}</p>
                    </> :
                        <>
                            <p>Price</p>
                            <p className=' text-2xl font-bold '> ${price.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</p>
                        </>

                }

                <p>Market cap </p>
                <p className='text-2xl font-bold' > ${marketCap.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>
                <p>24-hour trading volume</p>
                <p className=' text-2xl font-bold'>  ${volume.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>

            </div>


            <div className='w-1/3 text-center'>

                <div className='text-black bg-gray-200 p-3 m-1 rounded-lg'>
                    <p> <TwitterIcon /> Followers </p>
                    {
                        twitterFollowers &&
                        <p className=' font-bold'> {formatter(twitterFollowers)} </p>
                    }
                </div>

                <div className='text-black bg-gray-200 p-3 m-1 rounded-lg'>
                    <p><RedditIcon /> Subscribers:</p>
                    {
                        redditSubs &&
                        < p className=' font-bold'> {formatter(redditSubs)}</p>
                    }
                </div>
            </div>

        </div >
    )
}
export default CoinInfo