import React from 'react'

interface CoinListProps {

    name: string;
    image: string;
    rank: number;
    handleChoice: any;
    active: any
}



const CoinList:React.FC<CoinListProps> = props => {

    return (
        <div className={`${props.active}text-white flex flex-col justify-center items-center rounded-lg hover:bg-sky-700 cursor-pointer mt-2 mb-2 sm:m-2`} onClick={props.handleChoice} >
            <div >
                <p className='text-xs xl:text-lg'>#{props.rank}</p>
            </div >
            <div className=' w-5 h-5  sm:w-8 sm:h-10  2xl:w-12 2xl:h-14'>
                <img alt={props.name} src={props.image} />
            </div>
            <div className='w-20 text-center'>
                <p className='text-xs 2xl:text-lg'>
                    {props.name}
                </p>
            </div>
        </div >
    )
}
export default CoinList

