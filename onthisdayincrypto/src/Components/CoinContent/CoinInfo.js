import React from 'react'

const CoinInfo = ({ year, price, marketCap, volume, twitterFollowers, redditSubs }) => {


    return (
        <div className="flex flex-col justify-center items-center"  >
            <p>{year}</p>
            <p>Price ${price.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</p>
            <p> Market cap ${marketCap.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</p>
            <p> Volume ${volume.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}</p>
            {twitterFollowers !== null ?
                <p>Twitter Followers: {twitterFollowers.toLocaleString()}</p> : <p>Twitter Followers: N/A</p>
            }
            {redditSubs !== null ?
                <p>Reddit Subscribers: {redditSubs.toLocaleString()}</p> : <p>Reddit Subscribers: N/A</p>
            }
        </div >
    )
}
export default CoinInfo