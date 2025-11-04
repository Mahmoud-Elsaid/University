import React, { useContext, useState, useEffect } from 'react';
import { BannerContext } from '../../Context/BannerContext';
import { useProjectDataContext } from '../../Context/ProjectDataProvider';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default function News() {
  const { setBanner } = useContext(BannerContext);
  const { data, isLoading, error } = useProjectDataContext();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setBanner('News');
  }, [setBanner]);

  if (isLoading) return <div className="vh-100 w-100 d-flex justify-content-center align-items-center"><h2>Loading</h2></div>;
  if (error) return <div>حدث خطأ: {error.message}</div>;
  if (!data?.news?.length) return <div className="vh-100 w-100 d-flex justify-content-center align-items-center"><h2>There is no news</h2></div>;

  const newsHeader = data.news[0];
  const allNews = data.news.filter(n => n.id !== newsHeader.id);

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

  return (
    <>
      <Banner/>

      <section className='news my-5'>
        {/* Header News */}
        <div className='newsHeader bg-white'>
          <div className='container-fluid'>
            <div className='row p-5'>
              <div className='col-md-6'>
                <h2 className='headerNewTitle fw-bolder'>{newsHeader.title}</h2>
                <p className='lead text-muted'>{newsHeader.description}</p>
              </div>

              <div className='col-md-6'>
                {newsHeader.images?.length > 0 && (
                  <Slider {...settings}>
                    {newsHeader.images.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`slide-${index}`} style={{height:450}} className="w-100" />
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* All News */}
        <div className='allNews my-5 p-5'>
          <div className='row p-4'>
            <h2>More News</h2>
            {allNews.length > 0 ? allNews.map((news, index) => (
              <div key={index} className='col-md-3 p-3'>
                <div className='newsItem text-center h-100 p-3'>
                  <Link to={`/news/${news.id}`}>
                    {news.images?.[0] && <img src={news.images[0]} className='w-100' height={450} alt="" />}
                    <h3>{news.title}</h3>
                  </Link>
                </div>
              </div>
            )) : <h2>No more news</h2>}
          </div>
        </div>
      </section>
    </>
  );
}
