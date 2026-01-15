import React from 'react';
import { Outlet } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import { Activity, Cpu, BookOpen } from 'lucide-react';

const sectorLinks = [
    { to: 'Medical-sector', label: 'القطاع الطبي', icon: Activity },
    { to: 'Engineering-sector', label: 'القطاع الهندسي', icon: Cpu },
    { to: 'Humanities-sector', label: 'قطاع العلوم الإنسانية', icon: BookOpen },
];

export default function Sectors() {
    return (
        <PageLayout title="قطاعات الجامعة" links={sectorLinks}>
            <Outlet />
        </PageLayout>
    );
}
