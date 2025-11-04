
import video from '../../../public/images/computer images/vid.mp4';
import style from './Home.module.css'
import { Link } from 'react-router-dom';
import { useProjectDataContext } from '../../Context/ProjectDataProvider';

export default function Home() {

    const { data, isLoading, error } = useProjectDataContext();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Something went wrong!</p>;

    console.log("mamam" , data)

    const counter = data?.counter[0];
    console.log(counter);
    
    const news = data?.news?.filter((news)=> news.id <=3);
    console.log(news)

    const faculties = data?.faculties?.filter((faculty)=> faculty.id <=3) ;
    console.log(faculties)

    
    return (
        
        <>
            <div className={``}>
                <video className={style.video} src={video} autoPlay loop muted/>
            </div>


            <section id='news' className=' mt-5'>

                <div className=' container'>
                        <div className=' row d-flex justify-content-between align-items-center  my-5'>
                            <div className=' col-lg-4'>
                                <div className=' homeHeadOfSection'>
                                    <h2 className=' text-dark'>  اخر الاخبار     </h2>
                                </div>
                                
                            </div>

                            <div className=' col-md-8'>
                                <div className=' row'>
                                    <div className=' col-lg-8'>
                                        <div className=' LineHeadOfSection bg-dark '>
                                        
                                        </div>
                                    </div>

                                    <div className=' col-lg-4'>
                                        <div className='LinkHeadOfSection '>
                                            <Link to='/news'>  عرض المزيد  </Link>
                                        </div>
                                    </div>
                                </div>
                                    
                                </div>
                                
                        </div>

                        {news?<div className=' row'>
                            <Link to={`/news/${news[1].id}`} className=' col-md-8 newsItem'>
                                <div className=' '>
                                    {news?(<>
                                        <div className=' newImgContainer'>
                                            <img src={`${news[1].images[1]}`} className=' w-100' height={500} alt={`${news[1].title}`}/>
                                            <div className='newImgLayer'></div>
                                        </div>
                                        <h3 className=' text-dark fw-bold'>{news[1].title}</h3>
                                        <p className=' text-muted'>{news[1].description.split(" ").slice(0, 30).join(" ")}</p>
                                    </>
                                    
                                    )
                                    :"not found"}
                                    
                                </div>
                            </Link>

                            <div className=' col-md-4 '>
                                <Link to={`/news/${news[0].id}`} className='newsItem'>
                                {news?(<>
                                        <div className=' newImgContainer'>
                                            <img src={`${news[0].images[0]}`} className=' w-100' height={300} alt={`${news[0].title}`}/>
                                            <div className='newImgLayer'></div>
                                        </div>
                                        <h3 className=' text-dark fw-bold'>{news[0].title}</h3>
                                    </>
                                    
                                    )
                                    :"not found"}
                                    
                                </Link>


                                <Link to={`/news/${news[2].id}`} className='newsItem'>
                                {news?(<>
                                        <div className=' newImgContainer'>
                                            <img src={`${news[2].images[2]}`} className=' w-100' height={300} alt={`${news[2].title}`}/>
                                            <div className='newImgLayer'></div>
                                        </div>
                                        <h3 className=' text-dark fw-bold'>{news[2].title}</h3>
                                    </>
                                    
                                    )
                                    :"not found"}
                                    
                                </Link>

                            </div>

                                
                        </div>:<h3>there is no news </h3>}
                        
                </div>
                        
            </section>

            <section id="#counter" className='  mt-5'>
                <div className=" counter-layer w-100">
                    <div className=" container">
                        
                        <div className=' row d-flex justify-content-between align-items-center  '>
                            <div className=' col-lg-4'>
                                <div className=' homeHeadOfSection'>
                                    <h2> جامعتنا في أرقام   </h2>
                                    <h4 className=' '>  إحصائيات توضح حجم العمل بجامعتنا   </h4>
                                </div>
                                
                            </div>

                            <div className=' col-md-8'>
                                    <div className=' LineHeadOfSection '>
                                        
                                    </div>
                                </div>
                                
                        </div>
                        
                        <div className=" row pt-5 " >
                            <div className=" col-lg-3  text-center p-2">
                                
                                <div className=" counter-item-container">
                                    <div className="  w-50 m-auto d-flex justify-content-center align-items-center ">
                                        <div className=" counter-item-icon   d-flex justify-content-center align-items-center my-4 ">
                                            <i className=" text-white fa-solid fa-graduation-cap"></i>
                                        </div>
                                    </div>
                
                                    <div className="counter-item-content">
                                        <span className=" py-3">{counter?.Students}</span>
                                        <p> Student </p>
                                    
                                    </div>
                                </div>
                            </div>
            
                            <div className=" col-lg-3  text-center p-2">
                                
                                <div className=" counter-item-container">
                                    <div className="  w-50 m-auto d-flex justify-content-center align-items-center ">
                                        <div className=" counter-item-icon   d-flex justify-content-center align-items-center my-4 ">
                                            <i className=" text-white fa-solid fa-clipboard-user"></i>
                                        </div>
                                    </div>
                
                                    <div className="counter-item-content">
                                        <span className=" py-3">{counter?.AcademicFacultyStaff}</span>
                                        <p> Academic Faculty Staff </p>
                                    
                                    </div>
                                </div>
                            </div>
                            
                            <div className=" col-lg-3  text-center p-2">
                                
                                <div className=" counter-item-container">
                                    <div className="  w-50 m-auto d-flex justify-content-center align-items-center ">
                                        <div className=" counter-item-icon   d-flex justify-content-center align-items-center my-4 ">
                                            <i className=" text-white fa-solid fa-building-columns"></i>
                                        </div>
                                    </div>
                
                                    <div className="counter-item-content">
                                        <span className=" py-3">{counter?.numberOfFaculties}</span>
                                        <p> Faculty </p>
                                    
                                    </div>
                                </div>
                            </div>

                            <div className=" col-lg-3  text-center p-2">
                                
                                <div className=" counter-item-container">
                                    <div className="  w-50 m-auto d-flex justify-content-center align-items-center ">
                                        <div className=" counter-item-icon   d-flex justify-content-center align-items-center my-4 ">
                                            <i className=" text-white fa-solid fa-graduation-cap"></i>
                                        </div>
                                    </div>
                
                                    <div className="counter-item-content">
                                        <span className=" py-3">{counter?.InternationalStudents}</span>
                                        <p>  International Students </p>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>

            <section id='faculty' className=' mt-5'>

                <div className=' container'>
                        <div className=' row d-flex justify-content-between align-items-center  '>
                            <div className=' col-lg-4'>
                                <div className=' homeHeadOfSection'>
                                    <h2 className=' text-dark'>  أحصل علي الدرجه العلميه اللتي تريدها    </h2>
                                </div>
                                
                            </div>

                            <div className=' col-md-8'>
                                <div className=' row'>
                                    <div className=' col-lg-8'>
                                        <div className=' LineHeadOfSection bg-dark '>
                                        
                                        </div>
                                    </div>

                                    <div className=' col-lg-4'>
                                        <div className='LinkHeadOfSection '>
                                            <Link to='/faculties'>  عرض المزيد  </Link>
                                        </div>
                                    </div>
                                </div>
                                    
                                </div>
                                
                        </div>

                        <div className=' row'>
                            {faculties?.map(( faculty , index)=>(
                                <div className=' col-lg-4 p-4' key={index}>
                                    <Link to={`/faculties/${faculty.id}/doctors`} className=' facultyData text-center p-3'>
                                        <img src={`${faculty.logo}`} className=' w-100 mb-3' height={450} alt={`${faculty.name} logo`} />
                                        <h3>{faculty.name}</h3>
                                        <div className=' facultyLayer'>
                                        </div>
                                    </Link>
                                    
                                </div>
                            ))}
                        </div>
                </div>
                        
            </section>
        </>
    )
}
