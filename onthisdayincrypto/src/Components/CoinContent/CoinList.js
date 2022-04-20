import React from 'react'

const CoinList = ({ name, image, rank, handleChoice, active }) => {



    return (
        <div className={`${active}text-white flex flex-col justify-center items-center rounded-lg hover:bg-sky-700 cursor-pointer mt-2 mb-2 sm:m-2`} onClick={handleChoice} >
            <div >
                <p className='text-xs xl:text-lg'>#{rank}</p>
            </div >
            <div className=' w-5 h-5  sm:w-8 sm:h-10  2xl:w-12 2xl:h-14'>
                <img alt={name} src={image} />
            </div>
            <div className='w-20 text-center'>
                <p className='text-xs 2xl:text-lg'>
                    {name}
                </p>
            </div>
        </div >
    )
}
export default CoinList

