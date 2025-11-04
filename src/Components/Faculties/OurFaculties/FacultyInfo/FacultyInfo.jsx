import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, Outlet, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import Banner from '../../../Banner/Banner';
import { BannerContext } from '../../../../Context/BannerContext';
import { useProjectDataContext } from '../../../../Context/ProjectDataProvider';

export default function FacultyInfo() {
  const { setBanner } = useContext(BannerContext);
  const { data, isLoading, error } = useProjectDataContext();

  const params = useParams();
  const facultyId = params.facultyId;

  const faculty = data?.faculties?.find(f => f.id.toString() === facultyId);

  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    if (faculty) {
      setBanner(`Our Faculties / ${faculty.name}`);
    }
  }, [setBanner, faculty]);

  if (isLoading) return (
    <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
      <h2>Loading</h2>
    </div>
  );

  if (error) return <p>Something went wrong!</p>;
  if (!faculty) return <p>Faculty not found</p>;

  return (
    <>
      {/* Slider Section */}
      <div className="container-fluid w-75 m-auto facultyInfoSlider my-5">
        {faculty.images?.length > 0 && (
          <Slider {...settings}>
            {faculty.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`slide-${index}`} className="w-100" />
              </div>
            ))}
          </Slider>
        )}
      </div>

      <Banner />

      {/* Faculty Details Section */}
      <section className='facultyData direction my-5'>
        <div className='container-fluid w-75 m-auto'>
          <div className="row">
            <div className='col-lg-3'>
              <div className="about-links sideList">
                <ul className='text-center'>
                  <button className='form-control me-2 my-2 btn btn-outline-success'>
                    <NavLink className='nav-link' to="doctors">Doctors</NavLink>
                  </button>
                  <button className='my-2 btn btn-outline-success'>
                    <NavLink className='nav-link' to='departments'>Departments</NavLink>
                  </button>
                  <button className='my-2 btn btn-outline-success'>
                    <NavLink className='nav-link' to='admission'>Admissions</NavLink>
                  </button>
                  <button className='my-2 btn btn-outline-success'>
                    <NavLink className='nav-link' to='WhyUs'>Why Us</NavLink>
                  </button>
                  <button className='my-2 btn btn-outline-success'>
                    <NavLink className='nav-link' to='/fees/EgyptianStudents'>Fees</NavLink>
                  </button>
                </ul>
              </div>
            </div>

            <div className='col-md-9'>
              <div className='mainList'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
