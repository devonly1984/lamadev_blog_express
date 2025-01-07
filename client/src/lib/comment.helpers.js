import axios from "axios"
import { apiUrl } from "../constants/environment"

export const fetchComments = async({postId})=>{
    const res = await axios.get(`${apiUrl}/comments/${postId}`);
    return res.data;
}