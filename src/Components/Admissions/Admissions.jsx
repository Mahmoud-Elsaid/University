import React, { useContext, useEffect, useState } from 'react'
import styles from './Admissions.module.css'
import Banner from '../Banner/Banner'
import { BannerContext } from '../../Context/BannerContext'

export default function Admissions() {

        const { setBanner} = useContext(BannerContext)
    

    const [ThanaweyaToggle, setThanaweyaToggle] = useState(false);
    const [americanDiplomaToggle, setamericanDiplomaToggle] = useState(true);
    const [IGCSEToggle, setIGCSEToggle] = useState(true);
    const [STEMToggle, setSTEMToggle] = useState(true);
    const [AzharToggle, setAzharToggle] = useState(true);


    useEffect(() => {
            setBanner(`Admissions Requirements`)    }
            , [setBanner]);

  return (
    <> 

    <Banner/>

    <section className={styles.admissions}>

        <div className=' container pt-5'>
            <div className={`row p-4 ${styles.admissionsIntro}`}>
                <div className=' col-lg-6 mainList'>
                    <div className='intorductionContent' style={{height:"450px"}}>
                        <h2>Introduction</h2>
                        <h4 className=' lead text-muted'>In its admission, Nile University follows the general rules and guidelines set by the Office of Admission, Ministry of Higher Education.</h4>
                        <h4 className=' lead text-muted'>The fees for application amounts to 1500 EGP (Non Refundable) and the criteria and documents required for each of the accepted certificates are listed below:</h4>
                    </div>
                </div>

                <div className=' col-lg-6 mainList'>
                    <div className='introductionImg p-3 pt-5'>
                        <img src='../../../public/images/computer images/1.jpg' className=' w-100' height={450} alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className={`${styles.admissionsImg} w-75 m-auto p-2 pt-5`}>
            <h3>For undergraduate</h3>
            <div>
                <img src="../../../public/images/admissons/Admission.jpg" className=' w-100' alt="" />
            </div>
        </div>

        <div className='w-75 m-auto p-2 pt-5'>
        <div className={`${styles.title} p-3`}>
            
            <button
                
                onClick={() => setThanaweyaToggle(!ThanaweyaToggle)}
                className='btn w-100 d-flex justify-content-between align-items-center'
            
            >
                
                <span>Thanawya Amma </span>
                <i className={`fa-solid fa-chevron-down ${styles.icon} ${ThanaweyaToggle ? styles.rotated : ''}`}></i>
            
            </button>
        
        </div>

        <div className={`${styles.content} ${ThanaweyaToggle ? styles.hidden : ''} p-4 `}>
            <h4>Academic and Non-Academic Requirements:</h4>
            <ul>
                <li className=' lead text-muted'>Official Thanaweya Amma Certificate.</li>
                <li className=' lead text-muted'>Original birth certificate (computerized).</li>
                <li className=' lead text-muted'>6 passport-size photos.</li>
                <li className=' lead text-muted'>Copy of Egyptian national ID.</li>
                <li className=' lead text-muted'>Copy of passport (optional for Egyptians and required for non-Egyptian applicants).</li>
                <li className=' lead text-muted'>Military form 2 & 7 or 6 (male only) (for Egyptians).</li>
            </ul>


            <h5>N.B:</h5>
            <p>For Transferred Students, in addition to the above:</p>
            <ul>
                <li className=' lead text-muted'>Original Withdrawal Letter (for private universities only).</li>
                <li className=' lead text-muted'>Course description signed and stamped from the previous university.</li>
                <li className=' lead text-muted'>Transcript stamped from the University and the Supreme Council of Universities.</li>
                <li className=' lead text-muted'>Bayan hala (بيان حالة) stamped from the previous university.</li>
            </ul>
        </div>
        </div>


        <div className='w-75 m-auto p-2'>
        <div className={`${styles.title} p-3`}>
            
            <button
                
                onClick={() => setamericanDiplomaToggle(!americanDiplomaToggle)}
                className='btn w-100 d-flex justify-content-between align-items-center'
            
            >
                
                <span>American Diploma   </span>
                <i className={`fa-solid fa-chevron-down ${styles.icon} ${americanDiplomaToggle ? styles.rotated : ''}`}></i>
            
            </button>
        
        </div>

        <div className={`${styles.content} ${americanDiplomaToggle ? styles.hidden : ''} p-4 `}>
            <p className=' lead text-muted'>Nile University considers the admission of a minimum cumulative Grade Point Average (GPA) of 2.0 (on a scale of 4.0). Students who have scored high on Advanced Placement (AP) courses may be granted transfer credits.</p>
            <p className=' lead text-muted'>The score mentioned below might be subject to change as per the Ministry of Higher Education and the SCU instructions.</p>
            <ul>
                <li className=' lead text-muted'>Business School: 8 subjects from GPA certificate including English and Maths, along with EST 1 with a minimum score of 800.</li>
                <li className=' lead text-muted'>Biotechnology School: 8 subjects from GPA certificate including English, Maths, Physics, Chemistry, and Biology along with EST 1 with a minimum score of 800.</li>
                <li className=' lead text-muted'>Engineering and Computer Science School: 8 subjects from GPA certificate including English, Maths, Physics, and Chemistry, along with EST 1 with a minimum score of 800 and EST 2 with a minimum score of 900.</li>
            </ul>

            <h4>Academic and Non-Academic Requirements:</h4>
            <ul>
                <li className=' lead text-muted'>An official American Diploma GPA Certificate (Grades 10, 11 and12) stamped by the American Dipmola Accreditation Association and the General Educational Examination (الادارة العامة للامتحانات) is required for schools inside of Egypt.</li>
                <li className=' lead text-muted'>If the school is outside of Egypt, the GPA certificate should be stamped by the American Dipmola Accreditation Association, the Egyptian Embassy in the country where the school is located and the Ministry of Foreign Affairs of the country where the school is located.</li>
                <li className=' lead text-muted'>If the student spends grades 10, 11, and 12 in 3 different schools, they should bring a transcript for each grade separately stamped by the General Examinations Department - in case the school is inside Egypt - and if the school is outside of Egypt, this different transcript should be stamped from the Egyptian Embassy in the country where the school is located and also the Ministry of Foreign Affairs of the country where the school is located.</li>
                <li className=' lead text-muted'>AMIDEAST letter of Accreditation for schools outside of Egypt only and for schools inside of Egypt, it should be افادة التعليم الخاص بمعادلة المدرسة.</li>
                <li className=' lead text-muted'>EST 1 and EST II stamped by the General Examination Department.</li>
                <li className=' lead text-muted'>If taken, Arabic and Religion subjects stamped by the General Examinations Department.</li>
                <li className=' lead text-muted'>EST username and password.</li>
                <li className=' lead text-muted'>Proof of 12 years of schooling for schools inside of Egypt should be stamped by the school stamp and the Educational Administration that the school follows. If the school is outside of Egypt, it should be stamped by the Egyptian Embassy in the country where the school is located and the Ministry of Foreign Affairs of the country where the school is located.</li>
                <li className=' lead text-muted'>Original birth certificate (computerized). </li>
                <li className=' lead text-muted'>Copy of Egyptian national ID.</li>
                <li className=' lead text-muted'>Copy of passport (optional for Egyptians and required for non-Egyptian applicants). </li>
                <li className=' lead text-muted'>6 passport-size photos.</li>
                <li className=' lead text-muted'>Military form 2 & 7 or 6 (male only) (for Egyptians).</li>
                <li className=' lead text-muted'>For students who studied outside of Egypt, they must submit a copy of their passport and copy of their student residency during their study (موضح بها تأشيرات الدخول والخروج إقامة الطالب خلال فترة دراسته ).</li>
            </ul>

            

            <h4> For Transferred students, in addition to the above:</h4>
            <ul>
                <li className=' lead text-muted'>Original Withdrawal Letter (for private universities only).</li>
                <li className=' lead text-muted'>Course description signed and stamped from the previous university.</li>
                <li className=' lead text-muted'>Transcript stamped from the University and the Supreme Council of Universities.</li>
                <li className=' lead text-muted'>Bayan hala (بيان حالة) stamped from previous university. </li>
            </ul>


            
        </div>
        </div>

        <div className='w-75 m-auto p-2'>
        <div className={`${styles.title} p-3`}>
            
            <button
                
                onClick={() => setIGCSEToggle(!IGCSEToggle)}
                className='btn w-100 d-flex justify-content-between align-items-center'
            
            >
                
                <span> IGCSE </span>
                <i className={`fa-solid fa-chevron-down ${styles.icon} ${IGCSEToggle ? styles.rotated : ''}`}></i>
            
            </button>
        
        </div>

        <div className={`${styles.content} ${IGCSEToggle ? styles.hidden : ''} p-4 `}>
            <p className=' lead text-muted'>Applicants must submit certificates of 8 subjects at the O-Level with a minimum grade of “C” or “4” (these may only be in the extended and not in the core system). </p>
            <p className=' lead text-muted'>Subjects must be completed in the four years before university enrollment. Applicants who have completed advanced-level subjects may be granted transfer credits.</p>
            <ul>
                <li className=' lead text-muted'>Business school: Minimum of 8 O-Level subjects, including English and Maths, with a minimum score of C.</li>
                <li className=' lead text-muted'>Biotechnology school: Minimum of 8 O-Level subjects, including English, Maths, Physics, Chemistry, and Biology, with a minimum score of C.</li>
                <li className=' lead text-muted'>Engineering and Computer Science School:  Minimum of 8 O-Level subjects including English, Maths, Physics, and Chemistry with a minimum score of C and one subject only AS or AL Math course is required with a minimum score of D.</li>
            </ul>

            <h4>Academic and Non-Academic Requirements:</h4>
            <ul>
                <li className=' lead text-muted'>An official IGCSE Certificates stamped by The British Council, Ministry of Foreign Affairs and General Examinations Department is required if the school is inside of Egypt. If the school is outside of Egypt, the certificates should be stamped by The British Council, Ministry of Foreign Affairs.</li>
                <li className=' lead text-muted'>If taken, Arabic and Religion subjects stamped by the General Examinations Department.</li>
                <li className=' lead text-muted'>Proof of 12 years of schooling for schools inside of Egypt should be stamped by the school stamp and the Educational Administration that the school follows. If the school is outside of Egypt, it should be stamped by the Egyptian Embassy in the country where the school is located and the Ministry of Foreign Affairs of the country where the school is located.</li>
                <li className=' lead text-muted'>For Grade 11 Students, they should bring أفادة التعليم الخاص باستيفاء متطلبات التعليم ما قبل الجامعي من stamped from General Department of Examinations - الإدارة العامة للإمتحانات.</li>
                <li className=' lead text-muted'>Original birth certificate (computerized). </li>
                <li className=' lead text-muted'>If taken, Arabic and Religion subjects stamped by the General Examinations Department.</li>
                <li className=' lead text-muted'>Original birth certificate (computerized). </li>
                <li className=' lead text-muted'>Copy of Egyptian national ID.</li>
                <li className=' lead text-muted'>Copy of passport (optional for Egyptians and required for non-Egyptian applicants). </li>
                <li className=' lead text-muted'>6 passport-size photos.</li>
                <li className=' lead text-muted'>Military form 2 & 7 or 6 (male only) (for Egyptians).</li>
                <li className=' lead text-muted'>For students who studied outside of Egypt, they must submit a copy of their passport and copy of their student residency during their study (موضح بها تأشيرات الدخول والخروج إقامة الطالب خلال فترة دراسته ).</li>
            </ul>

            

            <h4> For Transferred students, in addition to the above:</h4>
            <ul>
                <li className=' lead text-muted'>Original Withdrawal Letter (for private universities only).</li>
                <li className=' lead text-muted'>Course description signed and stamped from the previous university.</li>
                <li className=' lead text-muted'>Transcript stamped from the University and the Supreme Council of Universities.</li>
                <li className=' lead text-muted'>Bayan hala (بيان حالة) stamped from previous university. </li>
            </ul>


            
        </div>
        </div>

        <div className='w-75 m-auto p-2'>
        <div className={`${styles.title} p-3`}>
            
            <button
                
                onClick={() => setSTEMToggle(!STEMToggle)}
                className='btn w-100 d-flex justify-content-between align-items-center'
            
            >
                
                <span> STEM </span>
                <i className={`fa-solid fa-chevron-down ${styles.icon} ${STEMToggle ? styles.rotated : ''}`}></i>
            
            </button>
        
        </div>

        <div className={`${styles.content} ${STEMToggle ? styles.hidden : ''} p-4 `}>
            <p className=' lead text-muted'>The final grade is calculated out of 700. </p>
            <p className=' lead text-muted'>The accepted section for Engineering, ITCS, and Biotechnology schools is the scientific section (علمي), and for the School of Business Administration, the art (أدبي) or the scientific section (علمي). </p>

            <h4>For Stem 2024-2025:</h4>
            <ul>
                <li className=' lead text-muted'>Engineering: 68%</li>
                <li className=' lead text-muted'>Biotechnology: 53%</li>
                <li className=' lead text-muted'>Business: 53%</li>
                <li className=' lead text-muted'>ITCS: 60%</li>
            </ul>

            <h4>Academic and Non-Academic Requirements:</h4>
            <ul>
                <li className=' lead text-muted'>Official STEM Transcript.</li>
                <li className=' lead text-muted'>Original birth certificate (computerized). </li>
                <li className=' lead text-muted'>Copy of Egyptian national ID.</li>
                <li className=' lead text-muted'>Copy of passport (optional for Egyptians and required for non-Egyptian applicants). </li>
                <li className=' lead text-muted'>6 passport-size photos.</li>
                <li className=' lead text-muted'>Military form 2 & 7 or 6 (male only) (for Egyptians).</li>
            </ul>

            

            <h4> For Transferred students, in addition to the above:</h4>
            <ul>
                <li className=' lead text-muted'>Original Withdrawal Letter (for private universities only).</li>
                <li className=' lead text-muted'>Course description signed and stamped from the previous university.</li>
                <li className=' lead text-muted'>Transcript stamped from the University and the Supreme Council of Universities.</li>
                <li className=' lead text-muted'>Bayan hala (بيان حالة) stamped from previous university. </li>
            </ul>


            
        </div>
        </div>

        <div className='w-75 m-auto p-2'>
        <div className={`${styles.title} p-3`}>
            
            <button
                
                onClick={() => setAzharToggle(!AzharToggle)}
                className='btn w-100 d-flex justify-content-between align-items-center'
            
            >
                
                <span>Azhar </span>
                <i className={`fa-solid fa-chevron-down ${styles.icon} ${AzharToggle ? styles.rotated : ''}`}></i>
            
            </button>
        
        </div>

        <div className={`${styles.content} ${AzharToggle ? styles.hidden : ''} p-4 `}>
            <h4>Academic and Non-Academic Requirements:</h4>
            <ul>
                <li className=' lead text-muted'>Official Thanaweya Azhary Certificate.</li>
                <li className=' lead text-muted'>Original birth certificate (computerized).</li>
                <li className=' lead text-muted'>6 passport-size photos.</li>
                <li className=' lead text-muted'>Copy of Egyptian national ID.</li>
                <li className=' lead text-muted'>Copy of passport (optional for Egyptians and required for non-Egyptian applicants).</li>
                <li className=' lead text-muted'>Military form 2 & 7 or 6 (male only) (for Egyptians).</li>
            </ul>


            <h5>N.B:</h5>
            <p>For Transferred Students, in addition to the above:</p>
            <ul>
                <li className=' lead text-muted'>Original Withdrawal Letter (for private universities only).</li>
                <li className=' lead text-muted'>Course description signed and stamped from the previous university.</li>
                <li className=' lead text-muted'>Transcript stamped from the University and the Supreme Council of Universities.</li>
                <li className=' lead text-muted'>Bayan hala (بيان حالة) stamped from the previous university.</li>
            </ul>
        </div>
        </div>

        
    </section>
    

    </>
    
  )
}
