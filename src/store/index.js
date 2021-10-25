import {createStore} from 'vuex'
import authModule from './authModule.js'
import toggleModule from './togglers.js'
import eventModule from './eventModule.js'

const store = createStore({
    modules : {
        authModule,
        toggleModule,
        eventModule
    }
})

export default store