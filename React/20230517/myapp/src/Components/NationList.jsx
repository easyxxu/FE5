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
  }, [url]);
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
