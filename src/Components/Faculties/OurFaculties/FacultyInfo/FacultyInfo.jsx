import React, { useState } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import Slider from 'react-slick';
import PageLayout from '../../../Layout/PageLayout';
import { useProjectDataContext } from '../../../../Context/ProjectDataProvider';
import { Users, Building, FileText, HelpCircle, Wallet } from 'lucide-react';

const facultyLinks = [
    { to: 'doctors', label: 'أعضاء هيئة التدريس', icon: Users },
    { to: 'departments', label: 'الأقسام', icon: Building },
    { to: 'admission', label: 'شروط الدخول', icon: FileText },
    { to: 'WhyUs', label: 'لماذا نحن؟', icon: HelpCircle },
    { to: '/fees/EgyptianStudents', label: 'المصروفات', icon: Wallet },
];

export default function FacultyInfo() {
  const { data, isLoading, error } = useProjectDataContext();
  const params = useParams();
  const facultyId = params.facultyId;

  const faculty = data?.faculties?.find(f => f.id.toString() === facultyId);

  const [activeIndex, setActiveIndex] = useState(0);

  const getImagePath = (path) => {
    if (!path) return '';
    return path.replace(/^(\.\.\/)*\/?public\//, '/');
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    appendDots: dots => (
      <div style={{ bottom: "20px" }}>
         <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"}`} />
    )
  };

  if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-10 w-10 border-4 border-secondary border-t-transparent"></div></div>;
  if (error) return <p className="text-center text-red-500 p-10">حدث خطأ!</p>;
  
  if (!faculty) {
      return (
        <PageLayout title="الكلية غير موجودة">
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gray-100 rounded-full animate-pulse opacity-50"></div>
                    <Building size={100} className="text-gray-400 relative z-10" />
                </div>
                
                <h2 className="text-3xl font-bold text-primary-900 mb-4">عذراً، لم يتم العثور على الكلية</h2>
                <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
                    من المحتمل أن الرابط غير صحيح أو أن بيانات الكلية غير متوفرة حالياً.
                </p>
                
                <div className="flex gap-4">
                     <Link to="/faculties" className="bg-primary-900 hover:bg-primary-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">
                        كل الكليات
                    </Link>
                    <Link to="/" className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3 px-8 rounded-full shadow-sm transition-all">
                        الرئيسية
                    </Link>
                </div>
            </div>
        </PageLayout>
      );
  }

  return (
    <PageLayout title={faculty.name} links={facultyLinks}>
      {/* Slider Section */}
      {faculty.images?.length > 0 && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
          <Slider {...settings}>
            {faculty.images.map((image, index) => (
              <div key={index} className="outline-none">
                <img src={getImagePath(image)} alt={`slide-${index}`} className="w-full h-[400px] object-cover" />
              </div>
            ))}
          </Slider>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
         <Outlet />
      </div>
    </PageLayout>
  );
}
