import { ADD_COUNTER, ADD_NEW } from './mutation-type'
export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_NEW](state, payload) {
        payload.isactive = false
        state.carList.push(payload)

    }
}