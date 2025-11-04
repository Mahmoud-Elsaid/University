


import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
    return (
        <>
            <div >
                    <Navbar/>
                    <div className='py-0'>
                        <Outlet/>
                    </div>
                    <Footer/>
                
                
            </div>
            
                
        </>
    )
}
