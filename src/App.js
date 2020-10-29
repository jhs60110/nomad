import React from 'react';
//react = 당신이 거기에 쓰는 모든 요소를 생성함, 자바스크립트와 함께 만들고 html로 집어 넣음 <-- 브라우저 요소에서 html이 보이지 않는 이유
import Grape from "./grape";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Grape />
    </div>
  );
}
export default App;
