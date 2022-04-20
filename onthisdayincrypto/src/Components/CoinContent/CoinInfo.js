import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';




const CoinInfo = ({ formatter, athPrice, athDate, atlPrice, atlDate, price, marketCap, volume, twitterFollowers, redditSubs, image }) => {


    return (
        <div className="flex items-center bg-gray-800 m-auto p-1 text-white rounded-lg w-11/12 sm:w-10/12 md:sm:w-9/12 lg:w-8/12  2xl:w-6/12 "  >

            <div className='flex flex-col text-center w-1/3 '>


                {athPrice < 1 ? <div className=' m-1  p-1 sm:m-1  lg:text-2xl '>
                    <p className='text-xs text-gray-400 sm:text-sm  md:text-xl lg:text-2xl '> All-time high </p>
                    <p className='text-xs font-bold sm:text-lg md:text-2xl lg:text-2xl'>${athPrice}</p>
                    <p className='text-xs text-gray-400  sm:text-sm  md:text-xl lg:text-2xl'>{athDate}</p>

                </div> : <div className=' m-1  p-1  sm:m-1  md:text-xl lg:text-2xl'>
                    <p className='text-xs text-gray-400 sm:text-sm md:text-lg  lg:text-2xl'> All-time high </p>
                    <p className='text-xs font-bold sm:text-lg md:text-2xl lg:text-2xl '>${athPrice.toLocaleString()}</p>
                    <p className='text-xs text-gray-400  sm:text-sm  md:text-xl lg:text-2xl'>{athDate}</p>

                </div>
                }

                {
                    atlPrice < 1 ? <div className=' p-1 m-1  sm:m-1 '>
                        <p className=' text-xs text-gray-400  sm:text-sm md:text-lg lg:text-2xl'>All-time low</p>
                        <p className=' text-xs font-bold sm:text-lg md:text-2xl lg:text-2xl'>${formatter(atlPrice)}  </p>
                        <p className=' text-xs text-gray-400 sm:text-dm  md:text-xl lg:text-2xl'>{atlDate}</p>

                    </div> : <div className=' p-1 m-1  sm:m-1 '>
                        <p className=' text-xs text-gray-400  sm:text-sm md:text-xl lg:text-2xl'>All-time low</p>
                        <p className=' text-xs font-bold sm:text-lg md:text-2xl lg:text-2xl'>${atlPrice.toLocaleString()}  </p>
                        <p className=' text-xs text-gray-400 sm:text-sm md:text-xl lg:text-2xl'>{atlDate}</p>
                    </div>
                }




            </div>
            <div className='text-center w-1/3'>
                <p className='text-gray-400 text-xs font-bold  sm:text-sm  md:text-xl'>Today</p>
                <img className='w-5 m-auto sm:w-8' src={image} />
                {
                    price < 1 ? <>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-xl'>Price</p>
                        <p className='text-sm font-bold  sm:text-lg '>${price.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 8
                        })}</p>
                    </> :
                        <>
                            <p className='text-gray-400 text-xs sm:text-sm md:text-xl'>Price</p>
                            <p className=' text-sm font-bold sm:text-lg  md:text-2xl'> ${price.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</p>
                        </>

                }

                <p className='text-gray-400 text-xs sm:text-sm md:text-xl'>Market cap </p>
                <p className='text-xs font-bold sm:text-lg md:text-2xl' > ${marketCap.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>
                <p className='text-gray-400 text-xs sm:text-sm md:text-xl'>24h volume</p>
                <p className='text-xs font-bold sm:text-lg md:text-2xl '>  ${volume.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>

            </div>


            <div className='w-1/3 text-center'>
                <div className='m-2'>
                    <p className='text-xs text-gray-400 sm:text-sm  md:text-xl' > <TwitterIcon /> Followers </p>
                    {
                        twitterFollowers && twitterFollowers !== null ?
                            < p className='text-xs text-white font-bold sm:text-lg md:text-xl'> {formatter(twitterFollowers)}</p> : < p className=' text-xs sm:text-sm  md:text-xl'>N/A</p>
                    }
                </div>

                <div className=' m-2'>
                    <p className='text-xs text-gray-400 sm:text-sm  md:text-xl'><RedditIcon /> Subscribers</p>
                    {
                        redditSubs && redditSubs !== null ?
                            < p className='text-xs text-white font-bold sm:text-lg md:text-xl' > {formatter(redditSubs)}</p> : < p className='text-xs sm:text-sm  md:text-xl'>N/A</p>
                    }
                </div>
            </div>
        </div>
    )
}
export default CoinInfo