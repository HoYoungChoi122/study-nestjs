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
        <b-col md="auto" cols="3"><b-button  variant="dark" @click="$router.push('/join') ">회원가입</b-button>&nbsp;<b-button  variant="info" @click="validate">로그인</b-button></b-col>
      </b-row>
    <button @click="indexBack">backend conntect test</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {

  userId: string;
  userPassword: string;

  constructor() {
    super();
    this.userId = "";
    this.userPassword = "";

  }

  sendData(){
    return {
      userId : this.userId,
      userPw : this.userPassword,
    }
  }

  async indexBack(){
    const {data} = await Vue.axios({
      url : '/index',
      method : "GET"
    })

    console.log(data);
  }


  async validate() {

    const sendData = this.sendData();

    await this.$store.dispatch('login', sendData);


  }



}
</script>

<style scoped>

</style>