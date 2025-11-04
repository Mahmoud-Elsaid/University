import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BannerContext } from '../../../../Context/BannerContext';
import { useProjectDataContext } from '../../../../Context/ProjectDataProvider';

export default function UniversityDoctorsInfo() {
  const { doctorName } = useParams();
  const displayName = doctorName.replace(/_/g, ' ');

  const { setBanner } = useContext(BannerContext);
  const { data, isLoading, error } = useProjectDataContext();

  // جلب بيانات الدكتور من context
  const doctorInfo = data?.leadership?.find(doc => doc.name === displayName);

  useEffect(() => {
    if (doctorInfo) {
      setBanner(`About / Leadership / ${doctorInfo.name}`);
    }
  }, [setBanner, doctorInfo]);

  if (isLoading) return (
    <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
      <h2>Loading...</h2>
    </div>
  );

  if (error) return <p>Something went wrong!</p>;
  if (!doctorInfo) return <p>No data found!</p>;

  return (
    <div className='row'>

      <div className='col-md-8 pt-5'>
        <div className='doctorInfoItem py-5 position-relative' style={{ height: "100%" }}>
          <div className='doctorInfoItemChild p-3 position-absolute bottom-0 w-100' style={{ height: "50%" }}>
            <h2>{doctorInfo.name}</h2>
            <h3 className='px-3'>{doctorInfo.position}</h3>
          </div>
        </div>
      </div>

      <div className='col-md-4'>
        <div className='img-item' style={{ height: "100%" }}>
          <div className='img-frame w-100 text-center' style={{ height: "350px" }}>
            <img src={`../../../../${doctorInfo.img}`} className='w-100' style={{ height: "100%" }} alt={doctorInfo.name} />
          </div>
        </div>
      </div>

      <div className='col-md-12 doctorContactInfo p-3'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='officeInfo'>
              <h3 className='px-3'>Office: <h4 className='px-3'>{doctorInfo.office}</h4></h3>
            </div>
          </div>

          <div className='col-md-5 pt-3'>
            <div className="doctor-contact-icons d-flex justify-content-center align-items-center">
              <div className="doctor-contact-icons-item">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="doctor-contact-icons-item">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="doctor-contact-icons-item">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="doctor-contact-icons-item">
                <i className="fa-brands fa-github"></i>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='cv'>
        <h3>Biography:</h3>
        <p className='text-muted mx-3'>{doctorInfo.bio}</p>
      </div>

    </div>
  );
}













// import React, { useContext, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { BannerContext } from '../../../../Context/BannerContext';
// import { useProjectDataContext } from '../../../../Context/ProjectDataProvider';

// export default function UniversityDoctorsInfo() {
//   const { doctorName } = useParams();
//   const displayName = doctorName.replace(/_/g, ' ');

//   const { setBanner } = useContext(BannerContext);
//   const { data, isLoading, error } = useProjectDataContext();

//   const doctorInfo = data?.leadership?.find(doc => doc.name === displayName);

//   useEffect(() => {
//     if (doctorInfo) {
//       setBanner(`About / Leadership / ${doctorInfo.name}`);
//     }
//   }, [setBanner, doctorInfo]);

//   if (isLoading) return (
//     <div className="w-100 d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
//       <h2>Loading...</h2>
//     </div>
//   );

//   if (error) return <p>Something went wrong!</p>;
//   if (!doctorInfo) return <p>No data found!</p>;

//   console.log(doctorInfo?.img)
//   return (
//     <div className='row g-4'>

//       {/* Left: Doctor Info */}
//       <div className='col-md-8 pt-4'>
//         <div className='doctorInfoItem py-4 position-relative border rounded p-3'>
//           <h2>{doctorInfo.name}</h2>
//           <h4 className='text-muted'>{doctorInfo.position}</h4>
//           <div className='mt-3'>
//             <strong>Office:</strong> {doctorInfo.office}
//           </div>
//         </div>
//       </div>

//       {/* Right: Doctor Image */}
//       <div className='col-md-4'>
//         <div className='img-frame w-100 text-center border rounded p-2' style={{ height: '100%' }}>
//           <img src={`../../../../${doctorInfo.img}`} className='w-100 h-100' style={{ objectFit: 'cover' }} alt={doctorInfo.name} />
//         </div>
//       </div>

//       {/* Biography */}
//       <div className='col-12 mt-4'>
//         <div className='cv border rounded p-3'>
//           <h3>Biography:</h3>
//           <p className='text-muted'>{doctorInfo.bio}</p>
//         </div>
//       </div>

//     </div>
//   );
// }
