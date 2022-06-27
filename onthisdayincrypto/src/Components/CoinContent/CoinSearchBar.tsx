import React, { useState, useEffect } from 'react'
import CoinList from './CoinList'
import CoinDetail from './CoinDetail'
import SearchIcon from '@mui/icons-material/Search';
import coinGecko from '../../api/coinGecko'


const CoinSearchBar: React.FC = () => {

    const [search, setSearch] = useState<string>('')
    const [coinList, setCoinList] = useState<any[]>([])
    const [activeCoin, setActiveCoin] = useState<string>('bitcoin')
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const onInputChange = (e:any) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        coinGecko.get('markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', {
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


    const handleChoice = (name:string, idx:number) => {
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