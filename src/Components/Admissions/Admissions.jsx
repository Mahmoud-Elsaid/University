import React, { useState } from 'react';
import PageLayout from '../Layout/PageLayout';
import { ChevronDown, CheckCircle } from 'lucide-react';

const AccordionItem = ({ title, isOpen, toggle, children }) => {
  return (
    <div className="border border-gray-100 rounded-xl mb-4 overflow-hidden bg-white shadow-sm transition-all duration-300">
      <button
        onClick={toggle}
        className={`w-full flex items-center justify-between p-5 text-right font-bold text-lg transition-colors ${isOpen ? 'bg-primary-50 text-secondary' : 'text-primary-900 hover:bg-gray-50'}`}
      >
        <span>{title}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 border-t border-gray-100 text-gray-600 leading-loose">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Admissions() {
  const [openSection, setOpenSection] = useState('Thanaweya');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const ListItem = ({ children }) => (
    <li className="flex items-start gap-2 mb-2">
      <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={16} />
      <span>{children}</span>
    </li>
  );

  const SectionTitle = ({ children }) => <h4 className="text-primary-800 font-bold mb-3 mt-4 text-lg">{children}</h4>;

  return (
    <PageLayout title="شروط القبول">
      
      {/* Introduction */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary-900">مقدمة</h2>
                  <p className="text-gray-600 leading-loose text-lg">
                      تتبع الجامعة في سياستها للقبول القواعد والإرشادات العامة التي وضعها مكتب التنسيق بوزارة التعليم العالي.
                  </p>
                  <div className="bg-primary-50 p-4 rounded-xl border-r-4 border-secondary">
                      <p className="font-bold text-primary-800">
                          رسوم التقديم: 1500 جنيه مصري (غير مستردة).
                      </p>
                  </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                   <img src="/images/computer images/1.jpg" className="w-full h-full object-cover" alt="Admissions" />
              </div>
          </div>
      </div>

      {/* Accordions */}
      <div className="max-w-4xl mx-auto">
          <AccordionItem title="الثانوية العامة المصرية" isOpen={openSection === 'Thanaweya'} toggle={() => toggleSection('Thanaweya')}>
              <SectionTitle>المتطلبات الأكاديمية وغير الأكاديمية:</SectionTitle>
              <ul className="space-y-2">
                  <ListItem>شهادة الثانوية العامة الأصلية.</ListItem>
                  <ListItem>شهادة ميلاد أصلية (كمبيوتر).</ListItem>
                  <ListItem>6 صور شخصية بحجم جواز السفر.</ListItem>
                  <ListItem>صورة من بطاقة الرقم القومي.</ListItem>
                  <ListItem>صورة جواز السفر (اختياري للمصريين، إلزامي لغير المصريين).</ListItem>
                  <ListItem>نموذج 2 جند و 6 أو 7 جند (للذكور المصريين فقط).</ListItem>
              </ul>
              
              <SectionTitle>للطلاب المحولين:</SectionTitle>
              <ul className="space-y-2">
                  <ListItem>خطاب سحب ملف أصلي (من الجامعات الخاصة فقط).</ListItem>
                  <ListItem>توصيف للمقررات موقع ومختوم من الجامعة السابقة.</ListItem>
                  <ListItem>سجل دراسي مختوم من الجامعة والمجلس الأعلى للجامعات.</ListItem>
                  <ListItem>بيان حالة مختوم من الجامعة السابقة.</ListItem>
              </ul>
          </AccordionItem>

          <AccordionItem title="الدبلومة الأمريكية" isOpen={openSection === 'American'} toggle={() => toggleSection('American')}>
              <p className="mb-4">تقبل الجامعة حداً أدنى للمعدل التراكمي (GPA) يبلغ 2.0. قد يُمنح الطلاب المتفوقون في دورات AP ساعات محولة.</p>
               <SectionTitle>الحد الأدنى للدرجات (EST):</SectionTitle>
               <ul className="space-y-2 mb-4">
                  <ListItem>كلية التجارة: 8 مواد + EST 1 (800 درجة).</ListItem>
                  <ListItem>كلية التكنولوجيا الحيوية: 8 مواد (شاملة المواد العلمية) + EST 1 (800 درجة).</ListItem>
                  <ListItem>الهندسة والحاسبات: 8 مواد + EST 1 (800 درجة) + EST 2 (900 درجة).</ListItem>
               </ul>
               
               <SectionTitle>المستندات المطلوبة:</SectionTitle>
               <ul className="space-y-2">
                   <ListItem>شهادة GPA للصفوف 10، 11، 12 موثقة.</ListItem>
                   <ListItem>خطاب اعتماد AMIDEAST (للمدارس خارج مصر).</ListItem>
                   <ListItem>درجات EST 1 و EST 2 موثقة من الإدارة العامة للامتحانات.</ListItem>
                   <ListItem>إثبات التسلسل الدراسي لمدة 12 عاماً.</ListItem>
                   <ListItem>شهادة الميلاد وصور شخصية وموقف التجنيد.</ListItem>
               </ul>
          </AccordionItem>

          <AccordionItem title="الشهادة البريطانية (IGCSE)" isOpen={openSection === 'IGCSE'} toggle={() => toggleSection('IGCSE')}>
              <p className="mb-4">يجب تقديم 8 مواد O-Level بتقدير لا يقل عن "C".</p>
              <SectionTitle>متطلبات الكليات:</SectionTitle>
                <ul className="space-y-2 mb-4">
                    <ListItem>التجارة: 8 مواد O-Level (شاملة الإنجليزية والرياضيات).</ListItem>
                    <ListItem>التكنولوجيا الحيوية: 8 مواد O-Level (شاملة المواد العلمية).</ListItem>
                    <ListItem>الهندسة: 8 مواد O-Level + مادة AS أو AL Math (بحد أدنى D).</ListItem>
                </ul>
          </AccordionItem>

           <AccordionItem title="مدارس المتفوقين (STEM)" isOpen={openSection === 'STEM'} toggle={() => toggleSection('STEM')}>
                <SectionTitle>تنسيق 2024-2025:</SectionTitle>
                <ul className="space-y-2 mb-4">
                    <ListItem>الهندسة: 68%</ListItem>
                    <ListItem>الحاسبات والمعلومات: 60%</ListItem>
                    <ListItem>التكنولوجيا الحيوية / التجارة: 53%</ListItem>
                </ul>
          </AccordionItem>
          
           <AccordionItem title="الثانوية الأزهرية" isOpen={openSection === 'Azhar'} toggle={() => toggleSection('Azhar')}>
               <SectionTitle>المستندات المطلوبة:</SectionTitle>
               <ul className="space-y-2">
                  <ListItem>شهادة الثانوية الأزهرية الأصلية.</ListItem>
                  <ListItem>نفس الأوراق المطلوبة للثانوية العامة.</ListItem>
               </ul>
          </AccordionItem>
      </div>
    </PageLayout>
  );
}
