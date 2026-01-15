import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useProjectDataContext } from '../../../../../Context/ProjectDataProvider';
import { CheckCircle } from 'lucide-react';

export default function FacultyInfoPermissions() {
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

  // Translate titles if needed, or just capitalize
  const titles = {
    'admission': 'شروط القبول',
    'WhyUs': 'لماذا نحن؟'
  };

  const title = titles[chosenPart] || chosenPart;

  return (
    <div className="animate-fadeIn">
      <h2 className="text-2xl font-bold text-primary-900 mb-6 border-b border-gray-100 pb-2">{title}</h2>
      <ul className="space-y-4">
        {partData?.split('\n').map((line, index) => (
          line.trim() && (
            <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-sm transition-shadow" key={index}>
                <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-700 leading-relaxed">{line}</span>
            </li>
          )
        ))}
      </ul>
    </div>
  );
}
