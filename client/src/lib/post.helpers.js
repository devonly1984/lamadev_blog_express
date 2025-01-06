import axios from 'axios';
import { apiUrl } from '../constants/environment';


export const fetchPosts = async(pageParam)=>{
    const res = await axios.get(`${apiUrl}/posts`, {
      params: {
        page: pageParam,
        limit: 2
      },
    });
    return res.data;
}
