## CONTROLLER

```bash
컨트롤러의 목적은 특정요청을 "수신"하는 것 
기본 컨트롤러를 생성하기위해 클래스와 데코레이션을 사용함
 * 데코레이터 ( @Controller , @Get, @Post등 ) = Nest로부터 IOC(의존성)를 주입받은 컴포넌트
 * 대부분의 데코레이터는 @nest.js/common에서 import가 가능하다.
$ nest g controller 생성이름 을 통해 생성할 수 있다.
ex) $ nest g controller users
  
-url method에 대해 해당 데코레이터로 처리 가능  
@Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head(), @All()

-라우팅 와일드카드 
EX) @Get('/us**')
/us1d , /user , /usad 등 * 와일드 카드로 사용 가능
* 문자는 ?, + , * 및 () 경로에 사용하고 그들의 정규 표현식 대응의 하위 집합을 하다 할 수 있다.

-HttpCode()
데코레이터를 통해 핸들러 레벨에서 데코레이터를 추가하여 동작을 변경할 수 있다.
@Post
@HttpCode(204)
create(){
  return '동작 추가'
}

-헤더
사용자 지정 응답헤더를 지정하려면 @Header() 데코레이터 또는 라이브러리 별 응답 객체를 사용하고 res.header를 직접 호출 할 수 있다.
@Post()
@Header('Cache-Control', 'none')
create() {
  return 'This action adds a new cat';
}

-리디렉션
응답을 특정 URL로 리디렉션(다시보내기) 하려면 @Redirect() 데코레이터또는 라이브러리 별 응답 개체를 사용하고 res.redirect()를 직접 호출할 수 있다.
@Redirect()는 인수를 url,httpcode( statusCode )를 받는데 모두 선택사항이다. default Code = 302
@Get()
@Redirect('https://nestjs.com', 301)


  
  
 
```
# 예제1
## users.controller.ts
```javascript
import { Get, Controller } from '@nestjs/common';

//<  @nestjs/common으로부터 Controller를 import 를 받아야함
@Controller('users') // /users에 대한 라우터값을 받아 여기 컨트롤러로 가져옴
export class UsersController {

    @Get() //<  @nestjs/common으로부터 Get을 import 를 받아야함
    findAll(): string{
        return "기본경로 >/users< 에 대한 요청 처리 메소드 "
    }

}
// 브라우저를 통해 실행가능 input url : localhost:3000/users
//결과 = > 기본경로 >/users< 에 대한 요청 처리 메소드
```

# 예제2
## users.controller.ts
```javascript
import { Get, Controller } from '@nestjs/common';

//<  @nestjs/common으로부터 Controller를 import 를 받아야함
@Controller('users') // /users에 대한 라우터값을 받아 여기 컨트롤러로 가져옴
export class UsersController {

    @Get() //<  @nestjs/common으로부터 Get을 import 를 받아야함
    findAll(): string{
        return "유저에 대한 존재여부 반환"
    }

}
// 브라우저를 통해 실행가능 input url : localhost:3000/users
//결과 = > 기본경로 >/users< 에 대한 요청 처리 메소드
```

