import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TwitterIcon from '@mui/icons-material/Twitter';
import FooterExchangeLinks from './FooterExchangeLinks';

const Footer:React.FC = () => {


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
        <footer className='m-auto p-5 mt-5 sm:flex   md:p-3 md:mt-3 2xl:max-w-screen-xl'>

            <section className=' flex flex-col sm:w-2/4 mx-auto text-center justify-center'>
                <p className='text-gray-400 p-2 text-xl sm:text-3xl '>
                    onthisdayincrypto
                </p>
                <p className='text-white font-bold text-xs mt-4 sm:text-lg'>Providing historical data for the top 100 cryptocurrencies through their life span.</p>
                <p className='text-gray-400 p-3 font-bold text-xs sm:text-lg'> This website's purpose is to provide a visual representation of the markets over the years. </p>
                <p className='font-bold text-xs sm:text-xl text-white '>No financial advice. DYOR</p>
                <p className='text-gray-400 p-3 text-xs sm:text-lg'>Powered by <a className='font-bold underline decoration-1' href='https://www.coingecko.com/'>coingecko.com</a></p>



            </section>

            <section className='flex flex-col items-center mx-auto  md:pb-5'  >
                <p className='text-center text-white p-1 m-1 sm:text-4xl'>Support my work </p>
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