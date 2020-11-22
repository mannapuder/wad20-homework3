import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Browse from "./components/Browse";
import Index from "./components/Index";
import Login from "./components/Login";
import axios from 'axios'
//import User from "./models/user";
//import currentUser from "./models/currentUser";

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
        posts: [],
        profiles: []
    },
    getters: {
        allPosts: (state) => state.posts,
        allProfiles: (state) => state.profiles
    },
    actions: {
        getPosts({ commit }) {
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
            .then(response => {
            commit('SET_POSTS', response.data) })},
        getProfiles({ commit }) {
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('SET_PROFILES', response.data) })}
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts },
        SET_PROFILES(state, profiles) {
            state.profiles = profiles }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');