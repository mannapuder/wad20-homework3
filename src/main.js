import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Browse from "./components/Browse";
import Index from "./components/Index";
import Login from "./components/Login";
import axios from 'axios'

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
        profiles: [],
        user: {},
        showDropdown: false
    },
    getters: {
        allPosts: (state) => state.posts,
        allProfiles: (state) => state.profiles,
        currentUser: (state) => state.user,
        dropdown: (state) => state.showDropdown
    },
    actions: {
        getPosts({ commit }) {
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
            .then(response => {
            commit('SET_POSTS', response.data) })},
        getProfiles({ commit }) {
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('SET_PROFILES', response.data) })},
        getUser({ commit }) {
            axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
                .then(response => {
                    commit('SET_USER', response.data) })}
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts },
        SET_PROFILES(state, profiles) {
            state.profiles = profiles },
        SET_USER(state, user){
            state.user = user
        },
        SET_DROPDOWN(state, show){
            state.showDropdown = show
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');