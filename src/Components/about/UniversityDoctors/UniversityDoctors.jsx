import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../../../Context/BannerContext';
import { useLocation, Link } from 'react-router-dom';
import { useProjectDataContext } from '../../../Context/ProjectDataProvider';

export default function UniversityDoctors() {
  const { setBanner } = useContext(BannerContext);
  const location = useLocation();
  const chosenPart = location.pathname.split('/').pop();

  const { data, isLoading, error } = useProjectDataContext();
  
  const universityData = data?.[chosenPart]; // جلب الداتا حسب الجزء المختار من context

  useEffect(() => {
    setBanner(`About / ${chosenPart}`);
  }, [setBanner, chosenPart]);

  if (isLoading) return (
    <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <h2>Loading...</h2>
    </div>
  );

  if (error) return <p>Something went wrong!</p>;
  if (!universityData) return <p>No data found!</p>;

  return (
    <div className='row'>
      {universityData.map((doctor, index) => (
        <div key={index} className='col-md-4 p-2'>
          <Link to={`/about/doctors/${doctor.name.replace(/\s+/g, '_')}`} className='item text-center universityDoctors border p-2'>
            <div className='img-frame my-3'>
              <img src={doctor.img} className='w-100 doctor-img' style={{height:500}} alt={doctor.name} />
            </div>
            <h3 className='fw-bold'>{doctor.name}</h3>
            <p className='text-muted'>{doctor.position}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
