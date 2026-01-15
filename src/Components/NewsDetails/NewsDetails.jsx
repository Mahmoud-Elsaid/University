import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjectDataContext } from '../../Context/ProjectDataProvider';
import PageLayout from '../Layout/PageLayout';

export default function NewsDetails() {
  const params = useParams();
  const { data, isLoading, error } = useProjectDataContext();

  if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-10 w-10 border-4 border-secondary border-t-transparent"></div></div>;
  if (error) return <p className="text-center text-red-500 p-10">حدث خطأ: {error.message}</p>;

  const newsId = params.newsId;
  const details = data?.news?.find(n => n.id.toString() === newsId);

  if (!details) return <p className="text-center p-10 text-xl font-bold">الخبر غير موجود.</p>;

  // Helper
  const getImagePath = (path) => path ? path.replace(/^(\.\.\/)*\/?public\//, '/') : '';

  return (
    <PageLayout title={details.title}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
           {/* Image */}
           <div className="lg:col-span-1">
               {details.images?.[0] && (
                   <img src={getImagePath(details.images[0])} className="w-full rounded-2xl shadow-lg object-cover h-[400px]" alt={details.title} />
               )}
           </div>
           
           {/* Content */}
           <div className="lg:col-span-1 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-primary-900 mb-6 leading-tight">{details.title}</h2>
                <p className="text-gray-600 text-lg leading-loose">{details.description}</p>
           </div>
      </div>

      {details.images?.length > 1 && (
          <div className="mt-16">
              <h3 className="text-2xl font-bold text-primary-900 mb-8 border-b border-gray-100 pb-2">صور إضافية</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {details.images.slice(1).map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-64">
                         <img src={getImagePath(image)} className="w-full h-full object-cover" alt="" />
                    </div>
                 ))}
              </div>
          </div>
      )}
    </PageLayout>
  );
}
