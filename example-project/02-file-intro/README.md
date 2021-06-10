## 파일 Tree 설명

## 파일 Tree 요약

+ 프로젝트명
  - dist ( 배포 파일 )         
  - node_modules ( lib저장소 각 module에 대한 값을 가지고있다. )
  - src ( 사용자 설정 경로 )
    * 기능 1 ( 기능3 참조 )
    * 기능 2 ( 기능3 참조 )
    * 기능 3
      - 기능3 ( module,service,controller app.module에 장착되어 실행됨 여기서 dto, interface까지 구축 )
    * app ( module,service,controller main 실행시 실행되는 부분 )
    * main( main 실행 파일 app에 대한 module이 장착되어 있음 ) 
  - test ( test 파일들 )
  - othesFiles ( 설정 파일들 )


```bash
핵심 기능 : CONTROLLER , SERVICE , MODULE 
CONTROLLER : 정해진 router 값 ( /user/login , /board/insert )등을 받고 그에 대한 처리 값을 반환 해주는 곳
SERVICE : CONTROLLER에서 요청되어 설정된 로직에 따라 움직이는 곳
MODULE : 기능별 CONTOLLER 와 SERVICE가 정의되어있는 곳
```

