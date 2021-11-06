const togglers = {
    namespaced : true,
    state(){
        return {
            addEventModal : false,
            deleteModal : false,
            editModal : false,
            mobileModal : false,
            // previous info to be edited
            prevInfo : {
                title :"",
                details : ""
            }
        }
    },
    getters : {

    },
    actions : {
        OPEN_EVENT_MODAL({commit}){
            commit("OPEN_MODAL");
        },
        CLOSE_EVENT_MODAL({commit}){
            commit("CLOSE_MODAL");
            commit("CLOSE_DELETE_MODAL");
            commit("CLOSE_EDIT_MODAL");
            commit("CLOSE_MOBILE_MODAL");
        },
        // delete
        OPEN_DELETE_MODAL({commit},data){
            commit("OPEN_DELETE_MODAL");
            localStorage.setItem("data",JSON.stringify(data))
        },
        CLOSE_DELETE_MODAL({commit}){
            commit("CLOSE_DELETE_MODAL");
        },
        // edit
        OPEN_EDIT_MODAL({commit},data){
            commit("OPEN_EDIT_MODAL",data);
            localStorage.setItem("edit_id",data._id)
        },
        // mobile modal
        OPEN_MOBILE_MODAL({commit}){
            commit("OPEN_MOBILE_MODAL");
            
            
        },
        CLOSE_MOBILE_MODAL({commit}){
            commit("CLOSE_MOBILE_MODAL")
        }
    },
    mutations : {
        OPEN_MODAL(state){
            state.addEventModal = true
        },
        CLOSE_MODAL(state){
            state.addEventModal = false
        },
        // delete modal
        OPEN_DELETE_MODAL(state){
            state.deleteModal = true
        },
        CLOSE_DELETE_MODAL(state){
            state.deleteModal = false
        },
        // EDIT MODAL
        OPEN_EDIT_MODAL(state,{title,details}){
            state.editModal = true
            state.prevInfo.title = title,
            state.prevInfo.details = details
        },
        CLOSE_EDIT_MODAL(state){
            state.editModal =false
        },
        // mobile modal
        OPEN_MOBILE_MODAL(state){
            state.mobileModal = true
        },
        CLOSE_MOBILE_MODAL(state){
            state.mobileModal = false
        }
    }
}

export default togglers