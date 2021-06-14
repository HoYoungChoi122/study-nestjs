import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies"
// import router from '@/router';

Vue.use(Vuex)
Vue.use(VueCookies)

const cookieSet = Vue.$cookies.set;

Vue.$cookies.config('1d');

export default new Vuex.Store({
  state: {
    userToken : Vue.$cookies.get("userToken")||'',
    _id : Vue.$cookies.get("_id")||'',
    userId : Vue.$cookies.get("userId")||'',
    userName : Vue.$cookies.get("userName")||'',
    userEmail : Vue.$cookies.get("userEmail")||'',
    userMobile : Vue.$cookies.get("userMobile")||'',
    userAge : Vue.$cookies.get("userAge")||'',
  },
  mutations: {
    SET_USER_TOKEN(state,token){
        state.userToken = token;
    },
    SET_USER_ID(state,userId){
        state.userId = userId;
    },
    SET_USER_NAME(state,userName){
        state.userName = userName;
    },
    SET_USER_EMAIL(state,userEmail){
        state.userEmail = userEmail;
    },
    SET_USER_MOBILE(state,userMobile){
        state.userMobile = userMobile;
    },
    SET_USER_AGE(state,userAge){
        state.userAge = userAge;
    },
    SET_USER_OBJECT_ID(state,_id){
        state._id = _id;
    }
  },
  getters: {
      getUserToken : (state, getters, rootState) => state.userToken,
      getUserObjectId : (state) => state._id,
      getUserId : (state) => state.userId,
      getUserName : (state) => state.userName,
      getUserEmail : (state) => state.userEmail,
      getUserMobile : (state) => state.userMobile,
      getUserAge : (state) => state.userAge,
  },
  actions: {
      async join({commit},user){

          const { data } = await Vue.axios({
              url:'/users/login',
              method:'POST',
              data : user
          })

          console.log(data);


          // const token = "";
          // const userId = user.userId;
          // const userName = "";
          // const userEmail = "";
          // const userMobile = "";
          // const userAge = "";
          // const _id = "";
          //
          // try {
          //     commit('SET_USER_OBJECT_ID',_id);
          //     commit('SET_USER_AGE',userAge);
          //     commit('SET_USER_MOBILE',userMobile);
          //     commit('SET_USER_EMAIL',userEmail);
          //     commit('SET_USER_NAME',userName);
          //     commit('SET_USER_ID',userId);
          //     commit('SET_USER_TOKEN',token);
          //
          //     await cookieSet('userToken',token);
          //     await cookieSet('userId', userId);
          //     await cookieSet('userName', userName);
          //     await cookieSet('userEmail', userEmail);
          //     await cookieSet('userMobile', userMobile);
          //     await cookieSet('_id', _id);
          //
          // }catch (e){
          //     console.log("LOGIN중 에러 발생")
          //     console.log(e.message);
          // }

      }
  },
  modules: {





  }
})
