import Toast from './Toast'

const obj = {}
obj.install = function(Vue) {
    //1.创建组件构造器
    const toastconstruct = Vue.extend(Toast)
        //2.
    const toast = new toastconstruct()
        //3.手动挂在
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}

export default obj