import React from 'react'

const CoinInfo = ({ year, price, marketCap, volume, twitterFollowers, redditSubs, image }) => {


    return (
        <div className="flex flex-col justify-center items-center  bg-gray-800 m-auto p-3 text-white rounded-lg w-64"  >
            <p className='text-2xl'>{year}</p>
            <img src={image} />

            {
                price < 1 ? <>

                    <p>Price</p>
                    <p className='text-4xl font-bold '>${price.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 8
                    })}</p>
                </> :
                    <>
                        <p>Price</p>
                        <p className='text-5xl font-bold '> ${price.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}</p>
                    </>

            }

            <p>Market cap </p>
            <p className='text-2xl  font-bold' > ${marketCap.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</p>
            <p>24-hour trading volume</p>
            <p className='text-2xl  font-bold'>  ${volume.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</p>

            {
                twitterFollowers !== null ?
                    <p>Twitter Followers: {twitterFollowers.toLocaleString()}</p> : <p className='hidden'>Twitter Followers: N/A</p>
            }
            {
                redditSubs !== null ?
                    <p>Reddit Subscribers: {redditSubs.toLocaleString()}</p> : <p className='hidden'>Reddit Subscribers: N/A</p>
            }
        </div >
    )
}
export default CoinInfo