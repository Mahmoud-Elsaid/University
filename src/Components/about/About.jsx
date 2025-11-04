
import { useContext, useEffect } from 'react';

import { BannerContext } from '../../Context/BannerContext';
import Banner from '../Banner/Banner';
import {  NavLink, Outlet } from 'react-router-dom'



export default function About() {

    const { setBanner} = useContext(BannerContext)
    
        useEffect(() => {
            setBanner('  About ')
        }, [setBanner]);
        
    return (
                <>
                    <Banner/>

                    <section className=' about mt-5'> 
                        <div className=' container-fluid w-75 m-auto '>
                            <div className=' row'>
                                <div className=' col-lg-3'>
                                    <div className=' about-links sideList'>
                                        <ul >
                                            <button className=' btn btn-outline-success'> <NavLink className='nav-link' to='history'>تاريخ ونشأت الجامعه </NavLink>  </button>
                                            <button className=' btn btn-outline-success'> <NavLink className='nav-link' to='goals'>اهداف الجامعة </NavLink> </button>
                                            <button className=' btn btn-outline-success'> <NavLink className='nav-link' to='vision'>الرؤية والرسالة </NavLink>  </button>
                                            <button className=' btn btn-outline-success'> <NavLink className='nav-link' to='leadership'>مجلس  الجامعة </NavLink>  </button>
                                            <button className=' btn btn-outline-success'> <a target="_blank" href={"https://maps.app.goo.gl/amUxSgwJwvxNzSpW7"}>موقع الجامعة </a>   </button>
                                        </ul>
                                    </div>
                                    
                                </div>

                                <div className=' col-md-9'>
                                    <div className='mainList mt-5'>
                                        <Outlet/>
                                    </div>
                                </div>
                            </div>      

                        </div>            
                    </section>
                
                </>
        )
}
