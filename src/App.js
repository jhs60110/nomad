import React from 'react';
//react = 당신이 거기에 쓰는 모든 요소를 생성함, 자바스크립트와 함께 만들고 html로 집어 넣음 <-- 브라우저 요소에서 html이 보이지 않는 이유
import PropTypes from "prop-types";



  const grapeKind = [
    {
      id : 1,
      name: "Green grape",
      image:
        "https://img2.tmon.kr/cdn3/deals/2019/08/30/2264353898/original_2264353898_front_a7e20_1567132362production.png"
     , rating: 5
    },
    {
      id: 2,
      name: "red grape",
      image:
        "https://th4.tmon.kr/thumbs/image/932/ae3/059/01ed225d2_700x700_95_FIT.jpg"
        , rating: 3
    },
    {
      id: 3,
      name: "blue grape",
      image:
        "https://previews.123rf.com/images/dvolkovkir1980/dvolkovkir19801709/dvolkovkir1980170900083/86369274-%ED%8C%8C%EB%9E%80%EC%83%89-%ED%8F%AC%EB%8F%84%EC%9D%98-%ED%81%BC%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%82%98%EB%AD%87%EC%9E%8E%EA%B3%BC-%ED%8F%AC%EB%8F%84-%EB%82%98%EB%AC%B4%EC%99%80-%EB%B8%94%EB%A3%A8-%ED%8F%AC%EB%8F%84%EC%9E%85%EB%8B%88%EB%8B%A4-%ED%8F%AC%EB%8F%84%EC%9D%98-%EC%82%AC%EC%A7%84%EC%9E%85%EB%8B%88%EB%8B%A4-.jpg"
        , rating: 4
    }
  ];

  function Grape({ name, picture, rating}) {
    return (
      <div>
        <h2>I like {name}</h2>
        <h4>{rating}/5</h4>
        <img src={picture} alt={name}/>
      </div>
    );
  }

  Grape.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
  };

function App() {
  return (
    <div>
      {/*map이 하는것은 rendering array로부터 나에게 array를 줌 */}
      {grapeKind.map(color => (       /*color는 오브젝트 이것은 name과 image를 포함*/
        <Grape 
        key={color.id} 
        name={color.name} 
        picture={color.image}
        rating={color.rating} />
      ))}
    </div>
  );
}

export default App;
