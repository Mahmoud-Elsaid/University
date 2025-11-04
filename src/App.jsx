
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/about/About';
import UniversityBaseData from './Components/about/UniversityBaseData/UniversityBaseData';
import OurFaculties from './Components/Faculties/OurFaculties/OurFaculties';
import FacultyInfo from './Components/Faculties/OurFaculties/FacultyInfo/FacultyInfo';
import FacultyInfoData from './Components/Faculties/OurFaculties/FacultyInfo/FacultyInfoData/FacultyInfoData';
import FacultyInfoPermssions from './Components/Faculties/OurFaculties/FacultyInfo/FacultyInfoPermssions/FacultyInfoPermssions';
import Sectors from './Components/Sectors/Sectors'
import SectorsData from './Components/Sectors/SectorsData/SectorsData';
import UniversityDoctors from './Components/about/UniversityDoctors/UniversityDoctors';
import UniversityDoctorsInfo from './Components/about/UniversityDoctors/UniversityDoctorsInfo/UniversityDoctorsInfo';
import DepartmentInfo from './Components/Faculties/OurFaculties/FacultyInfo/FacultyInfoData/DepartmentInfo/DepartmentInfo';
import News from './Components/News/News';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import Admissions from './Components/Admissions/Admissions';
import Fees from './Components/Fees/Fees';
import FeesDetails from './Components/FeesDetails/FeesDetails';

function App() {

  let routers = createBrowserRouter([
    {path:"/" ,element:<Layout/> ,children:[

        { index: true, element:  <Home/> },
        {path:"/home" , element: <Home/>},
        {path:"/faculties" , element: <OurFaculties/>},
        {path:"/news" , element: <News/>},
        {path:"/admissions" , element: <Admissions/>},
        {path:"/news/:newsId" , element: <NewsDetails/>},
        {path:"/faculties/:facultyId/:departName" , element: <DepartmentInfo/>},
        
        {
          path: "about",
          element: <About />, 
          children: [
            { path: "history", element: <UniversityBaseData /> }, 
            { path: "goals", element: <UniversityBaseData /> }, 
            { path: "vision", element: <UniversityBaseData /> }, 
            { path: "leadership", element: <UniversityDoctors /> }, 
            { path: "doctors/:doctorName", element: <UniversityDoctorsInfo /> }, 
            
          ],
        },

        {path:"/fees" , element: <Fees/>,
          children:[
            {path:"EgyptianStudents" , element:<FeesDetails/>},
            {path:"InternationalStudents" , element:<FeesDetails/>}
          ]
        },


        {
          path: "faculties/:facultyId",
          element: <FacultyInfo/>, // wraps all about-related routes
          children: [
            { path: "doctors", element: <FacultyInfoData /> },
            { path: "doctors", element: <FacultyInfoData /> },
            { path: "departments", element: <FacultyInfoData /> },
            { path: "admission", element: <FacultyInfoPermssions /> },
            { path: "whyus", element: <FacultyInfoPermssions /> },
            
          ],
        },

        {
          path: "sectors",
          element: <Sectors/>, // wraps all about-related routes
          children: [
            { path: "Engineering-sector", element: <SectorsData /> },
            { path: "Humanities-sector", element: <SectorsData /> },
            { path: "Medical-sector", element: <SectorsData /> },
            
          ],
        },

    ]}
])

  return  (<RouterProvider  router={routers} ></RouterProvider>)

}

export default App
