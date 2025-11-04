import React, { useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { BannerContext } from '../../../../../Context/BannerContext';
import { useProjectDataContext } from '../../../../../Context/ProjectDataProvider';

export default function FacultyInfoPermissions() {
  const { setBanner } = useContext(BannerContext);
  const { data, isLoading, error } = useProjectDataContext();
  const params = useParams();
  const location = useLocation();

  const facultyId = params.facultyId;
  const chosenPart = location.pathname.split("/").pop();

  // اختار الكلية حسب الـ id
  const faculty = data?.faculties?.find(f => f.id.toString() === facultyId);

  // اختار الجزء المطلوب
  const partData = faculty?.[chosenPart];

  useEffect(() => {
    if (faculty) {
      setBanner(`Our Faculties / ${faculty.name} / ${chosenPart}`);
    }
  }, [setBanner, faculty, chosenPart]);

  if (isLoading) return (
    <div className="w-100 d-flex justify-content-center align-items-center vh-100">
      <h2>Loading...</h2>
    </div>
  );

  if (error) return <p>Something went wrong!</p>;
  if (!faculty) return <p>Faculty not found</p>;

  return (
    <div>
      <h2 className='fw-bold text-uppercase'>{chosenPart}</h2>
      <ul>
        {partData?.split('\n').map((line, index) => (
          <li className='mainListContent my-3' key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
