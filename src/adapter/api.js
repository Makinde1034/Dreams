// const BASE_URL = process.env.VUE_APP_BASE_URL
import axios from "axios";



export default {
    getHeader(){
        let header = {
            "x-access-token" : localStorage.getItem("token")
        }
        return header 
    },
    registerUser(user_details){
        return axios({url : `https://dreams-apl.herokuapp.com/sign-up`,data:user_details, method:'POST'});
    },
    validateToken(){
        return axios.get("https://dreams-apl.herokuapp.com/verify-token",{headers : this.getHeader()});
    }
}