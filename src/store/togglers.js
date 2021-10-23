const togglers = {
    namespaced : true,
    state(){
        return {
            addEventModal : false
        }
    },
    getters : {

    },
    actions : {
        OPEN_EVENT_MODAL({commit}){
            commit("OPEN_MODAL");
        }
    },
    mutations : {
        OPEN_MODAL(state){
            state.addEventModal = true
        }
    }
}

export default togglers