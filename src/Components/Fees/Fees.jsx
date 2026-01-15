
import React from 'react';
import { Outlet } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import { Users, Globe } from 'lucide-react';

const feesLinks = [
    { to: 'EgyptianStudents', label: 'الطلاب المصريين', icon: Users },
    { to: 'InternationalStudents', label: 'الطلاب الأجانب', icon: Globe },
];

export default function Fees() {
    return (
        <PageLayout title="المصروفات الدراسية" links={feesLinks}>
            <Outlet />
        </PageLayout>
    );
}
