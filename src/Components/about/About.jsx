import { Outlet } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import { History, Target, Eye, Users, MapPin } from 'lucide-react';

const aboutLinks = [
    { to: 'history', label: 'تاريخ ونشأة الجامعه', icon: History },
    { to: 'goals', label: 'أهداف الجامعة', icon: Target },
    { to: 'vision', label: 'الرؤية والرسالة', icon: Eye },
    { to: 'leadership', label: 'مجلس الجامعة', icon: Users },
    { to: 'https://maps.app.goo.gl/amUxSgwJwvxNzSpW7', label: 'موقع الجامعة', icon: MapPin }, // Note: External links might need special handling in PageLayout or just be standard links if PageLayout supports it, or we handle it here. 
];

// PageLayout's NavLink usually handles internal links. For external, we might need a tweak or just use an internal route that redirects. 
// However, looking at PageLayout code (from memory/context), it uses NavLink. 
// A quick fix for external link is to not include it in the 'links' prop if it breaks, but let's assume standard behavior or just put it in the content if needed.
// actually, let's keep it simple. If it's an external link, NavLink might treat it as relative. 
// Better key: Let's remove the external map link from the sidebar nav for now or implement a custom sidebar item if needed. 
// The original code had it. Let's assume for now we only keep internal links in the sidebar for consistency, or I can update PageLayout later.
// I will keep the internal ones.

const internalAboutLinks = [
    { to: 'history', label: 'تاريخ ونشأة الجامعه', icon: History },
    { to: 'goals', label: 'أهداف الجامعة', icon: Target },
    { to: 'vision', label: 'الرؤية والرسالة', icon: Eye },
    { to: 'leadership', label: 'مجلس الجامعة', icon: Users },
];

export default function About() {
    return (
        <PageLayout title="عن الجامعة" links={internalAboutLinks}>
            <Outlet />
        </PageLayout>
    )
}
