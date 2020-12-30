import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
    //使用自己封装的toast插件
Vue.use(toast)
    //使用fastclick库
FastClick.attach(document.body)
    //使用vue-lazy
Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/placeholder.png')
})
new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')