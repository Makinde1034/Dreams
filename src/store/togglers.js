const togglers = {
    namespaced : true,
    state(){
        return {
            addEventModal : false,
            deleteModal : false,
            editModal : false
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
        OPEN_EDIT_MODAL({commit}){
            commit("OPEN_EDIT_MODAL");
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
        OPEN_EDIT_MODAL(state){
            state.editModal = true
        },
        CLOSE_EDIT_MODAL(state){
            state.editModal =false
        }
    }
}

export default togglers