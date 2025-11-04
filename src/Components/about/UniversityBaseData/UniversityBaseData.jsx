
import React, { useContext, useEffect } from 'react';
import { BannerContext } from '../../../Context/BannerContext';
import {  useLocation } from 'react-router-dom';
import { useProjectDataContext } from '../../../Context/ProjectDataProvider';


export default function UniversityBaseData() {
    
        const { setBanner } = useContext(BannerContext);
        const location = useLocation();
        const chosenPart = location.pathname.split('/').pop();


        const { data, isLoading, error } = useProjectDataContext();
        
        const universityData = data?.about?.find(item => item.name === chosenPart);



        useEffect(() => {
            setBanner(`About / ${chosenPart}`);
        }, [setBanner, chosenPart]);

        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Something went wrong!</p>;

        return (
            <>
                {isLoading ? <div className="  w-100 d-flex justify-content-center align-items-center">
                    
                    <h2>Loading</h2>
                    </div>
                    : <div>
                        <h2 className=' fw-bolder text-uppercase my-4'>{universityData.disc}</h2>
                        
                        <ul>
                            {universityData.info?.split('\n').map((line, index) => (
                                <li  className=' mainListContent my-5 text-muted' key={index}>{line}</li>
                            ))}
                        </ul>
    
                    </div>} 
            </>
        );
}
