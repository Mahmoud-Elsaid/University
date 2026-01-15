import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useProjectDataContext } from '../../../Context/ProjectDataProvider';

export default function SectorsData() {
  const location = useLocation();
  const chosenPart = location.pathname.split('/').pop();
  const { data } = useProjectDataContext();

  const sector = data?.sectors?.find(s => s.name === chosenPart);

  if (!sector) return <p className="text-red-500 font-bold p-10 text-center">عذراً، لم يتم العثور على بيانات القطاع.</p>;
  
  // Helper to fix image paths
  const getImagePath = (path) => {
    if (!path) return '';
    return path.replace(/^(\.\.\/)*\/?public\//, '/');
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-primary-900 mb-6">{chosenPart.replace('-sector', '')} Sector</h2>
      
      {sector.desecration && (
          <p className="text-gray-600 leading-loose mb-10 text-lg">{sector.desecration}</p>
      )}

      <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-100 pb-2">الهيئة الإدارية</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {sector.doctors?.map((doctor, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
            <img src={getImagePath(doctor.image)} alt={doctor.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h5 className="font-bold text-primary-900 mb-1">{doctor.name}</h5>
              <p className="text-sm text-gray-500">{doctor.job}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-secondary mb-6 border-b border-gray-100 pb-2">الكليات التابعة</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {sector.facalties?.map((faculty, index) => (
          <Link
            key={index}
            to={`/faculties/${faculty.id}/doctors`}
            className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden"
          >
            <div className="h-32 bg-gray-50 flex items-center justify-center p-4">
                 <img src={getImagePath(faculty.image)} alt={faculty.name} className="h-20 w-auto object-contain transition-transform group-hover:scale-110" />
            </div>
            <div className="p-3 text-center bg-white">
              <h6 className="font-bold text-gray-800 text-sm">{faculty.name}</h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
