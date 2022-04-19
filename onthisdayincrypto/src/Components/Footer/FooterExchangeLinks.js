import React from 'react'

const FooterExchangeLinks = ({ image, link, exchangeName }) => {
    return (
        <button className='flex border  hover:bg-white hover:text-black text-white  m-2 p-2 w-full rounded-full' ><a href={link} target="_blank" rel="noopener noreferrer"> <img alt={exchangeName} className='inline w-8' src={image}>
        </img>  Register with {exchangeName} </a>
        </button >
    )
}

export default FooterExchangeLinks