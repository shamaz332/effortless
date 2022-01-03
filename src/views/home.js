import CryptoCards from '../components/CryptoCards'
import Navbar from '../components/Navbar'
import SmallCards from '../components/smallCards.js'
import React from 'react'

const home = () => {
    return (
        <div >
            <Navbar/>
            <CryptoCards/>
            <SmallCards/>
        </div>
    )
}

export default home
