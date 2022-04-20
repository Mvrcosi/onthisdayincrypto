import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CoinList from './CoinList'
import CoinDetail from './CoinDetail'
import SearchIcon from '@mui/icons-material/Search';
const CoinSearchBar = () => {

    const [search, setSearch] = useState('')
    const [coinList, setCoinList] = useState([])
    const [activeCoin, setActiveCoin] = useState('bitcoin')
    const [activeIndex, setActiveIndex] = useState(0)

    const onInputChange = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', {
        }).then((res) => {
            setCoinList(res.data)
        })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const filteredCoins = coinList.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );


    const handleChoice = (name, idx) => {
        setActiveCoin(name)
        setActiveIndex(idx)
    }



    return (
        <>
            <div className='flex justify-center pt-2 sm:pt-3 '>

                <div className=' ring  rounded mt-2 sm:w-2/4 '>

                    <span className='text-white p-2'><SearchIcon /></span>

                    <input type='search' value={search} placeholder="Search by coin" onChange={onInputChange} className='w-auto p-1 outline-none text-white  bg-transparent  sm:w-3/4  '>
                    </input>
                </div>

            </div>
            <div className='flex mx-auto overflow-x-auto w-3/4 m-2 sm:w-3/4 '>
                {filteredCoins.map((coin, idx) => {
                    const active = idx === activeIndex ? 'active: bg-sky-700 focus:ring ' : '';
                    return <CoinList active={active} handleChoice={() => handleChoice(coin.id, idx)} key={coin.id} name={coin.name} image={coin.image} rank={coin.market_cap_rank} />
                })}
            </div>
            <CoinDetail activeCoin={activeCoin} />
        </>
    )
}

export default CoinSearchBar