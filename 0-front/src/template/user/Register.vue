<template>
  <div>
  <div class="container">
    <br><h1 class="text-center">FGD ONLINE</h1>
    <hr>
    <div class="card bg-light">
      <article class="card-body mx-auto" style="max-width: 400px;">
        <h4 class="card-title mt-3 text-center">회원가입</h4>
        <p class="text-center">아래의 정보를 입력해주세요</p>
        <p class="divider-text">
        </p>
        <form>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><b-icon-person-fill/></span>
            </div>
            <input name="" class="form-control" placeholder="이름" type="text">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"> <b-icon-envelope/> </span>
            </div>
            <input name="" class="form-control" placeholder="이메일 주소" type="email">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><b-icon-phone/></span>
            </div>
            <input name="" class="form-control" placeholder="폰 번호" type="text">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><b-icon-lock-fill/></span>
            </div>
            <input class="form-control" placeholder="비밀번호" type="password">
          </div> <!-- form-group// -->
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><b-icon-shield-lock-fill/></span>
            </div>
            <input class="form-control" placeholder="비밀번호 확인" type="password">
          </div> <!-- form-group// -->
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block" @click="createUser()"> ID 생성  </button>
          </div> <!-- form-group// -->
          <p class="text-center">이미 계정이 있으신가요? <a href="/">LOG IN</a></p>
          <p @click="test">주소 테스트</p>
        </form>
      </article>
    </div> <!-- card.// -->

  </div>
  <!--container end.//-->


  </div>
</template>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Register extends Vue {
  userName: string;
  userId: string;
  userPassword: string;
  userEmail: string;
  userMobile: string;

  constructor() {
    super();
    this.userName = '';
    this.userId = '';
    this.userPassword = '';
    this.userEmail = '';
    this.userMobile = '';
  }

  async createUser(){
    this.userName = this.userName.replace(/ /g,'');
    if(this.userName.length < 2){
      this.$toast.error('이름을 입력해주세요.');
      return;
    }else if(this.userId.length < 4){
      this.$toast.error('아이디를 입력해주세요.');
      return;
    }else if(this.userPassword.length < 4){
      this.$toast.error('비밀번호를 입력해주세요.');
      return;
    }else if(this.userEmail.length < 5){
      this.$toast.error('이메일을 입력해주세요.');
      return;
    }else if(this.userMobile.length < 5){
      this.$toast.error('휴대폰 번호를 입력해주세요.');
      return;
    }

    const sendData = {
      userName : this.userName,
      userId : this.userId,
      userPassword : this.userPassword,
      userEmail : this.userEmail,
      userMobile: this.userMobile,
    }

    const { data } = await this.axios.post('/user/join', sendData);
    console.log(data);
    const { _doc } = data;
    if(_doc){
      this.$toast.success('가입이 완료되었습니다.');
      this.$router.push('/user/login');
    }
  }

  mounted(){
    console.log('start');
  }

  test(){
    new daum.Postcode({
      oncomplete: function(data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
      }
    }).open();
  }
}
</script>

<style scoped>

</style>