

import React, { useContext, useEffect } from 'react'
import Banner from '../Banner/Banner'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { BannerContext } from '../../Context/BannerContext';

export default function Fees() {
    const { setBanner} = useContext(BannerContext)
    
    
    useEffect(() => {
        setBanner(`Fees`)    }
        , [setBanner]);
    
    return (
        <>
                <Banner/>

                <section className=' about mt-5'> 
                <div className=' container-fluid w-75 m-auto '>
                    

                        <div className=' row'>
                            <div className=' col-lg-3'>
                                
                                <div className=' about-links sideList'>
                                    <ul>
                                        <button className=' btn btn-outline-success'> <NavLink to='EgyptianStudents' className="nav-link "> الطلاب المصريين   </NavLink>  </button>
                                        <button className=' btn btn-outline-success'> <NavLink to='InternationalStudents' className="nav-link "> الطلاب الاجانب </NavLink> </button>
                                        
                                    </ul>
                                </div>
                            
                            </div>

                            <div className=' col-md-9'>
                                <div className=' mt-5'>
                                    <Outlet/>
                                </div>
                            </div>
                        </div>      
                    
                </div>            
                    
                </section>
                
        </>
    )
}
