import { useEffect, useState } from "react";
import styled from "styled-components";
const Item = styled.div`
  margin: 60px auto;
  ul {
    padding: 10px;
  }
  li {
    list-style-type: none;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;
  }
`;
export default function NationList() {
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/nations");

  // 만약 state가 변하지 않으면(아래의 버튼을 실행x) useEffect를 사용하지 않아도 통신은 잘 실행됨
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("네트워크 응답에 문제가 있음");
        }
        const data = await response.json();
        setNations(data);
      } catch (error) {
        console.error("오류가 발생하였습니다.. ", error);
      }
    }
    getData();
  }, [url]); // url이 변할 때마다 실행됨
  console.log(nations);
  return (
    <Item>
      <h1>국가 리스트</h1>
      <ul>
        {nations.map((nation) => {
          return (
            <li key={nation.id}>
              <h3>
                {nation.id}. {nation.title}
              </h3>
              <p>인구 수 : {nation.population}</p>
              <p>대륙 : {nation.loc}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations?loc=europe");
          }}
        >
          유럽 목록
        </button>
        <button
          onClick={() => {
            setUrl("http://localhost:3000/nations");
          }}
        >
          전체 목록
        </button>
      </div>
    </Item>
  );
}
