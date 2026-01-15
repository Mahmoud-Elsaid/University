import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useProjectDataContext } from '../../../Context/ProjectDataProvider';
import PageLayout from '../../Layout/PageLayout';

export default function UniversityDoctors() {
  const location = useLocation();
  const chosenPart = location.pathname.split('/').pop();
  const { data, isLoading, error } = useProjectDataContext();
  
  const universityData = data?.[chosenPart];

  if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-10 w-10 border-4 border-secondary border-t-transparent"></div></div>;
  if (error) return <p className="text-center text-red-500 p-10">حدث خطأ!</p>;
  if (!universityData) return <p className="text-center p-10">لا توجد بيانات.</p>;

  // Map readable titles
  const titles = {
    'leadership': 'القيادات الجامعية',
    'Council': 'مجلس الجامعة',
    'counselor': 'المستشارين'
  };

  const pageTitle = titles[chosenPart] || 'أعضاء هيئة التدريس';

  const getImagePath = (path) => {
    if (!path) return '';
    // Remove ../ and /public/ or public/ from the start
    return path.replace(/^(\.\.\/)*\/?public\//, '/');
  };

  return (
    <PageLayout title={pageTitle}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universityData.map((doctor, index) => (
            <Link to={`/about/doctors/${doctor.name.replace(/\s+/g, '_')}`} key={index} className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-96 overflow-hidden">
                    <img src={getImagePath(doctor.img)} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" alt={doctor.name} />
                </div>
                <div className="p-6 text-center flex-grow flex flex-col justify-center bg-gray-50/50">
                    <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-secondary transition-colors">{doctor.name}</h3>
                    <p className="text-gray-500 font-medium">{doctor.position}</p>
                </div>
            </Link>
        ))}
        </div>
    </PageLayout>
  );
}
