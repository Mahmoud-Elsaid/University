import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useProjectDataContext } from '../../../../../Context/ProjectDataProvider';

export default function FacultyInfoData() {
  const { data, isLoading, error } = useProjectDataContext();
  const params = useParams();
  const location = useLocation();

  const facultyId = params.facultyId;
  const chosenPart = location.pathname.split("/").pop();

  const faculty = data?.faculties?.find(f => f.id.toString() === facultyId);
  const partData = faculty?.[chosenPart];

  if (isLoading) return <div className="flex justify-center p-10"><div className="animate-spin rounded-full h-8 w-8 border-4 border-secondary border-t-transparent"></div></div>;
  if (error) return <p className="text-center text-red-500">حدث خطأ!</p>;
  if (!faculty) return <p className="text-center">الكلية غير موجودة</p>;

  // Helper
  const getImagePath = (path) => path ? path.replace(/^(\.\.\/)*\/?public\//, '/') : '';

   // Translate titles
   const titles = {
    'doctors': 'أعضاء هيئة التدريس',
    'departments': 'الأقسام'
  };
  const title = titles[chosenPart] || chosenPart;

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b border-gray-100 pb-2">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partData?.map((element, index) => (
          <div key={index} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
             <Link
               to={chosenPart === "departments" ? `/faculties/${faculty.id}/${element.name.replace(/\s+/g, '_')}` : "#"}
               className={`block h-full ${chosenPart !== "departments" ? 'cursor-default' : ''}`}
             >
                <div className="h-64 overflow-hidden relative">
                   <img
                     src={getImagePath(element.image)}
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     alt={element.name}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-60"></div>
                </div>
                <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-primary-900 mb-1 group-hover:text-secondary transition-colors">{element.name}</h3>
                    {element.responsibility && <p className="text-sm text-gray-500 font-medium">{element.responsibility}</p>}
                </div>
             </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
