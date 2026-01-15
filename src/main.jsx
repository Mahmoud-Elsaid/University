import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProjectDataProvider } from './Context/ProjectDataProvider.jsx';


const queryClient =  new QueryClient();

// Force remove dark class if it exists from previous session
document.documentElement.classList.remove('dark');

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <ProjectDataProvider>
            <App />
        </ProjectDataProvider>
    </QueryClientProvider>
)
