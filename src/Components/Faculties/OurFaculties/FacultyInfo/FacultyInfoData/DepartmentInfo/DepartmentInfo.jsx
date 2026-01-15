import React from 'react';
import { useParams } from 'react-router-dom';
import { useProjectDataContext } from '../../../../../../Context/ProjectDataProvider';
import PageLayout from '../../../../../Layout/PageLayout';
import { User, FileText, MapPin, BookOpen, FlaskConical, Rocket, Users, Briefcase } from 'lucide-react';

export default function DepartmentInfo() {
  const { data, isLoading, error } = useProjectDataContext();
  const params = useParams();
  const facultyId = params.facultyId;
  const departmentInString = params.departName;
  const departmentName = departmentInString.replace(/_/g, ' ');

  if (isLoading) return <div className="flex justify-center p-20"><div className="animate-spin rounded-full h-10 w-10 border-4 border-secondary border-t-transparent"></div></div>;
  if (error) return <p className="text-center text-red-500 p-10">حدث خطأ: {error.message}</p>;

  const faculty = data?.faculties?.find(f => f.id.toString() === facultyId);
  if (!faculty) return <p className="text-center p-10">الكلية غير موجودة</p>;

  const choosenDepartment = faculty.departments?.find(d => d.name === departmentName);
  if (!choosenDepartment) return <p className="text-center p-10">القسم غير موجود</p>;

  const Section = ({ title, icon: Icon, children }) => (
      <div className="mb-10 last:mb-0">
          <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-2">
              <Icon className="text-secondary" size={24} />
              <h3 className="text-xl font-bold text-primary-900">{title}</h3>
          </div>
          <div className="text-gray-600 leading-relaxed text-lg pl-2">
              {children}
          </div>
      </div>
  );

  return (
    <PageLayout title={`${choosenDepartment.name} Department`}>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            
            <Section title="رئيس القسم" icon={User}>
                {choosenDepartment.head}
            </Section>

            <Section title="الوصف" icon={FileText}>
                {choosenDepartment.description}
            </Section>

            <Section title="الموقع" icon={MapPin}>
                {choosenDepartment.location}
            </Section>

            <Section title="المقررات الدراسية" icon={BookOpen}>
                <ul className="list-disc list-inside space-y-1">
                    {choosenDepartment.courses?.map((course, index) => <li key={index}>{course}</li>)}
                </ul>
            </Section>

            <Section title="المعامل" icon={FlaskConical}>
                <ul className="list-disc list-inside space-y-1">
                    {choosenDepartment.labs?.map((lab, index) => <li key={index}>{lab}</li>)}
                </ul>
            </Section>

            <Section title="المشاريع" icon={Rocket}>
                <ul className="list-disc list-inside space-y-1">
                    {choosenDepartment.projects?.map((project, index) => <li key={index}>{project}</li>)}
                </ul>
            </Section>

            <Section title="الشركاء" icon={Users}>
                 <ul className="list-disc list-inside space-y-1">
                    {choosenDepartment.partners?.map((partner, index) => <li key={index}>{partner}</li>)}
                </ul>
            </Section>

            <div className="mt-12">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-2">
                    <Briefcase className="text-secondary" size={24} />
                    <h3 className="text-xl font-bold text-primary-900">أعضاء القسم</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary-50 text-primary-900">
                                <th className="p-4 rounded-tl-xl font-bold">الاسم</th>
                                <th className="p-4 rounded-tr-xl font-bold">اللقب</th>
                            </tr>
                        </thead>
                        <tbody>
                            {choosenDepartment.stuff?.map((member, index) => (
                                <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                                    <td className="p-4">{member.name}</td>
                                    <td className="p-4 font-medium text-secondary">{member.job}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </PageLayout>
  );
}
