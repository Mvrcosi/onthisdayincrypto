import React from 'react'
import CoinList from './CoinList'
import CoinSearchBar from './CoinSearchBar'

const CoinsContainer = () => {
    return (
        <div className='h-screen bg-gray-900' >
            <CoinSearchBar />
        </div>
    )
}

export default CoinsContainer
