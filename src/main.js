import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Browse from "./components/Browse";
import Index from "./components/Index";
import Login from "./components/Login";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', name:"login", component: Login},
    {path: '/browse', component: Browse},
    {path: '/index', component: Index}
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        showprofile:false
    },
    mutations: {
        toggleshow: (state, show) => state.showprofile = show
    },
    getters: {
        getshow: (state) => () => {return state.showprofile}
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');