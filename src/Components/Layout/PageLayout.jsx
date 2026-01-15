import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, Home, ArrowRight } from 'lucide-react';

export default function PageLayout({ title, links, children }) {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="bg-gray-50 min-h-screen py-10 font-sans transition-colors duration-300">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Breadcrumbs / Header */}
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <NavLink to="/" className="hover:text-secondary transition-colors"><Home size={16} /></NavLink>
                            <ChevronRight size={14} className="rtl:rotate-180" />
                            <span className="font-semibold text-primary-700">{title}</span>
                        </div>

                        <button 
                            onClick={() => navigate(-1)} 
                            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-secondary transition-colors group self-start md:self-auto bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-secondary hover:shadow-sm"
                        >
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            <span>رجوع</span>
                        </button>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-primary-900 border-b-4 border-secondary inline-block pb-2">
                        {title}
                    </h1>
                </div>

                <div className={`grid grid-cols-1 ${links && links.length > 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-1'} gap-8`}>
                    {/* Sidebar - Only render if links exist */}
                    {links && links.length > 0 && (
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                                <h3 className="text-xl font-bold text-primary-900 mb-4 px-2">قائمة الروابط</h3>
                                <nav className="flex flex-col gap-2">
                                    {links.map(({ to, label, icon: Icon }) => (
                                        <NavLink
                                            key={to}
                                            to={to}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                                                    isActive
                                                        ? 'bg-primary-900 text-white shadow-md transform translate-x-[-4px]'
                                                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                                                }`
                                            }
                                        >
                                            {Icon && <Icon size={18} />}
                                            {label}
                                        </NavLink>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className={links && links.length > 0 ? 'lg:col-span-3' : 'lg:col-span-1'}>
                         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 min-h-[500px] text-gray-800">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
