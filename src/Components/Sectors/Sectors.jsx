import React, { useContext, useEffect } from 'react'
import { BannerContext } from '../../Context/BannerContext'
import Banner from '../Banner/Banner'
import { NavLink, Outlet } from 'react-router-dom'

export default function Fildes() {
    
    const { setBanner } = useContext(BannerContext)

    useEffect(() => {
        setBanner('قطاعات الجامعة')
    }, [setBanner]);

    return (
        <>
            <Banner/>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='sector-item sideList'>
                            <ul className='list-unstyled'>
                                <li className='my-2'>
                                    <NavLink 
                                        className='btn btn-outline-success w-100' 
                                        to='Engineering-sector'
                                    >
                                        Engineering Sector
                                    </NavLink>
                                </li>

                                <li className='my-2'>
                                    <NavLink 
                                        className='btn btn-outline-success w-100' 
                                        to='Humanities-sector'
                                    >
                                        Humanities Sector
                                    </NavLink>
                                </li>

                                <li className='my-2'>
                                    <NavLink 
                                        className='btn btn-outline-success w-100' 
                                        to='Medical-sector'
                                    >
                                        Medical Sector
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-md-8'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}
