import React from 'react'

const Header = () => {
    return (
        <header >
            <nav className='container flex justify-between bg-slate-700 text-stone-50		'>
                <div >
                    <p className='text-[44px] tracking-wide	' >Onthisdayin<span className='font-thin'>crypto</span></p>
                </div>
                <div className='my-5'>
                    <button>settings</button>
                </div>
            </nav>
        </header>
    )
}

export default Header