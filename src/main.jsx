import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerContextProvider from './Context/BannerContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProjectDataProvider } from './Context/ProjectDataProvider.jsx';


const queryClient =  new QueryClient();

createRoot(document.getElementById('root')).render(

    <QueryClientProvider client={queryClient}>
            <ProjectDataProvider>    
                <BannerContextProvider>
                    <App />
                </BannerContextProvider>
            </ProjectDataProvider>
    </QueryClientProvider>
    
)
