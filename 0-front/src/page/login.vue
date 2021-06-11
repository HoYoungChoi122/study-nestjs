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
        <b-col md="auto" cols="3"><b-button  variant="info" @click="validate">로그인</b-button></b-col>
      </b-row>
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
      userPassword : this.userPassword,
    }
  }


  async validate() {

    const sendData = this.sendData();

    await this.$store.dispatch('login', sendData);
    console.log('=====================')
    console.log(this.$store.getters.getUserId);


  }






}
</script>

<style scoped>

</style>