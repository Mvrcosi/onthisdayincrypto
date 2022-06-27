import React from 'react'
import styled from 'styled-components'

import tw from 'twin.macro';

const Header: React.FC = () => {
    return (
        <header>
            <Nav>
                <div>
                    <NavText>Onthisdayin<span className='font-thin'>crypto</span></NavText>
                </div>
            </Nav>
        </header>
    )
}
const Nav = styled.nav`
    ${tw`
        flex 
        justify-between 
        items-center bg-gray-500 
        text-white
    `}
`
const NavText = styled.p`
    ${tw`
        text-[22px] 
        tracking-wide
        sm:text-[28px]  
        md:text-[32px]  
        lg:text-[34px] 
        2xl:text-[38px] 
    `}
`


export default Header