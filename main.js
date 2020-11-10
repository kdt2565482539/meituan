import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

//axios
import axios from "utils/request.js"
Vue.prototype.$axios=axios;

//vuex:
import store from "store/index.js"

const app = new Vue({
	store,
    ...App
})
app.$mount()
