import { ADD_COUNTER, ADD_NEW } from './mutation-type'
export default {
    addcar(context, payload) {
        return new Promise((resolve, reject) => {
            let product = context.state.carList.find(item => item.iid === payload.iid)
            if (product) {
                context.commit(ADD_COUNTER, product)
                resolve('当前商品数量加1')
            } else {
                payload.count = 1
                context.commit(ADD_NEW, payload)
                resolve('添加新的商品')

            }
        })
    }
}