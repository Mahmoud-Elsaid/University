import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProjectDataContext } from '../../Context/ProjectDataProvider';
import { BannerContext } from '../../Context/BannerContext';
import Banner from '../Banner/Banner';

export default function NewsDetails() {
  const params = useParams();
  const { setBanner } = useContext(BannerContext);
  const { data, isLoading, error } = useProjectDataContext();

  useEffect(() => {
    setBanner('News Details');
  }, [setBanner]);

  if (isLoading) return <div className="vh-100 w-100 d-flex justify-content-center align-items-center"><h2>Loading</h2></div>;
  if (error) return <div>حدث خطأ: {error.message}</div>;

  const newsId = params.newsId;
  const details = data?.news?.find(n => n.id.toString() === newsId);

  if (!details) return <div className="vh-100 w-100 d-flex justify-content-center align-items-center"><h2>News not found</h2></div>;

  return (
    <>
      <Banner />
      <div className='newsDetails container-fluid py-5'>
        <div className='row my-5'>
          <div className='col-lg-6'>
            <div className='detailsContent'>
              <h2 className='headerNewTitle fw-bolder'>{details.title}</h2>
              <p className='lead text-muted'>{details.description}</p>
            </div>
          </div>

          <div className='col-lg-6'>
            {details.images?.[0] && (
              <div className='detailsHeaderImg'>
                <img src={details.images[0]} className='w-100' height={500} alt="" />
              </div>
            )}
          </div>

          <div className='col-lg-12 mt-5 relatedImages'>
            <h2>Related Images</h2>
            <div className='row'>
              {details.images?.map((image, index) => (
                <div key={index} className='col-md-4 p-4'>
                  <div className='imageitem'>
                    <img src={image} className='w-100' height={350} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
