import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../public/images/computer images/logo.png'
import style from './Navbar.module.css';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar firstNav navbar-expand-lg bg-body-tertiary bg-main">

                <div className="container-fluid px-5">
                    <div className=" px-5 py-2 ">
                        <h5 className=' text-light'>Follow Us : 
                            <a  target="_blank" href={"https://www.facebook.com/groups/347774468135219"}>
                                <span className=''><i className="  text-light mx-2 fa-brands fa-facebook-f"></i></span> 
                            </a> 
                            <a target="_blank" href={"https://github.com/Mahmoud-Elsaid"}>
                                <span className=''><i className=" text-light mx-2 fa-brands fa-github"></i></span> 
                            </a>
                            <a target="_blank" href={"https://www.linkedin.com/in/mahmoud-elsaid-a55a29239/"}>
                                <span className=''><i className=" text-light mx-2 fab fa-linkedin"></i></span> 
                            </a>
                         </h5>
                    </div>

                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className=" text-white fa-solid fa-bars"></i>
                    </button>
                    
                    <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
                        
                        <div className='navbar-nav ms-auto '>

                            <div className='mail mx-2'>
                                <a href="mailto:mahmoudelsaid560@gmail.com" target="_blank"  className=' text-decoration-none text-light'>
                                <i className=" mx-2  fa-solid fa-envelope"></i>
                                mahmoudelsaid560@gmail
                                </a>
                            </div>

                            <div className='mail mx-2 '>
                                <a href="tel:44519" target="_blank"  className=' text-decoration-none text-light'>
                                        <i className=" mx-2 fa-solid fa-phone"></i>
                                    01032578410
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg navcontainer ">

                <div className="container-fluid  w-75 m-auto ">

                    <div className={`${style.logo}  p-3 `}>
                        <Link className="navbar-brand w-100" to="/home"><img src={logo} className='' alt="" /></Link>
                    </div>

                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
                            <i className=" text-white fa-solid fa-bars"></i>
                    </button>
                    
                    <div className={`${style.myNav} collapse navbar-collapse`} id="navbarMain">
                        
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row justify-content-evenly align-items-center ${style.mainNav}  ${style.mainNavList}`}>
                                <li className="nav-item">
                                        <NavLink className="nav-link " aria-current="page" to="/">الرئيسيه </NavLink>
                                </li>
                        
                                
                                
                                <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            عن الجامعه 
                                        </a>
                                        
                                        <ul className="dropdown-menu">
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/about/history"> تاريخ ونشأت الجامعة  </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/About/vision"> الرؤية والرسالة </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/About/goals"> اهداف الجامعة </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/About/leadership"> مجلس  الجامعة </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <a  target="_blank" href={"https://maps.app.goo.gl/amUxSgwJwvxNzSpW7"} className={`dropdown-item ${style.dropdownLink}`}>موقع الجامعة  </a> 
                                        </ul>
                                        
                                </li>


                                

                                <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            الكليات
                                        </a>
                                        
                                        <ul className="dropdown-menu">
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/faculties">  جميع الكليات  </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/faculties/2/doctors"> الطب البشري والجراحه </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/faculties/6/doctors"> طب وجراحه الفم والاسنان </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/faculties/4/doctors"> الصيدله </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/faculties/1/doctors"> الهندسه </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/faculties/3/doctors">  الحاسبات والمعلومات   </NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/faculties/5/doctors"> التجاره</NavLink></li>
                                                
                                        </ul>
                                        
                                </li>


                                <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            قطاعات الجامعة
                                        </a>
                                        
                                        <ul className="dropdown-menu">
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/sectors/Medical-sector">القطاع الطبي</NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/sectors/Engineering-sector">القطاع الهندسي</NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/sectors/Humanities-sector">قطاع علوم الانسانيات</NavLink></li>
                                        </ul>
                                </li>



                                <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            المركز الاعلامي
                                        </a>
                                        
                                        <ul className="dropdown-menu">
                                                <li><NavLink className={`dropdown-item ${style.dropdownLink}`} to="/news"> أخبار</NavLink></li>
                                        </ul>
                                </li>

                                <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            القبول 
                                        </a>
                                        
                                        <ul className="dropdown-menu">
                                                <li><NavLink to='admissions' className={`dropdown-item ${style.dropdownLink}`} > شروط القبول</NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><NavLink to='fees/EgyptianStudents' className={`dropdown-item ${style.dropdownLink}`} > الرسوم</NavLink></li>
                                                <li><hr className="dropdown-divider" /></li>
                                                <li><a className={`dropdown-item ${style.dropdownLink}`} href="#"> كيفيه التقديم  </a></li>
                                        </ul>
                                </li>
                                
                            
                        </ul>


                    </div>

                    
                </div>
            </nav>
        </div>
    )
}
