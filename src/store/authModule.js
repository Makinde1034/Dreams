
import api from '../adapter/api.js'
import router from '../router/index.js'

const auth = {
    namespaced : true,
    state(){
        return {
            status : "",
            loading : false,
            error_message : "",
            token : localStorage.getItem("token") || ''
        }
    },
    getters : {

    },
    actions : {
        REGISTER_USER({commit},data){
           
            return new Promise((resolve,reject)=>{
                    commit("AUTH_REQUEST")
                    api.registerUser(data).then((res)=>{
                    console.log(res.data.token)
                    const token = res.data.token
                    localStorage.setItem("token",token)
                    commit("AUTH_SUCCESS")
                    router.push('/dashboard')
                    resolve(res)  
                }).catch((err)=>{
                    reject(err)
                    // console.log(err.response.data.errors);
                    const error = err.response.data.errors
            
                    console.log(error)
                   
                    commit("AUTH_FAILURE",error);
                })
            })
          
        },
        SIGN_IN({commit},data){
            return new Promise((resolve,reject)=>{
                commit("AUTH_REQUEST")
                api.signIn(data).then((res)=>{
                    console.log(res)
                    const token = res.data.token
                    localStorage.setItem("token",token);
                    commit("AUTH_SUCCESS",token)
                    router.push('/dashboard');
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                    const error = err.response.data
                    commit("AUTH_FAILURE",error)
                    console.log(err.response)
                })
            })
        },
        LOG_OUT({commit}){
            localStorage.clear();
            router.push("/");
            commit("LOG_OUT")

        }
    },
    mutations : {
        AUTH_REQUEST(state){
            state.loading = true
        },
        AUTH_SUCCESS(state,token){
            state.loading = false
            state.status = "success",
            state.token = token
         
        },
        AUTH_FAILURE(state,payload){
            state.error_message = payload
            state.loading = false ,
            state.status = "failure"
      
        },
        LOG_OUT(state){
            state.token = ""
            state.status = ""
        }
    }
}

export default auth