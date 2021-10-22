import {createStore} from 'vuex'
import authModule from './authModule.js'

const store = createStore({
    modules : {
        authModule
    }
})

export default store