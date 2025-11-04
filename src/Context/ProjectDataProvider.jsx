

import React, { createContext, useContext } from 'react';
import UseProjectData from './../Components/Hooks/FetchAllData';

const ProjectDataContext = createContext();

export const ProjectDataProvider = ({ children }) => {
    const { data, isLoading, error } = UseProjectData();

    return (
        <ProjectDataContext.Provider value={{ data, isLoading, error }}>
            {children}
        </ProjectDataContext.Provider>
    );
};

export const useProjectDataContext = () => useContext(ProjectDataContext);
