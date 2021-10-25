const togglers = {
    namespaced : true,
    state(){
        return {
            addEventModal : false,
            deleteModal : false
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
        },
        OPEN_DELETE_MODAL({commit},data){
            commit("OPEN_DELETE_MODAL")
            localStorage.setItem("data",JSON.stringify(data))
        },
        CLOSE_DELETE_MODAL({commit}){
            commit("CLOSE_DELETE_MODAL")
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
        }
    }
}

export default togglers