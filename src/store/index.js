import {createStore} from 'vuex'
import authModule from './authModule.js'
import toggleModule from './togglers.js'

const store = createStore({
    modules : {
        authModule,
        toggleModule
    }
})

export default store