# React Props Drilling
* React Component 가 여러겹으로 감싸고 있을때, 상위 Component 에서 state 를 생성하고 그 state 를 사용하여 하위(child) component 들이 rendering 을 하거나 state 를 변경해야 하는 경우가 많다
* 상위 Component 에서 여러겹의 하위 Component 로 state 를 전달할때 중간에 위치한 Component 들은 실제로 필요하지 않지만 부모 Component 로부터 props 로 받아서 자식 Component 에게 계속해서 props 를 toss 해야하는 경우가 발생
* 이러한 drilling 현상을 방지하기 위하여 store 라는 개념이 생겨났다. Drilling 현상을 방지하기 위하여 기본 react 기능 외에  ```Redux``` ```mobx``` ```recoil``` 등의 3rd part LIB 를 사용한다
* 3rd LI 들이 오히려 react 보다 학습하기 어려운 경우가 많다. 그래서 react 에서는 단지 store 기능만 수행하는 Context.Provider 라는 도구를 제공

# Context.Provider 의 향상된 사용
* Context-v2 에서는 Context.Provider 의 간단한 사용법으로 코드를 작성했다. 이는 실제 사용해야 할 state 변수와 여러가지 함수들을 만드는 곳과 보관하는 곳이 별도의 장소가 되어 프로젝트가 커지면 관리가 어려울 수 있다.
* 관리할 요소들(state, 함수들) 과 store 를 한곳에서 관리하는 코드를 작성해본다.

# 합성 - Composition
* 일반적인 상속과 차이를 둔 개념
* 서로다른 객체 여러개를 묶어 새로운 기능이나 객체를 구성
* 상속 : is-a, 합성 : has-a
