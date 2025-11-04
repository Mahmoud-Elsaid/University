import { createContext, useState } from "react";


export  const BannerContext  = createContext();

export default function BannerContextProvider({children}){

    const [Banner, setBanner] = useState('');
    return (
        <BannerContext.Provider value={{Banner , setBanner}}>
            {children}
        </BannerContext.Provider>
    )
}