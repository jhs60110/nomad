import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';


ReactDOM.render( <App />,
  document.getElementById('root') // index.html에 31번째 줄 div id= root를 받음
);
// reder옆 <App/>은 component 
// react는 component와 함께 동작한다. 모든것은 component임
// component는 HTML을 반환하는 함수임 js + html = JSX
// react application은 한 번에 하나의 component만 rendering 할 수 있다.