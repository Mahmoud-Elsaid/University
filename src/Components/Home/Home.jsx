import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, GraduationCap, Building2, Calendar, Newspaper } from 'lucide-react';
import { useProjectDataContext } from '../../Context/ProjectDataProvider';
// import video from '/images/computer images/vid.mp4'; // Removed import
const video = "/images/computer images/vid.mp4";

// Use absolute path for video if possible to avoid import issues if file is large or location moves.
// Assuming "public/images/computer images/vid.mp4". Vite handles public root effectively.
// If the import 'video' works currently, we keep it.

export default function Home() {
    const { data, isLoading, error } = useProjectDataContext();

    if (isLoading) return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-secondary"></div>
        </div>
    );

    if (error) return (
        <div className="flex items-center justify-center min-h-screen text-red-600">
            <p className="text-xl font-semibold">Something went wrong loading data.</p>
        </div>
    );

    const counter = data?.counter?.[0];
    const news = data?.news?.slice(0, 3);
    const faculties = data?.faculties?.slice(0, 3);

    const getImagePath = (path) => {
        if (!path) return '';
        // Remove ../ and /public/ or public/ from the start
        return path.replace(/^(\.\.\/)*\/?public\//, '/');
    };

    return (
        <div className="font-sans ">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary-950/40 z-10"></div>
                <video 
                    className="absolute top-0 left-0 w-full h-full object-cover" 
                    src={video} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                />
                
                <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-start text-white max-w-7xl">
                    <span className="bg-secondary/90 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6 uppercase shadow-lg backdrop-blur-sm">
                        Welcome to Our University
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl drop-shadow-lg">
                        شكل مستقبلك <br/> <span className="text-secondary">في جامعة الزقازيق الأهلية</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                        تعليم متميز، بحث علمي متطور، وبيئة أكاديمية داعمة للإبداع والابتكار.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/admissions" className="bg-secondary hover:bg-amber-600 text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-2">
                            قدم الآن <ArrowRight size={20} />
                        </Link>
                        <Link to="/faculties" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border md:border-2 border-white/30 text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300">
                            استكشف الكليات
                        </Link>
                    </div>
                </div>

                 {/* Wave separator */}
                 <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
                    </svg>
                </div>
            </section>

            {/* Stats Section (Transformed) */}
            <section className="py-20 bg-gray-50 relative -mt-2 transition-colors duration-300">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                         <StatCard number={counter?.Students || "5000+"} label="طالب وطالبة" icon={Users} />
                         <StatCard number={counter?.AcademicFacultyStaff || "300+"} label="عضو هيئة تدريس" icon={GraduationCap} />
                         <StatCard number={counter?.numberOfFaculties || "7"} label="كليات متنوعة" icon={Building2} />
                         <StatCard number={counter?.InternationalStudents || "200+"} label="طالب وافد" icon={BookOpen} />
                    </div>
                </div>
            </section>


            {/* News Section */}
            <section className="py-24 bg-white transition-colors duration-300">
                <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeader title="أخبار الجامعة" subtitle="تابع أحدث الفعاليات والإعلانات الرسمية" link="/news" linkText="عرض كل الأخبار" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                         {/* Featured News Item (Large) */}
                         {news && news.length > 1 && (
                            <Link to={`/news/${news[1].id}`} className="lg:col-span-2 group relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <img src={getImagePath(news[1].images?.[1]) || "/placeholder.jpg"} alt={news[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/40 to-transparent"></div>
                                <div className="absolute bottom-0 right-0 p-8 w-full md:w-3/4">
                                     <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-3">أخبار مميزة</span>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-secondary transition-colors">
                                        {news[1].title}
                                    </h3>
                                    <p className="text-gray-300 line-clamp-2 md:line-clamp-3 text-sm md:text-base">
                                         {news[1].description}
                                    </p>
                                </div>
                            </Link>
                         )}

                         {/* Side News Items */}
                         <div className="flex flex-col gap-8 h-full">
                            {news && news[0] && <SmallNewsCard news={news[0]} getImagePath={getImagePath} />}
                            {news && news[2] && <SmallNewsCard news={news[2]} getImagePath={getImagePath} />}
                         </div>
                    </div>
                </div>
            </section>

            {/* Faculties Section */}
            <section className="py-24 bg-primary-50 transition-colors duration-300">
                 <div className="container mx-auto px-6 max-w-7xl">
                    <SectionHeader title="كلياتنا" subtitle="تخصصات أكاديمية تلبي متطلبات سوق العمل" link="/faculties" linkText="تصفح جميع الكليات" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {faculties?.map((faculty, index) => (
                            <Link to={`/faculties/${faculty.id}/doctors`} key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col h-full">
                                <div className="h-64 overflow-hidden relative p-8 flex items-center justify-center bg-gray-50">
                                    <img src={getImagePath(faculty.logo)} alt={faculty.name} className="h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm mix-blend-multiply" />
                                    <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/5 transition-colors duration-300"></div>
                                </div>
                                <div className="p-8 text-center flex-grow flex flex-col justify-center relative overflow-hidden">
                                     <div className="absolute top-0 right-1/2 translate-x-1/2 w-12 h-1 bg-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                                    <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-secondary transition-colors">{faculty.name}</h3>
                                    <p className="text-sm text-gray-500 font-medium">اضغط للتفاصيل</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                 </div>
            </section>

             {/* Call to Action */}
             <section className="py-20 bg-primary-900 relative overflow-hidden transition-colors duration-300">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')]"></div>
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">جاهز للبدء في رحلتك؟</h2>
                    <p className="text-xl text-primary-100 mb-10">انضم إلينا اليوم وكن جزءاً من مجتمع أكاديمي متميز.</p>
                    <Link to="/admissions" className="inline-block bg-secondary hover:bg-amber-600 text-white text-lg font-bold py-4 px-12 rounded-full shadow-2xl transition-all hover:scale-105">
                        سجل الآن
                    </Link>
                </div>
            </section>
        </div>
    );
}

// Sub-components
const StatCard = ({ number, label, icon: Icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:border-secondary/30 transition-colors">
        <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
            <Icon size={32} />
        </div>
        <span className="text-4xl font-bold text-primary-900 mb-2">{number}</span>
        <span className="text-gray-500 font-medium">{label}</span>
    </div>
);

const SectionHeader = ({ title, subtitle, link, linkText }) => (
    <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b pb-4 border-gray-200">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">{title}</h2>
            <p className="text-gray-500">{subtitle}</p>
        </div>
        <Link to={link} className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            {linkText} <ArrowRight size={18} />
        </Link>
    </div>
);

const SmallNewsCard = ({ news, getImagePath }) => (
    <Link to={`/news/${news.id}`} className="flex-1 bg-white rounded-2xl overflow-hidden shadow-md flex group border border-gray-100 hover:shadow-lg transition-all">
        <div className="w-1/3 relative overflow-hidden">
             <img src={getImagePath(news.images?.[0]) || "/placeholder.jpg"} alt={news.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="w-2/3 p-6 flex flex-col justify-center">
             <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                 <Calendar size={12} /> <span>{new Date().toLocaleDateString('ar-EG')}</span>
             </div>
            <h3 className="text-lg font-bold text-primary-900 line-clamp-2 mb-2 group-hover:text-secondary transition-colors">
                {news.title}
            </h3>
        </div>
    </Link>
);
