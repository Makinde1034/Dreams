const BASE_URL = process.env.VUE_APP_BASE_URL
import axios from "axios";



export default {
    getHeader(){
        let header = {
            "x-access-token" : localStorage.getItem("token")
        }
        return header 
    },
    registerUser(user_details){
        return axios({url : `${BASE_URL}/sign-up`,data:user_details, method:'POST'});
    },
    signIn(user_details){
        return axios.post(`${BASE_URL}/sign-in`,user_details)
    },

    validateToken(){
        return axios.get(`${BASE_URL}/verify-token`,{headers : this.getHeader()});
    },
    addEvent(event){
        return axios.post(`${BASE_URL}/add-event`,event,{headers : this.getHeader()});
    },
    getEvent(){
        return axios.get(`${BASE_URL}/get-events`,{headers : this.getHeader()});
    },
    deleteEvent(event_id){
        // return axios.delete(`${BASE_URL}/delete-event`,event_id);
        return axios({url : `${BASE_URL}/delete-event`,data:event_id, method:'DELETE',headers:this.getHeader()});
    },
    editEvent(data){
        return axios({url :`${BASE_URL}/edit-event`,data:data, method:"PUT"})
    }
}