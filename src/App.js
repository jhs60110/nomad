import React from 'react';
//react = 당신이 거기에 쓰는 모든 요소를 생성함, 자바스크립트와 함께 만들고 html로 집어 넣음 <-- 브라우저 요소에서 html이 보이지 않는 이유

class App extends React.Component{ // react.component는 많은 것을 가지고 있고, 그중 하나가 우리가 사용할 state임
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
  /* { //컴포넌트가 mount될때, 컴포넌트가 screen에 표시될때, 컴포넌트가 website에 갈때 constructor를 호출한다.
// 처음 component가 render할때
    console.log("Component render");
  }
  componentDidUpdate() { //업데이트의 원인: 내가 만든 add minus
    console.log("updated");
  }
  componentWillUnmount() { // 컴포넌트 종료시 호출됨
    console.log("Goodbye");
  }*/
  setTimeout(() => { 
    this.setState({ isLoading: false });
  }, 6000);
}
  render() { 
   /* console.log("rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
      );*/
      const { isLoading } = this.state;
      return <div>{isLoading ? "Loading" : "We are ready"}</div>;
}}


export default App;
