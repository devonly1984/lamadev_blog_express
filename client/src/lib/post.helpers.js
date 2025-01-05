import axios from 'axios';
import { apiUrl } from '../constants/environment';


export const fetchPosts = async()=>{
    const res = await axios.get(`${apiUrl}/posts`);
    return res.data;
}
