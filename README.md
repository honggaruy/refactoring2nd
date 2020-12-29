# about refacting2nd

* 마틴 파울러의 `Refactoring 2nd Edition`을 따라해 본다

# 환경

* node v14.5.0 으로 테스트
* 각 Chapter 별로 별도의 패키지처럼 구성했다
    * 각각의 폴더로 가서 npm script 명령을 실행해야함

# Chap04 실행하는 법

* 순서가 잘못된 것은 아니고 Chap04 먼저 확인하는 것이 맞다 
    * Refactoring 시작전에는 테스트 프레임워크가 갖춰져 있어야 한다
* 설치 : npm install  (mocha, chai 설치필요)
* 지원하는 npm script 명령
    * npm test  : Province 클래스를 검증한다

# Chap01 실행하는 법

* 설치 : npm install  (mocha, chai 설치필요)
* 지원하는 npm script 명령
    * npm run main : renderPlainText(), renderHtml() 의 텍스트 버전 출력을 확인할 수 있다.
    * npm run server : localhost:8000 주소에 접속하여 renderHtml() 출력을 browser로 확인할 수 있다.
    * npm test : renderPlainText(), renderHtml() 출력이 기대하는 결과와 같은지 확인한다 

# 기타

* [Git Commit Message StyleGuide](https://github.com/slashsbin/styleguide-git-commit-message)를 따라해 보기로 했다