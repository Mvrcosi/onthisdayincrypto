import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TwitterIcon from '@mui/icons-material/Twitter';
import FooterExchangeLinks from './FooterExchangeLinks';

const Footer = () => {


    const [cryptocomImage, setCryptoComImage] = useState('')
    const [binanceImage, setBinanceImage] = useState('')
    const [coinbaseImage, setCoinbaseImage] = useState('')

    const exchangeImages = []

    useEffect(() => {

        axios.get('https://api.coingecko.com/api/v3/exchanges').then((res) => {

            for (let i = 0; i < res.data.length; i++) {

                if (res.data[i].name === 'Crypto.com Exchange') {
                    exchangeImages.push(res.data[i].image)
                    setCryptoComImage(res.data[i].image)
                }
                if (res.data[i].name === 'Binance US') {
                    exchangeImages.push(res.data[i].image)
                    setBinanceImage(res.data[i].image)
                }
                if (res.data[i].name === 'Coinbase Exchange') {
                    exchangeImages.push(res.data[i].image)
                    setCoinbaseImage(res.data[i].image)
                }

            }

        })

    }, [])


    return (
        <footer className='flex p-5 mt-5 max-w-screen-2xl m-auto'>

            <section className=' flex flex-col w-2/4 mx-auto text-center justify-center'>
                <p className='text-gray-400 p-2 text-3xl'>
                    onthisdayincrypto
                </p>
                <p className='text-white p-3 font-bold text-2xl'> Provides you with information on the top 1000 cryptocurrency historical data throughout their life span.</p>
                <p className='text-gray-400 p-3 text-xl'>No financial advice is given. This website's purpose is solely to provide a visual representation of the markets throughout the years. </p>


            </section>

            <section className='flex flex-col items-center mx-auto '  >
                <p className='text-center text-white p-1 m-1'>Support my work </p>
                <a className='p-1 m-1 bg-gray-400 rounded-full ' href='https://twitter.com/dayincrypto' target='_blank' rel="noopener noreferrer" ><TwitterIcon /></a>
                <FooterExchangeLinks
                    image={binanceImage}
                    link='https://accounts.binance.us/en/register?ref=53496012'
                    exchangeName='Binance US'
                />
                <FooterExchangeLinks
                    image={coinbaseImage}
                    link='https://coinbase.com/join/ramire_ij?src=ios-link'
                    exchangeName='Coinbase'
                />
                <FooterExchangeLinks
                    image={cryptocomImage}
                    link='https://crypto.com/app/r39dgbg99r'
                    exchangeName='Crypto.com'
                />
            </section>
        </footer>
    )
}

export default Footer