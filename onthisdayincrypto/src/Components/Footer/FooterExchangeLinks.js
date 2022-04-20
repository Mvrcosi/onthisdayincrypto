import React from 'react'

const FooterExchangeLinks = ({ image, link, exchangeName }) => {
    return (
        <button className='flex border hover:bg-white hover:text-black text-white  sm:m-2 sm:p-2 p-2 m-1 w-3/4 rounded-full' ><a href={link} target="_blank" rel="noopener noreferrer"> <img alt={exchangeName} className='inline w-4 ' src={image}>
        </img>  Register with {exchangeName} </a>
        </button >
    )
}

export default FooterExchangeLinks