import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../../../Context/BannerContext';
import { Link, useLocation } from 'react-router-dom';
import { useProjectDataContext } from '../../../Context/ProjectDataProvider';

export default function SectorsData() {
  const { setBanner } = useContext(BannerContext);
  const location = useLocation();
  const chosenPart = location.pathname.split('/').pop();
  const { data } = useProjectDataContext();

  const sector = data?.sectors?.find(s => s.name === chosenPart);

  useEffect(() => {
    setBanner(`Sectors / ${chosenPart}`);
  }, [setBanner, chosenPart]);

  if (!sector) return <p>Sector not found</p>;

  return (
    <div className="my-5">
      <h1 className="text-center mb-4">{chosenPart}</h1>

      {sector.desecration && <p className="mb-5">{sector.desecration}</p>}

      <h2 className="mb-3">Management</h2>
      <div className="d-flex flex-wrap gap-4">
        {sector.doctors.map((doctor, index) => (
          <div
            key={index}
            className="card"
            style={{
              width: '250px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div className="p-3 text-center">
              <h5 className="fw-bold">{doctor.name}</h5>
              <p className="text-muted">{doctor.job}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-5 mb-3">Faculties</h2>
      <div className="d-flex flex-wrap gap-4">
        {sector.facalties.map((faculty, index) => (
          <Link
            key={index}
            to={`/faculties/${faculty.id}/doctors`}
            className="card text-center text-decoration-none"
            style={{
              width: '200px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              color: '#000',
            }}
          >
                        

            <img
              src={`../../../..${faculty.image}`}
              alt={faculty.name}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <div className="p-3">
              <h6 className="fw-bold">{faculty.name}</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
