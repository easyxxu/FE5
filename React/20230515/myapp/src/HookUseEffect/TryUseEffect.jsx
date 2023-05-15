import React, { useState, useEffect } from "react"; //useEffect추가

function Counter() {
  const [count, setCount] = useState(0);
  const [checkRender, setCheckRender] = useState(false);
  const countUp = () => {
    setCount(count + 1);
  };
  //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  useEffect(() => {
    if (checkRender) {
      if (count % 2) {
        alert("홀수입니다");
      } else {
        alert("짝수입니다");
      }
    }
    setCheckRender(true);
  }, [count]);
  // 컴포넌트가 업데이트 될 때마다 매번 실행
  //   useEffect(() => {
  //     if (count % 2) {
  //       alert("홀수입니다");
  //     } else {
  //       alert("짝수입니다");
  //     }
  //   });

  // 처음에만 실행
  //   useEffect(() => {
  //     if (count % 2) {
  //       alert("홀수입니다");
  //     } else {
  //       alert("짝수입니다");
  //     }
  //   }, []);

  // 변수들의 변화가 일어날 때마다 실행
  //   useEffect(() => {
  //     if (count % 2) {
  //       alert("홀수입니다");
  //     } else {
  //       alert("짝수입니다");
  //     }
  //   }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up!</button>
    </>
  );
}
export default Counter;
