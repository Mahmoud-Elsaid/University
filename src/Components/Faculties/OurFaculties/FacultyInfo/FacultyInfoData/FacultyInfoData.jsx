import React, { useContext, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { BannerContext } from '../../../../../Context/BannerContext';
import { useProjectDataContext } from '../../../../../Context/ProjectDataProvider';

export default function FacultyInfoData() {
  const { setBanner } = useContext(BannerContext);
  const { data, isLoading, error } = useProjectDataContext();

  const params = useParams();
  const location = useLocation();
  const facultyId = params.facultyId;
  const chosenPart = location.pathname.split("/").pop();

  // اختار الكلية حسب الـ id
  const faculty = data?.faculties?.find(f => f.id.toString() === facultyId);

  // اختار الجزء المطلوب (departments, doctors, ...)
  const partData = faculty?.[chosenPart];

  useEffect(() => {
    if (faculty) {
      setBanner(`Our Faculties / ${faculty.name} / ${chosenPart}`);
    }
  }, [setBanner, faculty, chosenPart]);

  if (isLoading) return (
    <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
      <h2>Loading...</h2>
    </div>
  );

  if (error) return <p>Something went wrong!</p>;
  if (!faculty) return <p>Faculty not found</p>;

  return (
    <div>
      <h1 className="fw-bold text-uppercase">{chosenPart}</h1>
      <div className="row">
        {partData?.map((element, index) => (
          <div key={index} className='col-md-4 p-3 elementLink bg-bg-secondary'>
            <Link
              to={chosenPart === "departments" ? `/faculties/${faculty.id}/${element.name.replace(/\s+/g, '_')}` : "#"}
              className='text-center'
              style={{ height: "100%" }}
            >
              <div className='facultyDataContainer' style={{ height: "100%" }}>
                <div className='img-frame'>
                  <img
                    src={`../../../../../${element.image}`}
                    className='w-100'
                    alt={element.name}
                    style={{ height: 400 }}
                  />
                </div>
                <h3 className='fw-bold'>{element.name}</h3>
                {element.responsibility && <p className='text-muted'>{element.responsibility}</p>}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
