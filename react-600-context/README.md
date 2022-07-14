# React Props Drilling
* React Component 가 여러겹으로 감싸고 있을때, 상위 Component 에서 state 를 생성하고 그 state 를 사용하여 하위(child) component 들이 rendering 을 하거나 state 를 변경해야 하는 경우가 많다
* 상위 Component 에서 여러겹의 하위 Component 로 state 를 전달할때 중간에 위치한 Component 들은 실제로 필요하지 않지만 부모 Component 로부터 props 로 받아서 자식 Component 에게 계속해서 props 를 toss 해야하는 경우가 발생
* 이러한 drilling 현상을 방지하기 위하여 store 라는 개념이 생겨났다. Drilling 현상을 방지하기 위하여 기본 react 기능 외에  ```Redux``` ```mobx``` ```recoil``` 등의 3rd part LIB 를 사용한다
* 3rd part LIB 들이 오히려 react 보다 학습하기 어려운 경우가 많다. 그래서 react 에서는 단지 store 기능만 수행하는 Context.Provider 라는 도구를 제공
# React Context.Provider 를 사용하여 Drilling 문제 해결하기
* 3rd part LIB 를 사용하여 Drilling 문제를 해결 할 수 있지만, 학습 곡선이 매우 커서 큰 프로젝트 외에는 오히려 불편 할 수 있다
* 현재 React 에서는 Context.Provider 를 사용하여 일부 문제 해결 할 수 있으나 무분별하게 사용시 project 의 유지보수성이 떨어지는 문제 발생
* 또한 React 버전이 올라갈수록 여러가지 문제가 해결되고 있어 경우에 따라 좋은 도구가 될 수 있다.
* context-v0 에서는 일반적인 Drilling 이 적용되는 코드를 사용했고 context-v2 에서는 매우 간단하게 Context.Provider 를 적용해 코드를 작성한다