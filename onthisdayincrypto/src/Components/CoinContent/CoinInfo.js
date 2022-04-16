import React from 'react'

const CoinInfo = ({ rank, athPrice, athDate, circulatingSupply, totalSupply, atlPrice, atlDate, price, marketCap, volume, twitterFollowers, redditSubs, image, symbol }) => {



    return (
        <div className="flex justify-evenly items-center bg-gray-800 m-auto p-3 text-white rounded-lg w-6/12  "  >
            <div>
                <p> Circualting supply</p>
                {
                    circulatingSupply && circulatingSupply.toLocaleString()
                }

                <p> all time high </p>
                <p>${athPrice} - {athDate}</p>
                <p>All time low date and price</p>
                <p>${atlPrice} - {atlDate}</p>
                <p>Total supply</p>
                {
                    totalSupply && totalSupply.toLocaleString()
                }


            </div>
            <div className='text-center'>
                <p> {rank}</p>
                <p className=''>Today</p>
                <img className='m-auto' src={image} />


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
                            <p className='text-3xl font-bold '> ${price.toLocaleString('en-US', {
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

            </div>
            <div>

                {
                    twitterFollowers !== null ?
                        <p>Twitter Followers: {twitterFollowers.toLocaleString()}</p> : <p className='hidden'>Twitter Followers: N/A</p>
                }
                {
                    redditSubs !== null ?
                        <p>Reddit Subscribers: {redditSubs.toLocaleString()}</p> : <p className='hidden'>Reddit Subscribers: N/A</p>
                }
                <p> Average reddit active accounts</p>
                <p> Average reddit HOT posts</p>
                <p> Average bitcoin # mentions twitter </p>

            </div>
        </div >
    )
}
export default CoinInfo