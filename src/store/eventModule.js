
import api from "../adapter/api"

const event = {
    namespaced : true,
    state(){
        return{
            loading : false,
            events : [],
            status : "",
            
        }
    },
    getters:{

    },
    actions:{
        ADD_EVENT({commit,dispatch},data){
            return new Promise((resolve,reject)=>{
                commit("ADD_EVENT_REQUEST")
                api.addEvent(data).then((res)=>{
                    console.log(res);
                    commit("ADD_EVENT_SUCCESS")
                    dispatch("GET_EVENTS")
                    resolve(res);
                }).catch((err)=>{
                    console.log(err)
                    commit("ADD_EVENT_FAILURE")
                    reject(err);
                })
            })
        },
        GET_EVENTS({commit}){
            return new Promise((resolve,reject)=>{
                api.getEvent().then((res)=>{
                    console.log(res.data.events);
                    
                    resolve(res)
                    commit("GET_EVENTS_SUCCESS",res.data.events)
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        DELETE_EVENT({commit,dispatch}){
            return new Promise((resolve,reject)=>{
                const data = JSON.parse( localStorage.getItem("data"))
                console.log(data)
                api.deleteEvent(data).then((res)=>{
                    resolve(res);
                    console.log(res);
                    commit("")
                    dispatch("GET_EVENTS")
                    dispatch("toggleModule/CLOSE_DELETE_MODAL",null,{root:true}) 
                }).catch(err =>{
                    reject(err)
                })
            })
        },
        EDIT_EVENT({dispatch},newData){
            return new Promise((resolve,reject)=>{
                const event_id = localStorage.getItem("edit_id");
                const data = {
                    title : newData.title,
                    details : newData.details,
                    event_id : event_id
                }
                api.editEvent(data).then((res)=>{
                    console.log(res)
                    resolve(res)
                    dispatch("GET_EVENTS");
                }).catch((err)=>{
                    console.log(err);
                    reject(err)
                })
            })
        }
    },
    mutations:{
        ADD_EVENT_REQUEST(state){
            state.loading = true,
            state.status = ""
        },
        ADD_EVENT_SUCCESS(state){
            state.loading = false
            state.status = "Event successfully added"
        },
        ADD_EVENT_FAILURE(state){
            state.loading = false
        },
        // GET
        GET_EVENTS_SUCCESS(state,payload){
            state.events = payload
        }
        // edit event 

    }
}

export default event 