import React from 'react'
import CoinList from './CoinList'
import CoinSearch from './CoinSearch'

const CoinsContainer = () => {
    return (
        <div className='h-screen bg-gray-900' >
        <CoinSearch />
        <CoinList />
        </div>
    )
}

export default CoinsContainer
