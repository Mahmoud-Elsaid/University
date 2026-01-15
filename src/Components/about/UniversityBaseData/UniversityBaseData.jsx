import React from 'react';
import { useLocation } from 'react-router-dom';
import { useProjectDataContext } from '../../../Context/ProjectDataProvider';

export default function UniversityBaseData() {
    const location = useLocation();
    const chosenPart = location.pathname.split('/').pop();
    const { data, isLoading, error } = useProjectDataContext();
    
    const universityData = data?.about?.find(item => item.name === chosenPart);

    if (isLoading) return (
        <div className="flex justify-center items-center h-64">
           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-secondary"></div>
        </div>
    );
    
    if (error || !universityData) return (
        <div className="text-center py-10 text-red-500">
            <p className="text-lg font-semibold">عذراً، محتوى هذه الصفحة غير متاح حالياً.</p>
        </div>
    );

    return (
        <div className="animate-fadeIn">
            <h2 className="text-2xl font-bold text-primary-800 mb-6 border-b border-gray-100 pb-4">
                {universityData.disc}
            </h2>
            <div className="prose prose-lg prose-indigo max-w-none text-gray-600 leading-loose">
                <ul className="list-disc list-inside space-y-4 marker:text-secondary">
                    {universityData.info?.split('\n').map((line, index) => (
                        line.trim() && <li key={index}>{line}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
