import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';

interface CoinInfoProps {
    formatter:any;
    athPrice: number;
    athDate: string;
    atlPrice: number;
    atlDate: string;
    price: number;
    marketCap: number;
    volume: number;
    twitterFollowers: number;
    redditSubs:number;
    image:string;
}


const CoinInfo:React.FC<CoinInfoProps> = props => {


    return (
        <div className="flex items-center bg-gray-800 m-auto p-1 text-white rounded-lg w-11/12 sm:w-10/12 md:sm:w-9/12 lg:w-8/12  2xl:w-6/12 "  >

            <div className='flex flex-col text-center w-1/3 '>
                {props.athPrice < 1 ? <div className=' m-1  p-1 sm:m-1  lg:text-2xl '>
                    <p className='text-xs text-gray-400 sm:text-sm  md:text-xl lg:text-2xl '> All-time high </p>
                    <p className='text-xs font-bold sm:text-lg md:text-2xl lg:text-2xl'>${props.athPrice}</p>
                    <p className='text-xs text-gray-400  sm:text-sm  md:text-xl lg:text-2xl'>{props.athDate}</p>

                </div> : <div className=' m-1  p-1  sm:m-1  md:text-xl lg:text-2xl'>
                    <p className='text-xs text-gray-400 sm:text-sm md:text-lg  lg:text-2xl'> All-time high </p>
                    <p className='text-xs font-bold sm:text-lg md:text-2xl lg:text-2xl '>${props.athPrice.toLocaleString()}</p>
                    <p className='text-xs text-gray-400  sm:text-sm  md:text-xl lg:text-2xl'>{props.athDate}</p>

                </div>
                }

                {
                    props.atlPrice < 1 ? <div className=' p-1 m-1  sm:m-1 '>
                        <p className=' text-xs text-gray-400  sm:text-sm md:text-lg lg:text-2xl'>All-time low</p>
                        <p className=' text-xs font-bold sm:text-lg md:text-2xl lg:text-2xl'>${props.formatter(props.atlPrice)}  </p>
                        <p className=' text-xs text-gray-400 sm:text-dm  md:text-xl lg:text-2xl'>{props.atlDate}</p>

                    </div> : <div className=' p-1 m-1  sm:m-1 '>
                        <p className=' text-xs text-gray-400  sm:text-sm md:text-xl lg:text-2xl'>All-time low</p>
                        <p className=' text-xs font-bold sm:text-lg md:text-2xl lg:text-2xl'>${props.atlPrice.toLocaleString()}  </p>
                        <p className=' text-xs text-gray-400 sm:text-sm md:text-xl lg:text-2xl'>{props.atlDate}</p>
                    </div>
                }




            </div>
            <div className='text-center w-1/3'>
                <p className='text-gray-400 text-xs font-bold  sm:text-sm  md:text-xl'>Today</p>
                <img className='w-5 m-auto sm:w-8' src={props.image} alt=''/>
                {
                    props.price < 1 ? <>
                        <p className='text-gray-400 text-xs sm:text-sm md:text-xl'>Price</p>
                        <p className='text-sm font-bold  sm:text-lg '>${props.price.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 8
                        })}</p>
                    </> :
                        <>
                            <p className='text-gray-400 text-xs sm:text-sm md:text-xl'>Price</p>
                            <p className=' text-sm font-bold sm:text-lg  md:text-2xl'> ${props.price.toLocaleString('en-US', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</p>
                        </>

                }

                <p className='text-gray-400 text-xs sm:text-sm md:text-xl'>Market cap </p>
                <p className='text-xs font-bold sm:text-lg md:text-2xl' > ${props.marketCap.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>
                <p className='text-gray-400 text-xs sm:text-sm md:text-xl'>24h volume</p>
                <p className='text-xs font-bold sm:text-lg md:text-2xl '>  ${props.volume.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}</p>

            </div>


            <div className='w-1/3 text-center'>
                <div className='m-2'>
                    <p className='text-xs text-gray-400 sm:text-sm  md:text-xl' > <TwitterIcon /> Followers </p>
                    {
                        props.twitterFollowers && props.twitterFollowers !== null ?
                            < p className='text-xs text-white font-bold sm:text-lg md:text-xl'> {props.formatter(props.twitterFollowers)}</p> : < p className=' text-xs sm:text-sm  md:text-xl'>N/A</p>
                    }
                </div>

                <div className=' m-2'>
                    <p className='text-xs text-gray-400 sm:text-sm  md:text-xl'><RedditIcon /> Subscribers</p>
                    {
                        props.redditSubs && props.redditSubs !== null ?
                            < p className='text-xs text-white font-bold sm:text-lg md:text-xl' > {props.formatter(props.redditSubs)}</p> : < p className='text-xs sm:text-sm  md:text-xl'>N/A</p>
                    }
                </div>
            </div>
        </div>
    )
}
export default CoinInfo