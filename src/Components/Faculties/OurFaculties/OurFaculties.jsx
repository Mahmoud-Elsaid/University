import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../Layout/PageLayout';
import { useProjectDataContext } from '../../../Context/ProjectDataProvider';
import Slider from 'react-slick';
import { BookOpen } from 'lucide-react';

const facultyLinks = [
    { to: '/faculties/2/doctors', label: 'الطب البشري', icon: BookOpen },
    { to: '/faculties/6/doctors', label: 'طب الأسنان', icon: BookOpen },
    { to: '/faculties/4/doctors', label: 'الصيدلة', icon: BookOpen },
    { to: '/faculties/1/doctors', label: 'الهندسة', icon: BookOpen },
    // Add others if needed or rely on the grid
];

export default function OurFaculties() {
    const { data, isLoading, error } = useProjectDataContext();
    const sliderData = data?.facultiesImages;
    const facultiesData = data?.faculties;

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
    };

    if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-10 w-10 border-4 border-secondary border-t-transparent"></div></div>;
    if (error) return <p className="text-center text-red-500 p-10">حدث خطأ في تحميل البيانات.</p>;

    return (
        <PageLayout title="كليات الجامعة" links={facultyLinks}>
            {/* Slider */}
            {sliderData?.length > 0 && (
                <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Slider {...settings}>
                        {sliderData.map((image, index) => (
                            <div key={index} className="outline-none">
                                <img src={getImagePath(image.image)} alt="Faculty Highlight" className="w-full h-[400px] object-cover" />
                            </div>
                        ))}
                    </Slider>
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facultiesData?.map((faculty) => (
                    <Link to={`/faculties/${faculty.id}/doctors`} key={faculty.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
                        <div className="h-48 p-6 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                             <img src={getImagePath(faculty.logo)} className="h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110" alt={faculty.name} />
                             <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/5 transition-colors"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-secondary transition-colors">{faculty.name}</h3>
                            <p className="text-gray-500 text-sm line-clamp-3 mb-4 leading-relaxed">
                                {faculty.description}
                            </p>
                            <span className="text-secondary font-bold text-sm flex items-center gap-1">المزيد من التفاصيل <BookOpen size={14}/></span>
                        </div>
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
}
