import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsModal = () => {



    const handleOpen = e => {
        console.log('clicked')
    }
    return (
        <button className='cursor-pointer' onClick={handleOpen}> <SettingsIcon /></button>
    )
}

export default SettingsModal