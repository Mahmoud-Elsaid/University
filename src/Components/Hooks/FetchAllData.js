




import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function UseProjectData() {
    return useQuery({
        queryKey: ['getBasicData'],
        queryFn: async () => {
            const { data } = await axios.get(`https://raw.githubusercontent.com/Mahmoud-Elsaid/json-server/refs/heads/main/db.json`);
            return data;
        },
    });
}

