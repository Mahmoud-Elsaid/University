import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjectDataContext } from '../../../../Context/ProjectDataProvider';
import PageLayout from '../../../Layout/PageLayout';
import { Facebook, Linkedin, Mail, Github, Briefcase, User } from 'lucide-react';

export default function UniversityDoctorsInfo() {
  const { doctorName } = useParams();
  const displayName = doctorName.replace(/_/g, ' ');
  const { data, isLoading, error } = useProjectDataContext();

  const doctorInfo = data?.leadership?.find(doc => doc.name === displayName);

  if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-10 w-10 border-4 border-secondary border-t-transparent"></div></div>;
  if (error) return <p className="text-center text-red-500 p-10">حدث خطأ!</p>;
  if (!doctorInfo) return <p className="text-center p-10">لا توجد بيانات.</p>;

  // Fix path to remove ../ and public/
  const imagePath = doctorInfo.img ? doctorInfo.img.replace(/^(\.\.\/)*\/?public\//, '/') : '';

  return (
    <PageLayout title={doctorInfo.name}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Image Column */}
            <div className="lg:col-span-1">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 sticky top-24">
                    <img src={imagePath} className="w-full h-auto object-cover" alt={doctorInfo.name} />
                    <div className="p-6 bg-white">
                         <h2 className="text-2xl font-bold text-primary-900 mb-2">{doctorInfo.name}</h2>
                         <p className="text-secondary font-medium mb-6">{doctorInfo.position}</p>
                         
                         <div className="flex justify-center gap-4">
                            {[Facebook, Linkedin, Mail, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-secondary hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                         </div>
                    </div>
                </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-2 space-y-8">
                 <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="flex items-center gap-3 mb-4">
                        <Briefcase className="text-secondary" size={24} />
                        <h3 className="text-xl font-bold text-primary-900">المكتب</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{doctorInfo.office}</p>
                 </div>

                 <div className="bg-white rounded-2xl p-0">
                    <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                        <User className="text-secondary" size={24} />
                        <h3 className="text-2xl font-bold text-primary-900">السيرة الذاتية</h3>
                    </div>
                    <p className="text-gray-600 leading-loose text-lg whitespace-pre-line text-justify">
                        {doctorInfo.bio}
                    </p>
                 </div>
            </div>
        </div>
    </PageLayout>
  );
}
