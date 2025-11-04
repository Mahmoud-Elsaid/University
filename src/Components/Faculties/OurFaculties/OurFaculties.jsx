import React, { useState } from 'react';
import style from './OurFaculties.module.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useProjectDataContext } from '../../../Context/ProjectDataProvider';

export default function OurFaculties() {
    const [activeIndex, setActiveIndex] = useState(0);

    const { data, isLoading, error } = useProjectDataContext();

    const sliderData = data?.facultiesImages;
    const facultiesData = data?.faculties;

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
        customPaging: (i) => (
            <div
                style={{
                    marginTop: "30px",
                    width: "20px",
                    height: "20px",
                    backgroundColor: i === activeIndex ? "#07294d" : "transparent",
                    border: "1px solid #07294d",
                    borderRadius: "50%",
                    margin: "0 5px",
                    transition: "all 1s ease-in-out",
                }}
            ></div>
        ),
    };

    if (isLoading) return (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
            <h2>Loading</h2>
        </div>
    );

    if (error) return <p>Something went wrong!</p>;

    return (
        <>
            {/* Slider Section */}
            {sliderData && sliderData.length > 0 && (
                <div className='container mt-5'>
                    <Slider className={`${style.slickDots}`} {...settings}>
                        {sliderData.map((image, index) => (
                            <div key={index}>
                                <img src={image.image} alt={`slide-${index}`} className="w-100" />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}

            {/* Faculties Section */}
            {facultiesData && facultiesData.length > 0 ? (
                <div className="container mt-5">
                    <div className="row">
                        <h2 className={style.heading}>Our Faculties</h2>
                        {facultiesData.map((faculty) => (
                            <Link to={`/faculties/${faculty.id}/doctors`} className="col-md-6 mb-4" key={faculty.name}>
                                <div className="facultyItem p-3 border rounded shadow-sm text-center">
                                    <h2 className="fw-bold">{faculty.name}</h2>
                                    <p className={`${style.disc} text-muted`}>
                                        {`${faculty.description.split(" ").slice(0, 15).join(" ")} `}
                                        <span style={{ color: "blue" }}>Read more...</span>
                                    </p>
                                    <img src={faculty.logo} className="w-100" alt={faculty.name} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <p>There is no faculty</p>
            )}
        </>
    );
}
