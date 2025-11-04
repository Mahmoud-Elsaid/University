



import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { BannerContext } from '../../Context/BannerContext';

export default function FeesDetails() {

  const { setBanner} = useContext(BannerContext)
      
      
     
      

  const location = useLocation();

  const chosenPart = location.pathname.split('/').pop();



  const egyptianFees = [
    {images :"../../../public/images/admissons/money.JPG"},
    {images:"../../../public/images/admissons/money 2.jpg"},
    {images:"../../../public/images/admissons/money 3.jpg"},
  ]


  const internationalFees = [
    {images:"../../../public/images/admissons/inter money.webp"}
  ]


  useEffect(() => {
    setBanner(`Fees / ${chosenPart} `)    }
    , [setBanner , chosenPart]);

  return (
    <>
      {chosenPart === "EgyptianStudents" ? egyptianFees.map((image , index)=>(
        <div className=' my-4' key={index}>
          <img src={image.images} className=' w-100' alt="" />
        </div>
      )): chosenPart ==="InternationalStudents" ? internationalFees.map((image , index)=>(
        <div className=' my-4' key={index}>
          <img src={image.images} className=' w-100' alt="" />
        </div>
      )): "this item is not available right now"}
    </>
  )
}
