import React from 'react'

const CoinList = ({ name, image, rank }) => {
    return (
        <div className="${active}  text-white flex flex-col justify-center items-center m-2 rounded-lg hover:bg-sky-700 cursor-pointer"  >
            < div >
                <p>{rank}</p>
            </div >
            <div className='w-8 h-8 '>
                <img src={image} />
            </div>
            <div className='w-24 text-center'>
                <p>
                    {name}
                </p>
            </div>
        </div >
    )
}
export default CoinList

