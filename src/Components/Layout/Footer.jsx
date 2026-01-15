import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

// Adjust logo path as needed
const LOGO_PATH = "/images/computer images/logo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-950 text-gray-300 pt-16 pb-8 font-sans border-t border-primary-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Column 1: Brand & Contact (Leftmost in RTL context, but first in DOM) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col items-start">
               <div className="bg-white p-2 rounded-lg mb-4 inline-block">
                  <img src={LOGO_PATH} alt="University Logo" className="h-16 w-auto" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2 leading-relaxed">جامعة الزقازيق الأهلية<br/><span className="text-secondary text-base font-normal">مدينة العاشر من رمضان - الشرقية</span></h3>
               <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                 نسعى لتقديم تعليم متميز وبحث علمي متطور يساهم في بناء مجتمع المعرفة وتنمية القدرات البشرية.
               </p>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-primary-900/50 w-full">
               <ContactItem icon={MapPin} text="طريق مصر الإسماعيلية الصحراوي، العاشر من رمضان" href="https://maps.app.goo.gl/amUxSgwJwvxNzSpW7" />
               <ContactItem icon={Mail} text="mahmoudelsaid560@gmail.com" href="mailto:mahmoudelsaid560@gmail.com" />
               <ContactItem icon={Phone} text="01032578410" href="tel:01032578410" />
            </div>

            <div className="flex gap-4 pt-2">
              <SocialIcon Icon={Facebook} href="https://www.facebook.com/profile.php?id=100040795912735" />
              <SocialIcon Icon={Github} href="https://github.com/Mahmoud-Elsaid" />
              <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/in/mahmoud-elsaid-a55a29239/" />
            </div>
          </div>

          {/* Column 2: About */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 border-b-2 border-secondary inline-block pb-2">عن الجامعة</h4>
            <ul className="space-y-3 text-sm">
              <FooterLink to="/about/history">تاريخ ونشأة الجامعة</FooterLink>
              <FooterLink to="/about/vision">الرؤية والرسالة</FooterLink>
              <FooterLink to="/about/goals">أهداف الجامعة</FooterLink>
              <FooterLink to="/about/leadership">مجلس الجامعة</FooterLink>
              <FooterLink to="/admissions">شروط القبول</FooterLink>
            </ul>
          </div>

          {/* Column 3: Faculties */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6 border-b-2 border-secondary inline-block pb-2">الكليات</h4>
             <ul className="grid grid-cols-1 gap-2 text-sm">
              <FooterLink to="/faculties/2/doctors">الطب البشري والجراحة</FooterLink>
              <FooterLink to="/faculties/6/doctors">طب وجراحة الفم والأسنان</FooterLink>
              <FooterLink to="/faculties/4/doctors">الصيدلة</FooterLink>
              <FooterLink to="/faculties/1/doctors">الهندسة</FooterLink>
              <FooterLink to="/faculties/3/doctors">الحاسبات والمعلومات</FooterLink>
              <FooterLink to="/faculties/5/doctors">التجارة</FooterLink>
            </ul>
          </div>

          {/* Column 4: Sectors & Media */}
          <div className="lg:col-span-3">
             <div className="mb-8">
                <h4 className="text-white font-bold text-lg mb-6 border-b-2 border-secondary inline-block pb-2">القطاعات</h4>
                <ul className="space-y-3 text-sm">
                  <FooterLink to="/sectors/Medical-sector">القطاع الطبي</FooterLink>
                  <FooterLink to="/sectors/Engineering-sector">القطاع الهندسي</FooterLink>
                  <FooterLink to="/sectors/Humanities-sector">قطاع العلوم الإنسانية</FooterLink>
                </ul>
             </div>
             <div>
                <h4 className="text-white font-bold text-lg mb-4 text-secondary">المركز الإعلامي</h4>
                <FooterLink to="/news">آخر الأخبار والإعلانات</FooterLink>
             </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-primary-900 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} جامعة الزقازيق الأهلية. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="hover:text-secondary hover:translate-x-[-4px] transition-all duration-300 inline-block font-medium">
      {children}
    </Link>
  </li>
)

const ContactItem = ({ icon: Icon, text, href }) => (
  <a href={href} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
    <Icon size={18} className="text-secondary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
    <span className="break-all">{text}</span>
  </a>
)

const SocialIcon = ({ Icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="w-10 h-10 rounded-full bg-primary-900 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md"
  >
    <Icon size={20} />
  </a>
)
