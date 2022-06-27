import React from 'react'


interface FooterProps {
    image: string;
    link: string;
    exchangeName: string;    
}

const FooterExchangeLinks: React.FC<FooterProps> = props => {
    return (
        <button className='flex border hover:bg-white hover:text-black text-white  sm:m-2 sm:p-2 p-2 m-1 w-3/4 rounded-full' ><a href={props.link} target="_blank" rel="noopener noreferrer"> 
        <img alt={props.exchangeName} className='inline w-4 ' src={props.image}>
        </img>  Register with {props.exchangeName} </a>
        </button >
    )
}

export default FooterExchangeLinks