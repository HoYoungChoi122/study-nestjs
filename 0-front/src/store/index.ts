import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies"
import createPersistedState from 'vuex-persistedstate'
import router from '@/router';

Vue.use(Vuex)
Vue.use(VueCookies)

const cookieSet = Vue.$cookies.set;

Vue.$cookies.config('1d');

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        isLogin: false,
        accessToken: null,
        _id: null,
        userId: null,
        userName: null,
        userEmail: null,
        userMobile: null,
    },
    mutations: {
        login (state, {token, _id, userId, userName, userEmail, userMobile}) {
            state.isLogin = true;
            state._id = _id;
            state.accessToken = token;
            state.userId = userId;
            state.userEmail = userEmail;
            state.userMobile = userMobile;
            state.userName = userName;
        },
        logout (state) {
            state.isLogin = false;
            state._id = null;
            state.accessToken = null;
            state.userId = null;
            state.userEmail = null;
            state.userMobile = null;
            state.userName = null;
        }
    },
    getters: {
        isLogin: (state) => {
            return state.isLogin
        },
        getAccessToken : (state) => {
            return state.accessToken
        },
        getUserObjectId : (state) => state._id,
        getUserId : (state) => state.userId,
        getUserName : (state) => state.userName,
        getUserEmail : (state) => state.userEmail,
        getUserMobile : (state) => state.userMobile,
    },
    actions: {
        async login({commit}, user){
            try{
                const { data } = await Vue.axios({
                    url:'/user/login',
                    method:'POST',
                    data : user
                })
                const {result, token, _id, userId, userName, userEmail, userMobile, error} = data;
                if(result && data.token) {
                    commit('login', {token, _id, userId, userName, userEmail, userMobile});
                    await router.push('/project/list');
                }
            } catch (e) {
                console.log(e);
            }
        },
        async logout ({commit}) {
            commit('logout');
            await router.push('/');
        }
    },
    modules: {},
});
