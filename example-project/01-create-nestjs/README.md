## install & create Project Nest.js

## 설치

```bash
 NPM 다운 및 프로젝트 생성 방법 
1. 빈 프로젝트 생성

2. 터미널로 아래 명령어 입력
$ npm i -g @nestjs/cli

3. nest new 프로젝트이름 으로 프로젝트 생성 ( 이때 옵션은 선택 npm , yarn )
--예제-- 
$ nest new project-01
$ nest new example-project/01-create-nestjs

4. 터미널에 npm start 입력시 실행 가능  ( package.json 에 start 항목 )
$ npm start 
localhost:3000/ 을 브라우저 도메인에 입력시 HelloWorld 보임

해당 프로젝트에서 실행해야만 npm start 명령어 적용 가능 ( cd 경로 )
```

## ERROR

```bash
 
already in user :::3000
오류 설명 : 포트번호가 겹침
오류 해결 : src/main.ts 파일의 app.listen(3000) << 3000을  수정하여줌 (포트번호를 의미) 

```