<template>
  <div >
      <b-row class="justify-content-center">
        <b-col cols="1" >ID</b-col>
        <b-col cols="3"><b-input type="text" v-model="userId"/></b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="1" >PW</b-col>
        <b-col cols="3"><b-input type="text" v-model="userPassword" /></b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="1" >USER NAME</b-col>
        <b-col cols="3"><b-input type="text" v-model="userName" /></b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col md="auto" cols="3"><b-button  variant="info" @click="validate">가입</b-button></b-col>
      </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  userId: string;
  userPassword: string;
  userName : string;

  constructor() {
    super();
    this.userId = "";
    this.userPassword = "";
    this.userName = "";

  }

  sendData(){
    return {
      userId : this.userId,
      userPw : this.userPassword,
      userName : this.userName,
    }
  }


  async validate() {

    const sendData = this.sendData();
    try{
      const { data } = await Vue.axios({
        url : "/users/join",
        method : "POST",
        data : sendData,
      })
    } catch (e) {
      console.log(e.message);
    }
    // await this.$store.dispatch('add', sendData);


  }




}
</script>

<style scoped>

</style>