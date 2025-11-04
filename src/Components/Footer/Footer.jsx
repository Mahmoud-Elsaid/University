

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
        <section id='#footer' className=' mt-5'>
            <div className=' footer'>
                <div className=' footerLinks'>
                    <div className=" container-fluid">
                        <div className="row">
                            
                            <div className=' col-md-9'>
                                <div className=' row'>
                                        <div className="col-md-3">
                                            <h3>About</h3>
                                            <ul>
                                                <li><Link to="/about/history"> تاريخ الجامعه ونشأنها    </Link></li>
                                                <li><Link to="/About/vision"> الرؤية والرسالة   </Link></li>
                                                <li><Link to="/About/goals"> اهداف الجامعة   </Link></li>
                                                <li><Link to="/About/leadership"> مجلس الجامعة   </Link></li>
                                                <li><a target="_blank" href={"https://maps.app.goo.gl/amUxSgwJwvxNzSpW7"}> موقع الجامعة   </a></li>
                                    
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h3>Faculty</h3>
                                            <ul>
                                                <li><Link to="/faculties">  جميع الكليات  </Link></li>
                                                <li><Link to="/faculties/2/doctors" >  الطب البشري والجراحه   </Link></li>
                                                <li><Link to="/faculties/6/doctors"> طب وجراحه الفم والاسنان   </Link></li>
                                                <li><Link to="/faculties/4/doctors"> الصيدله  </Link></li>
                                                <li><Link to="/faculties/1/doctors"> الهندسه  </Link></li>
                                                <li><Link to="/faculties/3/doctors"> الحاسبات والمعلومات   </Link></li>
                                                <li><Link to="/faculties/5/doctors"> التجاره  </Link></li>

                                    
                                            </ul>
                                        </div>

                                        <div className="col-md-3">
                                            <h3>sectors</h3>
                                            <ul>
                                                <li><Link to="/sectors/Medical-sector"> القطاع الطبي   </Link></li>
                                                <li><Link to="/sectors/Engineering-sector">  القطاع الهندسي   </Link></li>
                                                <li><Link to="/sectors/Humanities-sector"> قطاع علوم الانسانيات  </Link></li>
                                                
                                    
                                            </ul>

                                        </div>

                                        <div className="col-md-3">
                                            <h3>Media Center</h3>
                                            <ul>
                                                <li><Link to={`news`}> اخبار   </Link></li>
                                                
                                    
                                            </ul>

                                            
                                        </div>
                                            </div>
                            </div>

                            <div className=' col-md-3'>
                                <div className=' footerLogo  text-center'>
                                    <img src="../../../public/images/logo.png" alt="" />
                                    <h3 className=' my-3'>جامعه الزقازيق الاهليه - مدينه العاشر من رمضان - الشرقيه</h3>
                                </div>

                                


                                

                            <div className=" Footer-contact-icons   d-flex justify-content-between align-items-center w-100">
                            
                                <div className="Footer-contact-icons-item me-1">
                                    <a target="_blank" href={"https://www.facebook.com/profile.php?id=100040795912735"}><i className=" fa-brands fa-facebook"></i></a>
                                </div>
                            
                                <div className="Footer-contact-icons-item mx-1">
                                
                                    <a target="_blank" href={"mailto:mahmoudelsaid560@gmail.com"}><i className="fa-solid fa-envelope"></i></a>

                                </div>

                                <div className="Footer-contact-icons-item me-1">
                                
                                    <a target="_blank" href={"https://github.com/Mahmoud-Elsaid"}><i className="fa-brands fa-github"></i></a>

                                </div>

                                <div className="Footer-contact-icons-item">
                                    <a target="_blank" href={"https://www.linkedin.com/in/mahmoud-elsaid-a55a29239/"}><i className="fa-brands fa-linkedin"></i></a>
                                
                                </div>
                            
                            </div>

                            </div>

                            


                        </div>
                    </div>
                </div>

                <div className=' footerWater'>

                </div>
            </div>
        </section>
  )
}
