import React, { useState } from 'react';
import { useProjectDataContext } from '../../Context/ProjectDataProvider';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PageLayout from '../Layout/PageLayout';
import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const { data, isLoading, error } = useProjectDataContext();
  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-10 w-10 border-4 border-secondary border-t-transparent"></div></div>;
  if (error) return <p className="text-center text-red-500 p-10">حدث خطأ: {error.message}</p>;
  if (!data?.news?.length) return <p className="text-center p-10">لا توجد أخبار حالياً.</p>;

  const newsHeader = data.news[0];
  const allNews = data.news.filter(n => n.id !== newsHeader.id);

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
    autoplaySpeed: 5000,
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

  return (
    <PageLayout title="المركز الإعلامي">
      
      {/* Featured News */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 space-y-4">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-bold inline-block border border-secondary/20">أحدث الأخبار</span>
                <h2 className="text-3xl font-bold text-primary-900 leading-tight">{newsHeader.title}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{newsHeader.description}</p>
                 <Link to={`/news/${newsHeader.id}`} className="inline-flex items-center text-primary-600 font-bold hover:text-secondary transition-colors mt-2">
                    اقرأ المزيد <ArrowRight className="mr-2" size={18} />
                </Link>
            </div>
            
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
             {newsHeader.images?.length > 0 && (
                  <Slider {...settings}>
                    {newsHeader.images.map((image, index) => (
                      <div key={index} className="outline-none">
                        <img src={getImagePath(image)} alt="Featured News" className="w-full h-[400px] object-cover" />
                      </div>
                    ))}
                  </Slider>
                )}
            </div>
        </div>
      </div>

      {/* All News Grid */}
      <div>
           <h3 className="text-2xl font-bold text-primary-900 mb-8 border-b border-gray-100 pb-2">المزيد من الأخبار</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.length > 0 ? allNews.map((news, index) => (
               <Link to={`/news/${news.id}`} key={index} className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full">
                  <div className="h-56 overflow-hidden relative">
                     {news.images?.[0] && <img src={getImagePath(news.images[0])} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={news.title} />}
                     <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                     <h4 className="font-bold text-lg text-primary-900 mb-3 group-hover:text-secondary transition-colors line-clamp-2">{news.title}</h4>
                     <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">{news.description}</p>
                     <span className="text-secondary text-sm font-bold flex items-center gap-1 mt-auto">قراءة الخبر <ArrowRight size={14} /></span>
                  </div>
               </Link>
            )) : <p className="col-span-full text-center text-gray-500">لا توجد أخبار إضافية.</p>}
           </div>
      </div>
    </PageLayout>
  );
}
