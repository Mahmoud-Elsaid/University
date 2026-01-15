import { Menu, X, Facebook, Linkedin, Github, Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

// You might need to adjust the logo path depending on where your assets are.
// If it's in public/images/..., the path below works fine.
const LOGO_PATH = "/images/computer images/logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navClasses = `
    transition-all duration-300 ease-in-out w-full z-50 sticky top-0
    ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4 shadow-sm'}
    border-b border-transparent
  `

  const linkBaseClasses = "relative font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 flex items-center gap-1 group"
  const activeLinkClasses = "text-primary-600 font-bold"

  return (
    <header className="font-sans">
      {/* Top Bar - Premium Dark Navy */}
      <div className="bg-primary-900 text-gray-200 text-sm py-2 px-4 shadow-sm relative z-50 hidden md:block">
        <div className="container mx-auto flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Phone size={14} className="text-secondary" />
              <a href="tel:44519" className="hover:underline">01032578410</a>
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={14} className="text-secondary" />
              <a href="mailto:mahmoudelsaid560@gmail.com" className="hover:underline">Contact@university.edu</a>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Follow Us</span>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/groups/347774468135219" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><Facebook size={16} /></a>
              <a href="https://github.com/Mahmoud-Elsaid" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><Github size={16} /></a>
              <a href="https://www.linkedin.com/in/mahmoud-elsaid-a55a29239/" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors"><Linkedin size={16} /></a>
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={navClasses}>
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={LOGO_PATH} alt="University Logo" className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden lg:block">
              <h1 className="text-xl font-bold text-primary-900 leading-tight"> University </h1>
              <p className="text-xs text-gray-500 tracking-wide">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/" end className={({ isActive }) => `${linkBaseClasses} ${isActive ? activeLinkClasses : ''}`}>
              الرئيسية
            </NavLink>

            {/* Dropdown: About */}
            <div className="relative group/dropdown h-full flex items-center">
              <button className={linkBaseClasses}>
                عن الجامعة <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full right-0 pt-4 w-56 opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 transform origin-top-right z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                  <DropdownItem to="/about/history" label="تاريخ ونشأة الجامعة" />
                  <DropdownItem to="/about/vision" label="الرؤية والرسالة" />
                  <DropdownItem to="/about/goals" label="أهداف الجامعة" />
                  <DropdownItem to="/about/leadership" label="مجلس الجامعة" />
                  <hr className="my-1 border-gray-100" />
                  <a href="https://maps.app.goo.gl/amUxSgwJwvxNzSpW7" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 hover:bg-primary-50 hover:text-primary-700 rounded-lg text-sm text-gray-600 transition-colors">
                    <MapPin size={14} /> موقع الجامعة
                  </a>
                </div>
              </div>
            </div>

            {/* Dropdown: Faculties */}
            <div className="relative group/dropdown h-full flex items-center">
              <button className={linkBaseClasses}>
                الكليات <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full right-0 pt-4 w-64 opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 transform origin-top-right z-50">
                 <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                  <DropdownItem to="/faculties" label="جميع الكليات" isBold />
                  <hr className="my-1 border-gray-100" />
                  <DropdownItem to="/faculties/2/doctors" label="الطب البشري والجراحة" />
                  <DropdownItem to="/faculties/6/doctors" label="طب وجراحة الفم والأسنان" />
                  <DropdownItem to="/faculties/4/doctors" label="الصيدلة" />
                  <DropdownItem to="/faculties/1/doctors" label="الهندسة" />
                  <DropdownItem to="/faculties/3/doctors" label="الحاسبات والمعلومات" />
                  <DropdownItem to="/faculties/5/doctors" label="التجارة" />
                </div>
              </div>
            </div>

             {/* Dropdown: Sectors */}
             <div className="relative group/dropdown h-full flex items-center">
              <button className={linkBaseClasses}>
                القطاعات <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full right-0 pt-4 w-56 opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 transform origin-top-right z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                  <DropdownItem to="/sectors/Medical-sector" label="القطاع الطبي" />
                  <DropdownItem to="/sectors/Engineering-sector" label="القطاع الهندسي" />
                  <DropdownItem to="/sectors/Humanities-sector" label="قطاع العلوم الإنسانية" />
                </div>
              </div>
            </div>

            <NavLink to="/news" className={({ isActive }) => `${linkBaseClasses} ${isActive ? activeLinkClasses : ''}`}>
              المركز الإعلامي
            </NavLink>

            {/* Dropdown: Admission */}
            <div className="relative group/dropdown h-full flex items-center">
              <button className={linkBaseClasses}>
                القبول <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full right-0 pt-4 w-48 opacity-0 invisible translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-300 transform origin-top-right z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2">
                  <DropdownItem to="/admissions" label="شروط القبول" />
                  <DropdownItem to="/fees/EgyptianStudents" label="الرسوم الدراسية" />
                  <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-primary-50 hover:text-primary-700 rounded-lg text-sm text-gray-600 transition-colors">
                     كيفية التقديم
                  </a>
                </div>
              </div>
            </div>

             {/* CTA Button */}
             <Link to="/admissions" className="bg-secondary hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm">
                قدم الآن
             </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-primary-900 rounded-lg hover:bg-primary-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
             <MobileNavLink to="/" onClick={() => setIsOpen(false)}>الرئيسية</MobileNavLink>
             <div className="border-t border-gray-100 pt-2">
                <p className="text-xs text-gray-400 font-bold mb-2">عن الجامعة</p>
                <MobileNavLink to="/about/history" onClick={() => setIsOpen(false)}>تاريخ الجامعة</MobileNavLink>
             </div>
             {/* Add more mobile links as needed, keeping it simple for now */}
             <MobileNavLink to="/faculties" onClick={() => setIsOpen(false)}>الكليات</MobileNavLink>
             <MobileNavLink to="/news" onClick={() => setIsOpen(false)}>الأخبار</MobileNavLink>
             <MobileNavLink to="/admissions" onClick={() => setIsOpen(false)}>القبول التسجيل</MobileNavLink>
             
          </div>
        </div>
      </nav>
    </header>
  )
}

const DropdownItem = ({ to, label, isBold = false }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `block px-4 py-2.5 rounded-lg text-sm transition-colors duration-200 ${isActive ? 'bg-primary-50 text-primary-700 font-bold' : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'} ${isBold ? 'font-semibold' : ''}`
    }
  >
    {label}
  </NavLink>
)

const MobileNavLink = ({ to, children, onClick }) => (
  <NavLink 
    to={to} 
    onClick={onClick}
    className={({ isActive }) => 
      `block text-base font-medium py-2 border-b border-gray-50 last:border-0 ${isActive ? 'text-primary-600' : 'text-gray-700'}`
    }
  >
    {children}
  </NavLink>
)
