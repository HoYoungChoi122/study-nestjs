<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <p>테스트</p>
      <button @click="test">값 받아오기 /</button>
      <button @click="test1">값 받아오기 test</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  async test(){
    console.log("값 보내기 TEST");
    try{
      const { data } = await Vue.axios({
        url:'/',
        method:'GET',
      })
      console.log(data);
    } catch(e){
      console.log(e.message);
    }


  }

  async test1(){
    console.log("값 보내기 TEST");
    try{
      const { data } = await Vue.axios({
        url:'/test',
        method:'GET',
      })
      console.log(data);
    } catch(e){
      console.log(e.message);
    }


  }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
