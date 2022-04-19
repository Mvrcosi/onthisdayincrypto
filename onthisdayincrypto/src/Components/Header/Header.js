import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
const Header = () => {
    return (
        <header>
            <nav className=' flex justify-between items-center bg-slate-700 text-stone-50 '>
                <div >
                    <p className='text-[22px]  sm:text-[28px]  md:text-[32px]  lg:text-[34px] 2xl:text-[38px] tracking-wide' >Onthisdayin<span className='font-thin'>crypto</span></p>
                </div>
                <div className='my-5 px-3 '>
                    <button className='cursor-pointer'> <SettingsIcon /></button>
                </div>
            </nav>
        </header>
    )
}

export default Header