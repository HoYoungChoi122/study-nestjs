# FronEnd Vue  설치 방법

## Project setup
```bash
STEP 1 
전역설치 : 
$ npm install -g @vue/cli
해당폴더 설처 : 
$ npm install vue 

STEP 2
프로젝트 폴더 생성
$ npm create "프로젝트명"
EX) $ npm create front
진행시 터미널창에 스페이스바로 선택 , 엔터로 확정
중간에 typescript, router등 추가로 설치 가능
 
 
STEP 3
추가 라이브러리

axios : api 사용 
$ npm install axios 
사용 방법 : https://joshua1988.github.io/vue-camp/vue/axios.html#%EC%95%A1%EC%8B%9C%EC%98%A4%EC%8A%A4-%EC%84%A4%EC%B9%98

bootstrap : 부트스트랩 ( UI )
$ npm install vue bootstrap bootstrap-vue
사용 방법 : https://bootstrap-vue.org/docs
 
 
```


```typescript
/*
AXIOS 세팅 방법 (npm 설치 이후)

SETP 1
main.ts / js에 등록
*/
//---------------
//main.ts / js
import VueAxios from 'vue-axios';
import {ins as axios} from './utils/axios';

Vue.use(VueAxios, axios)
//---------------


//---------------
//axios ( ./utils/axios ) 

import VueAxios from 'vue-axios';
import {ins as axios} from './utils/axios';

Vue.use(VueAxios, axios)
//---------------


//---------------
//axios ( ./utils/axios ) 
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? '/api' : '/api' // 이부분은 backend 경로 설정 아래 참조
const instance :AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 20000
});
instance.interceptors.request.use(config  => {
    //요청하는곳의 인터셉트
    return config;
})
instance.interceptors.response.use(response => {
    // 받는곳의 인터셉트
    const {data} = response

    return response
}, error => {
    const {response: { status }, request, message } = error
    return error
});

export const ins = instance

//---------------

//---------------
//vue.config.js  ( 제일 최상위 폴더 아래  vue.config.js ( package.json이랑 같은 위치 ) 
// 이때 백엔드에 요청이 localhost:3001/api/~ 으로 되기에 backend쪽의 globalprefix설정해줘야함
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
            }
        }
    }
}
//---------------
//예제

try{
    const { data } = await Vue.axios({
        url:'/test',
        method:'GET',
    })
    console.log(data);
} catch(e){
    console.log(e.message);
}



//XXXXXXXXX backend 쪽
// $ npm install --save @nestjs/passport passport passport-local
// $ npm install --save-dev @types/passport-local
// $ npm install --save @nestjs/jwt passport-jwt
// $ npm install --save-dev @types/passport-jwt
```

