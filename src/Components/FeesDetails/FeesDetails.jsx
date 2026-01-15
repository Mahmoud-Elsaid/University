


import React from 'react';
import { useLocation } from 'react-router-dom';

export default function FeesDetails() {
  const location = useLocation();
  const chosenPart = location.pathname.split('/').pop();

  const egyptianFees = [
    { images: "/images/admissons/money.JPG" },
    { images: "/images/admissons/money 2.jpg" },
    { images: "/images/admissons/money 3.jpg" },
  ];

  const internationalFees = [
    { images: "/images/admissons/inter money.webp" }
  ];

  const data = chosenPart === "EgyptianStudents" ? egyptianFees : 
               chosenPart === "InternationalStudents" ? internationalFees : null;

  if (!data) return <p className="text-center p-10 font-bold text-gray-500">المحتوى غير متاح حالياً.</p>;

  return (
    <div className="animate-fadeIn space-y-8">
      {data.map((item, index) => (
        <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow" key={index}>
          <img src={item.images} className="w-full h-auto object-contain" alt="Fees Details" />
        </div>
      ))}
    </div>
  );
}
