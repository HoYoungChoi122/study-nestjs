<template>
  <div>
    <div class="container">
      <br><h1 class="text-center">FGD ONLINE</h1>
      <hr>
      <div class="card bg-light">
        <article class="card-body mx-auto" style="max-width: 400px;">
          <h4 class="card-title mt-3 text-center">회원가입</h4>

          <p class="divider-text">
          </p>
          <form>
            <h5 class="card-title mt-3 text-center ">ID / PW</h5>

            <!-- 아이디 입력 -->
            <div class="form-group input-group form_wd80">
              <div class="input-group-prepend">
                <span class="input-group-text "><b-icon-person-fill :class="{'text-danger': (!isAbleId || !isRegId ) , 'text-info': okId }" /></span>
              </div>
              <input  v-on:change="idCheck" :class="{'text-danger': !isAbleId }" v-model="userId" class="form-control " placeholder="아이디" type="text">
            </div>
            <p class="input-group input_error" v-if="!isAbleId" >이미 가입한 ID 입니다</p>
            <p class="input-group input_error" v-if="!isRegId" >숫자/영문 각 1개 이상 조합( 4~20자 )</p>
            <!--아이디 끝-->

            <!-- 비밀번호 입력-->
            <div class="form-group input-group form_wd80">
              <div class="input-group-prepend">
                <span class="input-group-text"><b-icon-lock-fill :class="{'text-danger': !isEqualsPw || !isAblePw  , 'text-info':okPw}" /></span>
              </div>
              <input v-on:change="pwCheck" v-model="userPassword"  class="form-control " :class="{'text-danger': !isEqualsPw , 'text-danger': !isAblePw}" placeholder="비밀번호" type="password">
            </div>
            <p class="input-group input_error" v-if="!isAblePw" >숫자/영문/특수문자 각 1개 이상 조합( 8~16자 )</p>
            <!--비밀번호 끝 -->

            <!--비밀번호 확인 -->
            <div class="form-group input-group form_wd80">
              <div class="input-group-prepend">
                <span class="input-group-text"><b-icon-shield-lock-fill :class="{'text-danger': !isEqualsPw  , 'text-info':okConfirmPw}" /></span>
              </div>
              <input v-model="userConfirmPassword" v-on:change="pwEqualsCheck" :class="{'text-danger': !isEqualsPw }" class="form-control " placeholder="비밀번호 확인" type="password">
            </div>
            <p class="input-group input_error" v-if="!isEqualsPw" >비밀번호가 다릅니다.</p>
            <!--비밀번호 확인 끝 -->

            <br>
            <!--이름 입력-->
            <h5 class="card-title mt-3 text-center">USER INFO</h5>
            <div class="form-group input-group form_wd80">
              <div class="input-group-prepend">
                <span class="input-group-text"><b-icon-person :class="{'text-danger': !isAbleName  , 'text-info':okName}" /></span>
              </div>
              <input v-model="userName" v-on:change="nameCheck" class="form-control " placeholder="이름" type="text">
            </div>
            <p class="input-group input_error" v-if="!isAbleName" >이름을 확인해주세요</p>
            <!--이름 끝 -->

            <!--이메일주소 입력-->
            <div class="form-group input-group form_wd80">
              <div class="input-group-prepend">
                <span class="input-group-text"> <b-icon-envelope :class="{'text-danger': (!isAbleEmail || !isRegEmail ) , 'text-info': okEmail }"/> </span>
              </div>
              <input v-model="userEmail" v-on:change="emailCheck" :class="{'text-danger': !isAbleEmail }" class="form-control " placeholder="이메일 주소" type="email">
            </div>
            <p class="input-group input_error" v-if="!isAbleEmail" >이미 가입한 이메일 입니다</p>
            <p class="input-group input_error" v-if="!isRegEmail" >이메일 형식을 확인해주세요</p>
            <!--이메일주소 끝 -->

            <!--폰번호 입력 -->
            <div class="form-group input-group form_wd80">
              <div class="input-group-prepend">
                <span class="input-group-text"><b-icon-phone :class="{'text-danger': (!isAblePhone || !isRegPhoneNumber ) , 'text-info': okPhone }" /></span>
              </div>
              <input v-model="userPhoneNumber"  :class="{'text-danger': !isAblePhone }" @change="phoneNUmberCheck" v-on:keyup="phoneInput_Hyphen" class="form-control " placeholder="폰 번호" type="text">
            </div>
            <p class="input-group input_error" v-if="!isAblePhone" >이미 가입한 폰번호 입니다</p>
            <p class="input-group input_error" v-if="!isRegPhoneNumber" >폰번호를 확인해주세요</p>
            <!--폰번호 끝 -->

            <!--주소입력 -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><b-icon-house :class="{'text-danger': !isAbleAddress  , 'text-info': okAddress }" /></span>
              </div>
              <input style="cursor: pointer" readonly :class="{'text-danger': !isAbleAddress }" v-model="userAddress" class="form-control" placeholder="주소입력(클릭)" type="text" @click="$refs['my-modal'].show()">
            </div>
            <p class="input-group input_error" v-if="!isAbleAddress" >집 주소를 입력해주세요</p>
            <!--주소검색( 다음 API 사용 )  끝 -->

            <!--주소 상세 입력  -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><b-icon-house-door :class="{'text-danger': !isAbleDetailAddress  , 'text-info': okDetailAddress }" /></span>
              </div>
              <input v-model="userDetailAddress"  :class="{'text-danger': !isAbleDetailAddress }"  class="form-control" @change="addressDetailCheck" placeholder="상세주소입력" type="message">
            </div>
            <p class="input-group input_error" v-if="!isAbleDetailAddress" >상세주소를 입력해주세요</p>
            <!--주소 상세 끝 -->

            <div class="form-group">
              <button type="button" class="btn btn-primary btn-block" @click="createUser()"> ID 생성  </button>
            </div> <!-- 계정 생성 -->
            <p class="text-center">이미 계정이 있으신가요? <a href="/">LOG IN</a></p>
            <p class="text-center" @click="test">test용( 값 채우기 - test 후 db에서 삭제 )</p>
          </form>
        </article>
        <b-modal v-show="!userAddress" ref="my-modal"  hide-footer title="주소 검색">
          <div class="d-block text-center">
            <VueDaumPostcode @complete="addressComplete" />
          </div>
        </b-modal>

      </div> <!-- card.// -->
    </div>
    <!--container end.//-->



  </div>
</template>
<script lang="ts">
import { Component, Vue  } from "vue-property-decorator";
import {VueDaumPostcode} from "vue-daum-postcode";

@Component({
  components:{
    VueDaumPostcode
  }
})

export default class Register extends Vue {

  $refs!: { [key:string]: any }

  //user id, pw
  userId: string;
  userPassword: string;
  userConfirmPassword : string;

  //user info
  userName: string;
  userEmail: string;
  userPhoneNumber: string;
  userAddress : string;
  userDetailAddress : string;
  userFullAddress : string;

  //확인 여부
  isAbleId : boolean;
  isAblePw : boolean;
  isAbleName : boolean;
  isAbleEmail : boolean;
  isAblePhone : boolean;
  isAbleAddress : boolean;
  isAbleDetailAddress : boolean;

  isEqualsPw : boolean;
  isRegId : boolean;
  isRegEmail : boolean;
  isRegPhoneNumber : boolean;

  okId : boolean;
  okPw : boolean;
  okEmail : boolean;
  okConfirmPw : boolean;
  okName : boolean;
  okPhone : boolean;
  okAddress : boolean;
  okDetailAddress : boolean;



  constructor() {
    super();
    this.userId = "";
    this.userPassword = "";
    this.userConfirmPassword = "";

    this.userName = "";
    this.userEmail = "";
    this.userPhoneNumber = "";
    this.userAddress = "";
    this.userDetailAddress = "";
    this.userFullAddress = "";

    this.isAbleId = true;
    this.isAblePw = true;
    this.isAbleEmail = true;
    this.isAblePhone = true;
    this.isAbleName = true;
    this.isAbleAddress = true;
    this.isAbleDetailAddress = true;

    this.isRegId = true;
    this.isEqualsPw = true;
    this.isRegEmail = true;
    this.isRegPhoneNumber = true;

    this.okId = false;
    this.okPw = false;
    this.okConfirmPw = false;
    this.okName = false;
    this.okPhone = false;
    this.okEmail = false;
    this.okAddress = false;
    this.okDetailAddress = false;

  }

  createSendData(){
    return {
      userId: this.userId,
      userPassword: this.userPassword,
      userName: this.userName,
      userEmail: this.userEmail,
      userPhoneNumber: this.userPhoneNumber,
      userFullAddress: this.userAddress+" "+this.userDetailAddress ,
    }
  };

  async validate(){

    if(!this.okId) {
      return {
        result : false,
        message : "ID를 확인해주세요"
      };
    }else if(!this.okPw) {
      return {
        result : false,
        message : "패스워드를 확인해주세요"
      };
    }else if(!this.okConfirmPw){
      return {
        result : false,
        message : "패스워드 확인을 확인하세요"
      };
    }else if(!this.okName){
      return {
        result : false,
        message : "이름을 확인해주세요"
      };
    }else if(!this.okEmail){
      return {
        result : false,
        message : "이메일을 확인해주세요"
      };
    }else if(!this.okPhone){
      return {
        result : false,
        message : "폰번호를 확인해주세요"
      };
    }else if(!this.okAddress){
      return {
        result : false,
        message : "주소를 확인해주세요"
      };
    }else if(!this.okDetailAddress){
      return {
        result : false,
        message : "상세주소를 확인해주세요"
      };
    }else{
      return {
        result : true,
        message : '회원가입 성공'
      };

    }
  }

  async createUser(){
    const {result,message} = await this.validate();

    if(result){
      const sendData = this.createSendData();

      const { data } = await this.axios.post('/user/register', sendData);

      if(data.result){
        await this.$router.push('/user/login');
      }

    }else{
      this.$bvModal.msgBoxOk(message)
          .then(value => {
            return false;
          })
    }

  }

  async idCheck(){
    //공백제거
    if(this.userId){
      this.userId = this.userId.trim();

      const sendData = {
        userId : this.userId
      }

      // nullCheck , 정규 표현석 reg test  처리
      const { data } = await Vue.axios({
        url:'/user/idCheck',
        method:'POST',
        data : sendData
      })

      const idRegCheck = /^[a-z0-9]{4,20}$/.test(this.userId);
      if(!data.isRegId || !idRegCheck ){
        this.okId = false;
        this.isRegId = false;
        // this.$bvModal.msgBoxOk('영문자와 숫자를 포함하여 4~20자로 해주세요').then();

      }else{
        data.isAbleId ? this.isAbleId = true : this.isAbleId = false;
        this.isRegId = true;
        this.okId = data.isAbleId;

      }
    }
  }

  async pwCheck(){
    if(this.userPassword){
      const pwRegCheck = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/.test(this.userPassword);

      const sendData = {
        userPw : this.userPassword
      }

      const { data } = await Vue.axios({
        url:'/user/pwCheck',
        method:'POST',
        data : sendData
      })

      if(!pwRegCheck && !data.isRegPw ){
        this.isAblePw = false;
      }else{
        this.isAblePw = true;
        this.okPw = true;
      }
    }

  }

  async pwEqualsCheck(){

    if(this.userConfirmPassword){
      const sendData = {
        userPw : this.userPassword,
        userConfirmPassword : this.userConfirmPassword
      }

      const { data } = await Vue.axios({
        url:'/user/pwEqualCheck',
        method:'POST',
        data : sendData
      })

      if( this.userPassword !== this.userConfirmPassword || !data.isEqualPw){
        this.okConfirmPw = false;
        this.isEqualsPw = false;
      }else{
        this.okConfirmPw = true;
        this.isEqualsPw = true;
      }
    }

  }

  async nameCheck(){

    if(this.userName){
      const isRegName = /^[가-힣]{2,4}$/.test(this.userName);

      const sendData = {
        userName : this.userName,
      }

      const { data } = await Vue.axios({
        url:'/user/nameCheck',
        method:'POST',
        data : sendData
      })

      if(!isRegName || !data.isRegName){
        //경고 메세지
        this.okName = false;
        this.isAbleName = false;
        return false;
      }else{
        //ok
        this.isAbleName = true;
        this.okName = true;
        return true;
      }
    }
  }

  async emailCheck(){

    //공백제거
    if(this.userEmail){

      const sendData = {
        userEmail : this.userEmail
      }

      const emailRegCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(this.userEmail)

      // nullCheck , 정규 표현석 reg test  처리
      const { data } = await Vue.axios({
        url:'/user/emailCheck',
        method:'POST',
        data : sendData
      })

      if(!emailRegCheck || !data.isRegEmail){
        this.okEmail = false;
        this.isRegEmail = false;
        // this.$bvModal.msgBoxOk('영문자와 숫자를 포함하여 4~20자로 해주세요').then();

      }else{
        data.isAbleEmail ? this.isAbleEmail = true : this.isAbleEmail = false;
        this.isRegEmail = true;
        this.okEmail = data.isAbleEmail;

      }
    }

  }

  async addressDetailCheck(){
    if(!this.userDetailAddress.trim()){
      this.isAbleDetailAddress = false;
      this.okDetailAddress = false;
    }else{
      this.isAbleDetailAddress = true;
      this.okDetailAddress = true;
    }
  }

  async phoneNUmberCheck(){
    //공백제거
    if(this.userPhoneNumber){

      const sendData = {
        userPhoneNumber : this.userPhoneNumber
      }

      const phoneRegCheck = /^\d{3}-\d{3,4}-\d{4}$/.test(this.userPhoneNumber)

      // nullCheck , 정규 표현석 reg test  처리
      const { data } = await Vue.axios({
        url:'/user/phoneNumberCheck',
        method:'POST',
        data : sendData
      })

      if(!phoneRegCheck || !data.isRegPhoneNumber){
        this.okPhone = false;
        this.isRegPhoneNumber = false;
        // this.$bvModal.msgBoxOk('영문자와 숫자를 포함하여 4~20자로 해주세요').then();

      }else{
        data.isAblePhone ? this.isAblePhone = true : this.isAblePhone = false;
        this.isRegPhoneNumber = true;
        this.okPhone = data.isAblePhone;

      }
    }

  }

  async addressComplete(data:any){
    const { address } = data

    if(!address){
      this.isAbleAddress = false;
      this.okAddress = false;
    }else{
      this.isAbleAddress = true;
      this.okAddress = true;
    }

    this.userAddress = address;
    this.$refs['my-modal'].hide()
  }

  async phoneInput_Hyphen(){
    this.userPhoneNumber = this.userPhoneNumber.replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-")
  }

  test() {
    this.userId = "testid1234";
    this.userPassword= "@test1234567";
    this.userConfirmPassword= "@test1234567";
    this.userName= "테스트";
    this.userEmail= "test@gmail.com";
    this.userPhoneNumber= "010-1111-1111";
    this.userAddress= "테스트DDD";
    this.userDetailAddress= "테스트DDD";
  }



  mounted(){}

}
</script>

<style scoped>
.input-group{
  width: 350px;
}
.form_wd80{
  width: 80% !important;
}
.input_error{
  padding-left:10px;
  color : #e52528;

}


</style>
