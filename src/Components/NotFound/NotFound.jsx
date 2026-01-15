import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import PageLayout from '../Layout/PageLayout';

export default function NotFound() {
  return (
    <PageLayout title="الصفحة غير موجودة">
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse opacity-50"></div>
            <AlertCircle size={100} className="text-red-500 relative z-10" />
        </div>
        
        <h1 className="text-6xl font-bold text-primary-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-700 mb-6">عذراً، الصفحة التي تبحث عنها غير موجودة.</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
            قد يكون الرابط غير صحيح، أو تم حذف الصفحة، أو نقلها إلى مكان آخر.
        </p>
        
        <Link 
            to="/" 
            className="group flex items-center gap-2 bg-secondary hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
            <Home size={20} />
            <span>العودة للرئيسية</span>
        </Link>
      </div>
    </PageLayout>
  );
}
